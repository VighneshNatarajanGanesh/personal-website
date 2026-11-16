// Igloo-style career lap: a wireframe circuit that assembles, then a chase-cam lap.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Fog, Color, Vector3, CatmullRomCurve3,
  BufferGeometry, Float32BufferAttribute, Line, LineSegments, LineBasicMaterial, LineDashedMaterial,
  Points, PointsMaterial, Mesh, MeshBasicMaterial, DoubleSide, PlaneGeometry, WireframeGeometry,
  BoxGeometry, EdgesGeometry, SphereGeometry, Sprite, SpriteMaterial, CanvasTexture, AdditiveBlending, Group
} from 'three';

const CTRL = [
  [-30, 0], [10, 0], [45, 0], [60, -4], [66, -14], [60, -24], [48, -24], [40, -18], [30, -20], [22, -30], [24, -42],
  [36, -50], [58, -52], [80, -50], [96, -42], [100, -28], [94, -14], [92, 2], [98, 16], [96, 30], [82, 38], [60, 40],
  [30, 40], [0, 38], [-28, 34], [-46, 24], [-52, 10], [-46, 2]
];
// control-point index of each milestone apex, in lap order
// newest first: the lap starts at Millennium and ends where it all began
export const MILESTONES = [
  { key: 'start', idx: 0, label: 'Start', tag: 'Millennium, now', hud: 'Now' },
  { key: 't1', idx: 4, label: 'T1', tag: 'Hackathon win, 2025', hud: '2025' },
  { key: 't2', idx: 10, label: 'T2', tag: 'Goldman Sachs, 2022–24', hud: '2023' },
  { key: 't3', idx: 15, label: 'T3', tag: 'London Business School, 2022', hud: '2022' },
  { key: 't4', idx: 18, label: 'T4', tag: 'Trexquant, 2022', hud: '2022' },
  { key: 't5', idx: 20, label: 'T5', tag: 'Warwick, 2021', hud: '2021' },
  { key: 't6', idx: 26, label: 'T6', tag: 'BITS Pilani, 2019', hud: '2019' },
  { key: 'finish', idx: 0, label: 'Flag', tag: 'Next lap', hud: 'Next', finish: true }
];

const P_ASM = 0.11, P_LAP0 = 0.13, P_LAP1 = 0.93;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a)); return t * t * (3 - 2 * t); };

