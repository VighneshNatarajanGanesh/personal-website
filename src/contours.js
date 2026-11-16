// Topographic / isobar lines: marching squares over seeded fractal noise.
function makeNoise(seed) {
  const p = new Uint8Array(512);
  const perm = Array.from({ length: 256 }, (_, i) => i);
  let s = seed >>> 0;
  const rnd = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  for (let i = 0; i < 512; i++) p[i] = perm[i & 255];
  const grad = (h, x, y) => { const g = h & 7; const u = g < 4 ? x : y, v = g < 4 ? y : x; return ((g & 1) ? -u : u) + ((g & 2) ? -2 * v : 2 * v); };
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a, b, t) => a + (b - a) * t;
  const noise = (x, y) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255;
    x -= Math.floor(x); y -= Math.floor(y);
    const u = fade(x), v = fade(y);
    const a = p[X] + Y, b = p[X + 1] + Y;
    return lerp(lerp(grad(p[a], x, y), grad(p[b], x - 1, y), u), lerp(grad(p[a + 1], x, y - 1), grad(p[b + 1], x - 1, y - 1), u), v) * 0.5;
  };
  return (x, y) => noise(x, y) + 0.5 * noise(x * 2.03 + 11.7, y * 2.03 - 3.1) + 0.25 * noise(x * 4.1 - 7.3, y * 4.1 + 5.9);
}

export function drawContours(canvas, { seed = 90, levels = 16, stroke = 'rgba(169,180,196,0.14)', accent = 'rgba(243,215,10,0.22)', scale = 0.0021 } = {}) {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const w = canvas.clientWidth, h = canvas.clientHeight;
  if (!w || !h) return;
  canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, w, h);
  const noise = makeNoise(seed);
  const cell = w < 700 ? 6 : 8;
  const nx = Math.ceil(w / cell) + 1, ny = Math.ceil(h / cell) + 1;
  const f = new Float32Array(nx * ny);
  let lo = Infinity, hi = -Infinity;
  const k = scale * (w < 700 ? 1.6 : 1);
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const v = noise(i * cell * k + 3.3, j * cell * k + 1.7);
    f[j * nx + i] = v; if (v < lo) lo = v; if (v > hi) hi = v;
  }
  ctx.lineWidth = 1;
  for (let l = 0; l < levels; l++) {
    const t = lo + ((l + 0.5) / levels) * (hi - lo);
    ctx.strokeStyle = l === Math.floor(levels * 0.62) ? accent : stroke;
    ctx.beginPath();
    for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
      const a = f[j * nx + i], b = f[j * nx + i + 1], c = f[(j + 1) * nx + i + 1], d = f[(j + 1) * nx + i];
      const idx = (a > t ? 8 : 0) | (b > t ? 4 : 0) | (c > t ? 2 : 0) | (d > t ? 1 : 0);
      if (idx === 0 || idx === 15) continue;
      const x = i * cell, y = j * cell;
      const top = [x + cell * ((t - a) / (b - a)), y];
      const right = [x + cell, y + cell * ((t - b) / (c - b))];
      const bottom = [x + cell * ((t - d) / (c - d)), y + cell];
      const left = [x, y + cell * ((t - a) / (d - a))];
      const seg = (p, q) => { ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); };
      switch (idx) {
        case 1: case 14: seg(left, bottom); break;
        case 2: case 13: seg(bottom, right); break;
        case 3: case 12: seg(left, right); break;
        case 4: case 11: seg(top, right); break;
        case 5: seg(left, top); seg(bottom, right); break;
        case 6: case 9: seg(top, bottom); break;
        case 7: case 8: seg(left, top); break;
        case 10: seg(left, bottom); seg(top, right); break;
      }
    }
    ctx.stroke();
  }
}
