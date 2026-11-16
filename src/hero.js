// Lando-style liquid reveal: desk portrait, with metaball "windows" into race day.
import { WebGLRenderer, Scene, OrthographicCamera, PlaneGeometry, Mesh, ShaderMaterial, TextureLoader, Vector2, Vector3, LinearFilter, NoColorSpace } from 'three';

const MAX = 16;

const vert = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`;

const frag = /* glsl */`
precision highp float;
varying vec2 vUv;
uniform sampler2D tDesk;
uniform sampler2D tTrack;
uniform vec2 uBox;
uniform float uImgAspect;
uniform float uScale;
uniform float uTime;
uniform float uIntro;
uniform vec3 uPts[${MAX}];

vec2 imgUv(vec2 uv) {
  float A = uBox.x / uBox.y;
  return vec2((uv.x - 0.5) * A / (uScale * uImgAspect) + 0.5, uv.y / uScale);
}

void main() {
  vec2 p = imgUv(vUv);
  float ins = step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0);
  vec4 d = texture2D(tDesk, p) * ins;
  vec4 t = texture2D(tTrack, p) * ins;

  vec2 q = vec2(vUv.x * uBox.x / uBox.y, vUv.y);
  float f = 0.0;
  for (int i = 0; i < ${MAX}; i++) {
    vec3 b = uPts[i];
    vec2 dd = q - b.xy;
    f += (b.z * b.z) / (dot(dd, dd) + 1e-5);
  }
  float m = smoothstep(0.94, 1.06, f);
  float rim = smoothstep(0.80, 0.94, f) * (1.0 - smoothstep(0.94, 1.10, f));

  vec3 livery = vec3(0.953, 0.843, 0.039);
  vec4 dP = vec4(d.rgb * d.a, d.a);
  vec4 tP = vec4(t.rgb * t.a, t.a);
  vec4 col = mix(dP, tP, m);

  // inside a window but no rider: faint hatch in livery
  float empty = m * (1.0 - t.a);
  float hatch = step(0.62, fract((q.x * 0.55 + q.y) * 110.0));
  col += vec4(livery, 1.0) * empty * hatch * 0.10;
  col += vec4(livery * 0.0, 0.0);

  // rim line
  col = col * (1.0 - rim * 0.9) + vec4(livery, 1.0) * rim * 0.9;

  col *= uIntro;
  gl_FragColor = col;
}
`;

export function initHero(container, { textureWidth = 1800, onReady } = {}) {
  const canvas = document.createElement('canvas');
  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: 'high-performance' });
  } catch (e) { return null; }
  container.appendChild(canvas);
  renderer.setClearColor(0x000000, 0);

  const loader = new TextureLoader();
  const load = url => new Promise((res, rej) => loader.load(url, tx => {
    tx.colorSpace = NoColorSpace; tx.minFilter = LinearFilter; tx.magFilter = LinearFilter; tx.generateMipmaps = false;
    res(tx);
  }, undefined, rej));

  const pts = Array.from({ length: MAX }, () => new Vector3(0, 0, 0));
  const uniforms = {
    tDesk: { value: null }, tTrack: { value: null },
    uBox: { value: new Vector2(1, 1) }, uImgAspect: { value: 1.2 }, uScale: { value: 0.94 },
    uTime: { value: 0 }, uIntro: { value: 0 }, uPts: { value: pts }
  };
  const mat = new ShaderMaterial({ vertexShader: vert, fragmentShader: frag, uniforms, transparent: true, depthTest: false, depthWrite: false, premultipliedAlpha: true });
  const scene = new Scene();
  scene.add(new Mesh(new PlaneGeometry(2, 2), mat));
  const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);

  let W = 1, H = 1, A = 1;
  function resize() {
    W = container.clientWidth; H = container.clientHeight; A = W / H;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.setSize(W, H, false);
    uniforms.uBox.value.set(W, H);
    uniforms.uScale.value = W < 700 ? 0.86 : 0.94;
  }

  // ---- blobs ----
  // Positions in "box space": x in [0, A], y in [0, 1] (y up). Radius in box-height units.
  const fig = () => ({ cx: A / 2, head: 1 - (1 - uniforms.uScale.value * (1 - 733 / 2000)) });
  const wander = [
    { ph: 0.0, sp: 0.23, rx: 0.10, ry: 0.07, oy: 0.00, r: 0.052 },
    { ph: 2.1, sp: 0.17, rx: 0.13, ry: 0.10, oy: -0.22, r: 0.060 },
    { ph: 4.2, sp: 0.29, rx: 0.08, ry: 0.06, oy: -0.42, r: 0.045 }
  ];
  const trail = [];
  const cursor = { x: 0, y: 0, tx: 0, ty: 0, r: 0, tr: 0, active: false };
  let lastAdd = 0;

  function toBox(e) {
    const rect = canvas.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * A, y: 1 - (e.clientY - rect.top) / rect.height };
  }
  function onMove(e) {
    const b = toBox(e);
    cursor.tx = b.x; cursor.ty = b.y;
    if (!cursor.active) { cursor.x = b.x; cursor.y = b.y; }
    cursor.active = true; cursor.tr = W < 700 ? 0.09 : 0.075;
    const now = performance.now();
    if (now - lastAdd > 34) {
      trail.push({ x: b.x, y: b.y, r: W < 700 ? 0.07 : 0.058 });
      if (trail.length > MAX - 4) trail.shift();
      lastAdd = now;
    }
  }
  function onLeave() { cursor.active = false; cursor.tr = 0; }
  const target = container.closest('[data-hero-card]') || container;
  target.addEventListener('pointermove', onMove, { passive: true });
  target.addEventListener('pointerdown', onMove, { passive: true });
  target.addEventListener('pointerleave', onLeave);
  target.addEventListener('pointercancel', onLeave);

  let wanderAmp = 1;
  function updateBlobs(t, dt) {
    const { cx, head } = fig();
    let k = 0;
    // idle wanderers sit around head and torso
    for (const w of wander) {
      const r = w.r * wanderAmp * (0.85 + 0.15 * Math.sin(t * 1.3 + w.ph));
      pts[k++].set(cx + Math.sin(t * w.sp * 2 + w.ph) * w.rx, head + w.oy + Math.cos(t * w.sp * 1.6 + w.ph) * w.ry, r);
    }
    // cursor head
    const ease = 1 - Math.pow(0.0008, dt);
    cursor.x += (cursor.tx - cursor.x) * ease; cursor.y += (cursor.ty - cursor.y) * ease;
    cursor.r += (cursor.tr - cursor.r) * (1 - Math.pow(0.002, dt));
    pts[k++].set(cursor.x, cursor.y, cursor.r);
    // decaying trail
    for (let i = trail.length - 1; i >= 0; i--) { trail[i].r *= Math.pow(0.12, dt); if (trail[i].r < 0.004) trail.splice(i, 1); }
    for (const p of trail) { if (k >= MAX) break; pts[k++].set(p.x, p.y, p.r); }
    while (k < MAX) pts[k++].set(-10, -10, 0);
    // calmer idle blobs while the visitor is driving the cursor
    wanderAmp += ((cursor.active ? 0.55 : 1) - wanderAmp) * (1 - Math.pow(0.1, dt));
  }

  // ---- loop ----
  let visible = true, raf = 0, last = performance.now(), t0 = last, intro = 0, introTarget = 0;
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const t = (now - t0) / 1000;
    intro += (introTarget - intro) * (1 - Math.pow(0.02, dt));
    uniforms.uIntro.value = intro;
    uniforms.uTime.value = t;
    updateBlobs(t, dt);
    renderer.render(scene, camera);
    raf = visible ? requestAnimationFrame(frame) : 0;
  }
  const io = new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible && !raf) { last = performance.now(); raf = requestAnimationFrame(frame); }
  });
  io.observe(container);
  new ResizeObserver(resize).observe(container);
  resize();

  const ready = Promise.all([
    load(`assets/img/hero-desk-${textureWidth}.webp`),
    load(`assets/img/hero-track-${textureWidth}.webp`)
  ]).then(([d, tr]) => {
    uniforms.tDesk.value = d; uniforms.tTrack.value = tr;
    uniforms.uImgAspect.value = d.image.width / d.image.height;
    renderer.compile(scene, camera);
    if (!raf) raf = requestAnimationFrame(frame);
    onReady && onReady();
  });

  return {
    ready,
    show() { introTarget = 1; document.documentElement.classList.add('gl-ready'); },
    setIdle(on) { wanderAmp = on ? 1 : 0; }
  };
}