export function initLap(root, { mobile = false } = {}) {
  const canvas = root.querySelector('[data-lap-canvas]');
  let renderer;
  try { renderer = new WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' }); }
  catch (e) { return null; }
  const BG = 0x0D1B2E;
  renderer.setClearColor(BG, 1);
  const scene = new Scene();
  scene.fog = new Fog(BG, 90, mobile ? 520 : 330);
  const camera = new PerspectiveCamera(mobile ? 55 : 42, 1, 0.5, 700);

  const FROST = new Color('#E8EDF4'), MIST = new Color('#A9B4C4'), LIVERY = new Color('#F3D70A'), SKY = new Color('#3DB5E6');

  // ---------- circuit ----------
  let cx = 0, cz = 0;
  CTRL.forEach(([x, z]) => { cx += x; cz += z; }); cx /= CTRL.length; cz /= CTRL.length;
  const ctrl3 = CTRL.map(([x, z], i) => {
    const u = i / CTRL.length;
    const y = 2.4 * Math.sin(u * Math.PI * 4 + 0.6) + 1.2 * Math.sin(u * Math.PI * 6);
    return new Vector3(x - cx, y + 2.8, z - cz);
  });
  const curve = new CatmullRomCurve3(ctrl3, true, 'centripetal');
  const M = mobile ? 900 : 1400;
  const P = curve.getSpacedPoints(M); // M+1 points, last == first
  const T = P.map((p, i) => P[(i + 1) % M].clone().sub(P[(i - 1 + M) % M]).normalize());
  const UP = new Vector3(0, 1, 0);
  const Nrm = T.map(t => new Vector3().crossVectors(UP, t).normalize());
  const HW = 2.3;

  const uOfCtrl = idx => {
    let best = 0, bd = Infinity;
    for (let i = 0; i < M; i++) { const d = P[i].distanceToSquared(ctrl3[idx]); if (d < bd) { bd = d; best = i; } }
    return best / M;
  };
  MILESTONES.forEach(m => { m.u = m.finish ? 1 : uOfCtrl(m.idx); });
  MILESTONES[0].u = 0;

  const lineGeo = pts => { const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(pts.flatMap(v => [v.x, v.y, v.z]), 3)); return g; };
  const left = P.map((p, i) => p.clone().addScaledVector(Nrm[i], HW));
  const right = P.map((p, i) => p.clone().addScaledVector(Nrm[i], -HW));
  const edgeMat = new LineBasicMaterial({ color: FROST, transparent: true, opacity: 0.9 });
  const edgeL = new Line(lineGeo(left), edgeMat);
  const edgeR = new Line(lineGeo(right), edgeMat);
  scene.add(edgeL, edgeR);

  const centre = new Line(lineGeo(P), new LineDashedMaterial({ color: MIST, dashSize: 1.1, gapSize: 1.9, transparent: true, opacity: 0.35 }));
  centre.computeLineDistances();
  scene.add(centre);

  // ribs: wireframe rungs across the track
  const ribPts = [];
  const RIB = mobile ? 10 : 7;
  for (let i = 0; i < M; i += RIB) { ribPts.push(left[i], right[i]); }
  const ribs = new LineSegments(lineGeo(ribPts), new LineBasicMaterial({ color: MIST, transparent: true, opacity: 0.16 }));
  scene.add(ribs);

  // faint surface
  const surf = [];
  for (let i = 0; i < M; i++) { const a = left[i], b = right[i], c = left[i + 1], d = right[i + 1]; surf.push(a, b, c, b, d, c); }
  const surface = new Mesh(lineGeo(surf), new MeshBasicMaterial({ color: FROST, transparent: true, opacity: 0.035, side: DoubleSide, depthWrite: false }));
  scene.add(surface);

  // kerbs, the way a real circuit lays them out: outside at turn-in, inside at the apex, outside at the exit
  const kerbPos = [], kerbCol = [];
  const corners = MILESTONES.filter(m => !m.finish && m.key !== 'start').map(m => {
    const c = Math.round(m.u * M);
    const turn = new Vector3().crossVectors(T[(c - 8 + M) % M], T[(c + 8) % M]).y; // >0: left-hander
    return { c, inside: turn > 0 ? 1 : -1 }; // +1 = left of travel (+Nrm)
  });
  const KS = Math.round(M / 1400 * 26); // kerb half-length in samples
  const addKerb = (from, to, side) => {
    for (let k = from; k < to; k++) {
      const i = ((k % M) + M) % M, j = (i + 1) % M;
      const o = HW * side, o2 = (HW + 0.9) * side;
      const a = P[i].clone().addScaledVector(Nrm[i], o), b = P[i].clone().addScaledVector(Nrm[i], o2);
      const cc = P[j].clone().addScaledVector(Nrm[j], o), d = P[j].clone().addScaledVector(Nrm[j], o2);
      const col = (Math.floor((k - from) / 3) % 2) ? FROST : LIVERY;
      [a, b, cc, b, d, cc].forEach(v => { kerbPos.push(v.x, v.y + 0.02, v.z); kerbCol.push(col.r, col.g, col.b); });
    }
  };
  const ENTRY = Math.round(KS * 1.9), EXIT = Math.round(KS * 1.9);
  corners.forEach(({ c, inside }) => {
    addKerb(c - ENTRY - KS, c - ENTRY + Math.round(KS * 0.4), -inside); // turn-in: outside
    addKerb(c - Math.round(KS * 0.55), c + Math.round(KS * 0.55), inside); // apex: inside
    addKerb(c + EXIT - Math.round(KS * 0.4), c + EXIT + KS, -inside);    // exit: outside
  });

  // out-in-out racing line: lateral offset keyed at entry, apex and exit of every corner
  const keys = [];
  corners.forEach(({ c, inside }) => {
    keys.push([c - ENTRY, -inside * HW * 0.72], [c, inside * HW * 0.82], [c + EXIT, -inside * HW * 0.72]);
  });
  keys.sort((x, y) => x[0] - y[0]);
  const offs = new Float32Array(M + 1);
  for (let i = 0; i <= M; i++) {
    let k1 = keys.findIndex(k => k[0] > i); if (k1 < 0) k1 = 0;
    const k0 = (k1 - 1 + keys.length) % keys.length;
    let i0 = keys[k0][0], i1 = keys[k1][0];
    let ii = i;
    if (i1 <= i0) { i1 += M; if (ii < i0) ii += M; }
    const t = Math.min(1, Math.max(0, (ii - i0) / Math.max(1, i1 - i0)));
    const e = t * t * (3 - 2 * t);
    offs[i] = keys[k0][1] + (keys[k1][1] - keys[k0][1]) * e;
  }
  const RL = P.map((p, i) => p.clone().addScaledVector(Nrm[i % M], offs[i % M]));
  const rlAt = (u, out) => {
    const f = (((u % 1) + 1) % 1) * M, i = Math.floor(f), t = f - i;
    return out.copy(RL[i]).lerp(RL[(i + 1) % (M + 1)], t);
  };
  const kg = new BufferGeometry();
  kg.setAttribute('position', new Float32BufferAttribute(kerbPos, 3));
  kg.setAttribute('color', new Float32BufferAttribute(kerbCol, 3));
  const kerbs = new Mesh(kg, new MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0, side: DoubleSide, depthWrite: false }));
  scene.add(kerbs);

  // chequered start/finish line
  const chqPos = [], chqCol = [];
  {
    const i0 = 0, t = T[i0], n = Nrm[i0], o = P[i0];
    const cols = 8, rows = 2, cw = (HW * 2) / cols, ch = 0.55;
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const base = o.clone().addScaledVector(n, -HW + c * cw).addScaledVector(t, (r - 1) * ch);
      const a = base, b = base.clone().addScaledVector(n, cw), cc = base.clone().addScaledVector(t, ch), d = b.clone().addScaledVector(t, ch);
      const col = (r + c) % 2 ? FROST : new Color('#0B1522');
      [a, b, cc, b, d, cc].forEach(v => { chqPos.push(v.x, v.y + 0.03, v.z); chqCol.push(col.r, col.g, col.b); });
    }
  }
  const chg = new BufferGeometry();
  chg.setAttribute('position', new Float32BufferAttribute(chqPos, 3));
  chg.setAttribute('color', new Float32BufferAttribute(chqCol, 3));
  const chequer = new Mesh(chg, new MeshBasicMaterial({ vertexColors: true, side: DoubleSide, transparent: true, opacity: 0 }));
  scene.add(chequer);

  // start gantry with five lights
  const gantry = new Group();
  {
    const o = P[0], n = Nrm[0], h = 7.5, w = HW + 1.6;
    const a = o.clone().addScaledVector(n, w), b = o.clone().addScaledVector(n, -w);
    const g = lineGeo([a, a.clone().setY(a.y + h), b, b.clone().setY(b.y + h), a.clone().setY(a.y + h), b.clone().setY(b.y + h)]);
    gantry.add(new LineSegments(g, new LineBasicMaterial({ color: FROST, transparent: true, opacity: 0.7 })));
  }
  const lights = [];
  {
    const o = P[0], n = Nrm[0];
    for (let k = 0; k < 5; k++) {
      const pos = o.clone().addScaledVector(n, (k - 2) * 0.95).setY(o.y + 6.6);
      const box = new LineSegments(new EdgesGeometry(new BoxGeometry(0.7, 1.1, 0.4)), new LineBasicMaterial({ color: MIST, transparent: true, opacity: 0.7 }));
      box.position.copy(pos); box.lookAt(pos.clone().add(T[0])); gantry.add(box);
      const bulb = new Mesh(new SphereGeometry(0.22, 12, 8), new MeshBasicMaterial({ color: new Color('#FF3B30'), transparent: true, opacity: 0 }));
      bulb.position.copy(pos).addScaledVector(T[0], -0.25); gantry.add(bulb); lights.push(bulb);
    }
  }
  scene.add(gantry);

  // dot grid floor
  const gridPts = [];
  const SP = mobile ? 3.4 : 2.6, EX = 150, EZ = 110;
  for (let x = -EX; x <= EX; x += SP) for (let z = -EZ; z <= EZ; z += SP) gridPts.push(x, 0, z);
  const gg = new BufferGeometry(); gg.setAttribute('position', new Float32BufferAttribute(gridPts, 3));
  const grid = new Points(gg, new PointsMaterial({ color: MIST, size: mobile ? 0.26 : 0.2, transparent: true, opacity: 0, depthWrite: false }));
  scene.add(grid);

  // wireframe hills at the horizon
  const hillGeo = new PlaneGeometry(560, 440, mobile ? 40 : 64, mobile ? 32 : 50);
  hillGeo.rotateX(-Math.PI / 2);
  {
    const pa = hillGeo.attributes.position;
    for (let i = 0; i < pa.count; i++) {
      const x = pa.getX(i), z = pa.getZ(i);
      const r = Math.hypot(x / 1.25, z);
      const k = smooth(95, 200, r);
      const n = Math.sin(x * 0.045) * Math.cos(z * 0.05) + 0.6 * Math.sin(x * 0.11 + z * 0.07) + 0.35 * Math.cos(x * 0.21 - z * 0.17);
      pa.setY(i, -0.3 + k * (10 + n * 9));
    }
  }
  const hills = new LineSegments(new WireframeGeometry(hillGeo), new LineBasicMaterial({ color: MIST, transparent: true, opacity: 0 }));
  scene.add(hills);

  // milestone markers
  const markers = MILESTONES.filter(m => !m.finish).map(m => {
    const i = Math.round(m.u * M) % M;
    const base = P[i].clone();
    const topV = base.clone().setY(base.y + (m.key === 'start' ? 10.5 : 8));
    const g = new Group();
    const stem = new Line(lineGeo([base, topV]), new LineBasicMaterial({ color: FROST, transparent: true, opacity: 0 }));
    const ring = [];
    for (let k = 0; k <= 40; k++) { const a = (k / 40) * Math.PI * 2; ring.push(new Vector3(base.x + Math.cos(a) * 3.4, base.y + 0.05, base.z + Math.sin(a) * 3.4)); }
    const ringL = new Line(lineGeo(ring), new LineBasicMaterial({ color: LIVERY, transparent: true, opacity: 0 }));
    g.add(stem, ringL); scene.add(g);
    return { m, i, top: topV, stem, ring: ringL };
  });

  // car: glowing dot + trail
  const glowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const x = c.getContext('2d'); const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,240,140,1)'); g.addColorStop(0.25, 'rgba(243,215,10,0.55)'); g.addColorStop(1, 'rgba(243,215,10,0)');
    x.fillStyle = g; x.fillRect(0, 0, 128, 128); return new CanvasTexture(c);
  })();
  const car = new Group();
  car.add(new Mesh(new SphereGeometry(0.34, 16, 12), new MeshBasicMaterial({ color: LIVERY })));
  const glow = new Sprite(new SpriteMaterial({ map: glowTex, blending: AdditiveBlending, depthWrite: false, transparent: true }));
  glow.scale.set(3.6, 3.6, 1); car.add(glow);
  scene.add(car);
  const TRAIL = 90;
  const trailGeo = new BufferGeometry();
  trailGeo.setAttribute('position', new Float32BufferAttribute(new Float32Array(TRAIL * 3), 3));
  const tcol = new Float32Array(TRAIL * 3);
  const bg = new Color(BG);
  for (let k = 0; k < TRAIL; k++) { const c = bg.clone().lerp(LIVERY, (k / (TRAIL - 1)) ** 1.6); tcol.set([c.r, c.g, c.b], k * 3); }
  trailGeo.setAttribute('color', new Float32BufferAttribute(tcol, 3));
  const trail = new Line(trailGeo, new LineBasicMaterial({ vertexColors: true }));
  scene.add(trail);
  // racing line already driven (sky)
  const driven = new Line(lineGeo(RL), new LineBasicMaterial({ color: SKY, transparent: true, opacity: 0.6 }));
  driven.position.y = 0.06;
  scene.add(driven);

  // ---------- html overlays ----------
  const labelsEl = root.querySelector('[data-lap-labels]');
  const labels = markers.map(mk => {
    const el = document.createElement('div');
    el.className = 'tl';
    el.innerHTML = `<b>${mk.m.label}</b><span>${mk.m.tag}</span>`;
    labelsEl.appendChild(el);
    return el;
  });
  const panels = [...root.querySelectorAll('.panel')];
  const panelFor = key => panels.find(p => p.dataset.u === key);
  const intro = root.querySelector('[data-lap-intro]');
  const hud = root.querySelector('[data-hud]');
  const hudYear = root.querySelector('[data-hud-year]');
  const hudFill = root.querySelector('[data-hud-fill]');
  const hudBar = hudFill.parentElement;
  MILESTONES.filter(m => !m.finish && m.key !== 'start').forEach(m => {
    const tick = document.createElement('span'); tick.className = 'hud-tick'; tick.style.left = (m.u * 100).toFixed(2) + '%'; hudBar.appendChild(tick);
  });

  // ---------- state ----------
  let progress = 0, W = 1, H = 1;
  const camPos = new Vector3(), camLook = new Vector3();
  let first = true;
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('pointermove', e => { mouse.tx = (e.clientX / innerWidth - 0.5); mouse.ty = (e.clientY / innerHeight - 0.5); }, { passive: true });

  function resize() {
    W = root.clientWidth; H = root.clientHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75));
    renderer.setSize(W, H, false);
    camera.aspect = W / H; camera.updateProjectionMatrix();
  }

  const tmp = new Vector3(), tmp2 = new Vector3(), ov = new Vector3(), ol = new Vector3(), cv = new Vector3(), cl = new Vector3();
  let activeKey = null;

  function update(dt) {
    const p = progress;
    const asm = smooth(0, P_ASM, p);
    const lapU = clamp((p - P_LAP0) / (P_LAP1 - P_LAP0));

    // assembly
    const n = Math.max(2, Math.floor(asm * (M + 1)));
    edgeL.geometry.setDrawRange(0, n); edgeR.geometry.setDrawRange(0, n); centre.geometry.setDrawRange(0, n);
    ribs.geometry.setDrawRange(0, Math.floor(asm * ribPts.length / 2) * 2);
    surface.material.opacity = 0.035 * asm;
    grid.material.opacity = 0.42 * smooth(0, 0.6, asm);
    hills.material.opacity = 0.09 * smooth(0.3, 1, asm);
    kerbs.material.opacity = 0.85 * smooth(0.7, 1, asm);
    chequer.material.opacity = 0.9 * smooth(0.05, 0.3, asm);
    gantry.children[0].material.opacity = 0.7 * smooth(0.0, 0.25, asm);
    markers.forEach(mk => {
      const on = smooth(mk.m.u - 0.02, mk.m.u + 0.06, asm);
      mk.stem.material.opacity = 0.65 * on; mk.ring.material.opacity = (lapU >= mk.m.u && p > P_LAP0 ? 0.95 : 0.35) * on;
      mk.visible = on;
    });

    // start lights: light up one by one, then lights out as the lap starts
    lights.forEach((b, k) => {
      const lit = p > 0.07 + k * 0.011 && p < P_LAP0 - 0.006;
      b.material.opacity += ((lit ? 1 : 0) - b.material.opacity) * Math.min(1, dt * 18);
    });

    // driven line + car
    driven.geometry.setDrawRange(0, Math.max(0, Math.floor(lapU * M) + 1));
    rlAt(lapU, tmp);
    car.position.copy(tmp).setY(tmp.y + 0.45);
    car.visible = p > P_LAP0 - 0.01;
    trail.visible = car.visible;
    const tp = trailGeo.attributes.position;
    for (let k = 0; k < TRAIL; k++) {
      const u = lapU - (TRAIL - 1 - k) * 0.0006;
      rlAt(u, tmp2);
      tp.setXYZ(k, tmp2.x, tmp2.y + 0.45, tmp2.z);
    }
    tp.needsUpdate = true;
    glow.material.opacity = 0.85 + 0.15 * Math.sin(performance.now() / 180);

    // camera: overview → chase → overview
    const az = 0.55 + Math.sin(p * Math.PI) * 0.9;
    const endPull = smooth(0.9, 1, p);
    const D = (mobile ? 205 : 175) * (W / H < 1.2 && !mobile ? 1.2 : 1) * (1 + endPull * (mobile ? 0.22 : 0.32)), el = 0.98 + endPull * 0.22;
    ov.set(Math.sin(az) * Math.cos(el) * D, Math.sin(el) * D, Math.cos(az) * Math.cos(el) * D);
    ol.set(mobile ? 0 : -18 * endPull, 0, mobile ? 18 * endPull : 0);
    // broadcast "helicopter" chase: averaged heading for a calmer camera
    const i = Math.floor(lapU * M) % M;
    const t = tmp2.set(0, 0, 0);
    for (let s = -18; s <= 18; s += 6) t.add(T[(i + s + M) % M]);
    t.normalize();
    const nn = new Vector3().crossVectors(UP, t).normalize();
    const back = mobile ? 30 : 25, up = mobile ? 19 : 14;
    cv.copy(tmp).addScaledVector(t, -back).addScaledVector(UP, up).addScaledVector(nn, 4 + mouse.x * 6);
    if (mobile) cl.copy(tmp).addScaledVector(t, 3).addScaledVector(UP, -9);
    else cl.copy(tmp).addScaledVector(t, 16).addScaledVector(UP, -1 - mouse.y * 3);
    const chase = smooth(P_ASM - 0.02, P_LAP0 + 0.035, p) * (1 - smooth(P_LAP1 - 0.005, 0.985, p));
    const targetPos = ov.clone().lerp(cv, chase), targetLook = ol.clone().lerp(cl, chase);
    if (first) { camPos.copy(targetPos); camLook.copy(targetLook); first = false; }
    const k = 1 - Math.pow(0.0005, dt);
    camPos.lerp(targetPos, k); camLook.lerp(targetLook, k);
    camera.position.copy(camPos); camera.lookAt(camLook);
    mouse.x += (mouse.tx - mouse.x) * 0.05; mouse.y += (mouse.ty - mouse.y) * 0.05;

    // overlays
    intro.style.opacity = String(1 - smooth(0.035, 0.085, p));
    hud.style.opacity = String(smooth(P_LAP0 - 0.02, P_LAP0 + 0.01, p) * (1 - smooth(0.985, 1, p) * 0));
    hudFill.style.transform = `scaleX(${lapU})`;

    let key = null;
    if (p >= P_LAP0 - 0.008) {
      key = 'start';
      for (const m of MILESTONES) if (lapU >= m.u - 0.012) key = m.key;
      if (lapU >= 0.995) key = 'finish';
    }
    if (key !== activeKey) {
      panels.forEach(el => el.classList.toggle('is-active', el.dataset.u === key));
      const m = MILESTONES.find(x => x.key === (key || 'start'));
      hudYear.textContent = m.hud;
      hudYear.classList.remove('flip'); void hudYear.offsetWidth; hudYear.classList.add('flip');
      activeKey = key;
    }

    // project labels
    const camDir = new Vector3(); camera.getWorldDirection(camDir);
    markers.forEach((mk, idx) => {
      const el = labels[idx];
      tmp2.copy(mk.top).project(camera);
      const behind = tmp2.z > 1 || camDir.dot(tmp.copy(mk.top).sub(camera.position)) < 0;
      const x = (tmp2.x * 0.5 + 0.5) * W, y = (-tmp2.y * 0.5 + 0.5) * H;
      const dist = camera.position.distanceTo(mk.top);
      const fade = behind ? 0 : (mk.visible || 0) * (1 - smooth(mobile ? 150 : 190, mobile ? 230 : 280, dist));
      el.style.opacity = fade.toFixed(3);
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${(y - 14).toFixed(1)}px, 0) translate(-50%, -100%)`;
      el.classList.toggle('is-on', p > P_LAP0 && lapU >= mk.m.u - 0.012);
    });
  }

  let visible = false, raf = 0, last = performance.now();
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    update(dt);
    renderer.render(scene, camera);
    raf = visible ? requestAnimationFrame(frame) : 0;
  }
  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible && !raf) { last = performance.now(); first = true; raf = requestAnimationFrame(frame); }
  }, { rootMargin: '10% 0px' }).observe(root);
  new ResizeObserver(resize).observe(root);
  resize();
  update(0.016); renderer.render(scene, camera);

  return { setProgress(v) { progress = v; } };
}
