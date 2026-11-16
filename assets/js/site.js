/* Vighnesh Natarajan Ganesh — site behaviour. No dependencies. */
(() => {
  'use strict';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* =======================================================
     NAV: theme follows the section under it, active link,
     mobile menu
     ======================================================= */
  const nav = $('[data-nav]');
  const toggle = $('[data-nav-toggle]');
  const links = $$('.nav-links a');
  const sections = $$('main > section');
  const reveal = $('[data-reveal]');
  let revealP = reduce ? 1 : 0;

  const closeMenu = () => { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); toggle.focus(); }
  });

  function updateNav() {
    nav.classList.toggle('is-scrolled', window.scrollY > 8);
    const probe = nav.offsetHeight / 2;
    let current = sections[0];
    for (const s of sections) {
      const r = s.getBoundingClientRect();
      if (r.top <= probe && r.bottom > probe) { current = s; break; }
    }
    const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atEnd) current = sections[sections.length - 1];
    let theme = current.dataset.theme || 'night';
    if (current.id === 'track' && reveal) {
      const rr = reveal.getBoundingClientRect();
      if (rr.top <= probe && rr.bottom > probe) theme = revealP > 0.4 ? 'night' : 'paper';
    }
    nav.dataset.theme = theme;
    links.forEach(a => {
      if (a.getAttribute('href') === '#' + current.id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  /* =======================================================
     TRACK REVEAL: inset photo opens to full-bleed on scroll
     ======================================================= */
  function updateReveal() {
    if (!reveal || reduce) return;
    const r = reveal.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = reveal.offsetHeight - vh;
    const lead = vh * 0.45;
    let p = (lead - r.top) / (lead + total * 0.62);
    p = clamp(p, 0, 1);
    p = p * p * (3 - 2 * p); // smoothstep
    if (Math.abs(p - revealP) > 0.0005) {
      revealP = p;
      reveal.style.setProperty('--p', p.toFixed(4));
    }
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { updateReveal(); updateNav(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  updateReveal(); updateNav();

  /* =======================================================
     GALLERY buttons
     ======================================================= */
  const gallery = $('[data-gallery]');
  $$('[data-gal]').forEach(btn => btn.addEventListener('click', () => {
    const dir = Number(btn.dataset.gal);
    gallery.scrollBy({ left: dir * gallery.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth' });
  }));

  /* =======================================================
     HERO FAN CHART
     Illustrative hourly demand: 2 days of actuals, then a
     median forecast with 50% / 80% bands that widen with
     horizon. Hover / drag to read values.
     ======================================================= */
  const fan = $('[data-fan]');
  if (fan) initFan(fan);

  function initFan(root) {
    const canvas = $('[data-canvas]', root);
    const box = canvas.parentElement;
    const ctx = canvas.getContext('2d');
    const zonesEl = $('[data-zones]', root);
    const bar = $('.fan-bar', root);
    const R = {
      zone: $('[data-r-zone]', root), time: $('[data-r-time]', root), med: $('[data-r-med]', root),
      kind: $('[data-r-kind]', root), band: $('[data-r-band]', root), bandWrap: $('[data-r-bandwrap]', root)
    };

    const C = {
      frost: '#E8EDF4', mist: 'rgba(169,180,196,', livery: '#F3D70A', sky: '61,181,230', night: '#0D1B2E'
    };

    const ZONES = [
      { code: 'DE', name: 'Germany', base: 54, swing: .32, solar: .10 },
      { code: 'FR', name: 'France', base: 50, swing: .34, solar: .03 },
      { code: 'GB', name: 'Great Britain', base: 28, swing: .44, solar: .07 },
      { code: 'IT', name: 'Italy', base: 32, swing: .40, solar: .08 },
      { code: 'ES', name: 'Spain', base: 27, swing: .34, solar: .07 },
      { code: 'PL', name: 'Poland', base: 19, swing: .30, solar: .05 },
      { code: 'NL', name: 'Netherlands', base: 13, swing: .30, solar: .12 },
      { code: 'NO', name: 'Norway', base: 16, swing: .18, solar: 0 }
    ];

    const N = 168;
    const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() - 2);
    const nowIdx = 48 + new Date().getHours();
    const times = Array.from({ length: N }, (_, i) => new Date(start.getTime() + i * 3600e3));

    function rng32(a) {
      return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    }
    function gauss(r) { let u = 0, v = 0; while (!u) u = r(); while (!v) v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }
    function gc(x, m, s) { let d = Math.abs(x - m); d = Math.min(d, 24 - d); return Math.exp(-(d * d) / (2 * s * s)); }
    function shape(h, z) {
      return -1.0 * gc(h, 3.5, 3.2) + 0.55 * gc(h, 10, 2.6) + 0.78 * gc(h, 18.6, 2.1) - z.solar * 4 * gc(h, 13.4, 1.8);
    }

    function build(z, seed) {
      const r = rng32(seed * 7919 + 17);
      const base = new Float64Array(N), act = new Float64Array(N), med = new Float64Array(N), sig = new Float64Array(N);
      let n = 0;
      for (let i = 0; i < N; i++) {
        const d = times[i], hr = d.getHours();
        const fd = w => (w === 0 ? 0.85 : w === 6 ? 0.91 : 1);
        const k = Math.min(1, (hr + 0.5) / 7), sm = k * k * (3 - 2 * k);
        const f = fd((d.getDay() + 6) % 7) + (fd(d.getDay()) - fd((d.getDay() + 6) % 7)) * sm;
        base[i] = z.base * (1 + z.swing * 0.5 * shape(hr + 0.5, z)) * f;
        n = 0.9 * n + 0.33 * gauss(r);
        act[i] = base[i] * (1 + 0.013 * n);
      }
      const anom = act[nowIdx - 1] - base[nowIdx - 1];
      for (let i = 0; i < N; i++) {
        const h = i - nowIdx + 1;
        med[i] = i < nowIdx ? act[i] : base[i] + anom * Math.exp(-h / 8);
        sig[i] = i < nowIdx - 1 ? 0 : z.base * (0.007 + 0.00052 * Math.max(0, h));
      }
      return { act, med, sig };
    }

    const DATA = ZONES.map((z, k) => build(z, k + 1));
    let zi = 0;
    let shown = cloneSet(DATA[0]);
    let from = null, to = null, morphT = 1;
    let intro = reduce ? 1 : 0;
    let hover = -1;
    let pin = peakIndex(DATA[0]);
    let W = 0, H = 0, dpr = 1, padL = 20, i0 = 0, i1 = N - 1;

    function cloneSet(s) { return { act: Float64Array.from(s.act), med: Float64Array.from(s.med), sig: Float64Array.from(s.sig) }; }
    function peakIndex(s) {
      let best = nowIdx, v = -Infinity;
      for (let i = nowIdx + 12; i < Math.min(N, nowIdx + 40); i++) if (s.med[i] > v) { v = s.med[i]; best = i; }
      return best;
    }

    /* zone chips (radio group) */
    ZONES.forEach((z, k) => {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'zone'; b.textContent = z.code;
      b.setAttribute('role', 'radio');
      b.setAttribute('aria-label', z.name);
      b.setAttribute('aria-checked', k === 0 ? 'true' : 'false');
      b.tabIndex = k === 0 ? 0 : -1;
      b.addEventListener('click', () => select(k, false));
      b.addEventListener('keydown', e => {
        const dir = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
        if (dir) { e.preventDefault(); select((zi + dir + ZONES.length) % ZONES.length, true); }
      });
      zonesEl.appendChild(b);
    });
    const chips = $$('.zone', zonesEl);

    function select(k, focus) {
      if (k === zi) return;
      chips.forEach((c, j) => { c.setAttribute('aria-checked', j === k ? 'true' : 'false'); c.tabIndex = j === k ? 0 : -1; });
      if (focus) chips[k].focus();
      from = cloneSet(shown); to = DATA[k]; zi = k; morphT = reduce ? 1 : 0;
      pin = peakIndex(DATA[k]);
      if (reduce) { shown = cloneSet(to); render(); } else animate();
    }

    /* sizing */
    function resize() {
      const r = box.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, r.width); H = Math.max(1, r.height);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      padL = bar.getBoundingClientRect().left - r.left;
      if (W < 720) { i0 = Math.max(0, nowIdx - 30); i1 = Math.min(N - 1, nowIdx + 70); }
      else { i0 = 0; i1 = N - 1; }
      render();
    }
    new ResizeObserver(resize).observe(box);

    /* animation loop (only while something is moving) */
    let raf = 0, last = 0;
    function animate() {
      if (raf) return;
      last = performance.now();
      const step = now => {
        const dt = now - last; last = now;
        let moving = false;
        if (intro < 1) { intro = Math.min(1, intro + dt / 1700); moving = true; }
        if (morphT < 1) {
          morphT = Math.min(1, morphT + dt / 650);
          const e = 1 - Math.pow(1 - morphT, 3);
          for (const key of ['act', 'med', 'sig']) for (let i = 0; i < N; i++) shown[key][i] = from[key][i] + (to[key][i] - from[key][i]) * e;
          moving = true;
        }
        render();
        raf = moving ? requestAnimationFrame(step) : 0;
      };
      raf = requestAnimationFrame(step);
    }

    /* drawing */
    const xOf = i => ((i - i0) / (i1 - i0)) * W;
    let yMin = 0, yMax = 1;
    const top = 14, bottomPad = 30;
    const yOf = v => top + (1 - (v - yMin) / (yMax - yMin)) * (H - top - bottomPad);

    function bounds() {
      let lo = Infinity, hi = -Infinity;
      for (let i = i0; i <= i1; i++) {
        const s = shown.sig[i] * 1.2816;
        lo = Math.min(lo, shown.act[i] * (i < nowIdx ? 1 : Infinity), shown.med[i] - s);
        hi = Math.max(hi, i < nowIdx ? shown.act[i] : -Infinity, shown.med[i] + s);
      }
      const pad = (hi - lo) * 0.08;
      yMin = lo - pad; yMax = hi + pad;
    }

    function niceTicks() {
      const span = yMax - yMin, raw = span / 3;
      const mag = Math.pow(10, Math.floor(Math.log10(raw)));
      const step = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= raw) || raw;
      const out = [];
      for (let v = Math.ceil(yMin / step) * step; v < yMax; v += step) out.push(v);
      return out;
    }

    const ease = t => 1 - Math.pow(1 - t, 3);
    const fmt = v => v.toFixed(v < 20 ? 2 : 1);
    const dayFmt = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: 'numeric' });
    const wdFmt = new Intl.DateTimeFormat('en-GB', { weekday: 'short' });

    function render() {
      if (!W) return;
      bounds();
      ctx.clearRect(0, 0, W, H);
      const clipX = ease(intro) * W;
      const fontFam = getComputedStyle(document.body).fontFamily;

      // day separators + labels
      ctx.lineWidth = 1;
      ctx.font = `600 12px ${fontFam}`;
      ctx.textBaseline = 'alphabetic';
      for (let d = 0; d <= 7; d++) {
        const i = d * 24;
        if (i + 24 < i0 || i > i1) continue;
        const x = Math.round(xOf(Math.min(i, N - 1))) + 0.5;
        ctx.strokeStyle = C.mist + '0.12)';
        ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, H - bottomPad + 6); ctx.stroke();
        if (d < 7) {
          const label = dayFmt.format(times[i]);
          const mx = xOf(i + 12);
          ctx.fillStyle = C.mist + (d === 2 ? '1)' : '0.75)');
          ctx.textAlign = 'center';
          if (mx > 28 && mx < W - 28 && (mx > padL + 24 || padL < 30)) ctx.fillText(label, mx, H - 9);
        }
      }

      // horizontal gridlines
      ctx.textAlign = 'left';
      for (const v of niceTicks()) {
        const y = Math.round(yOf(v)) + 0.5;
        ctx.strokeStyle = C.mist + '0.10)';
        ctx.setLineDash([2, 4]);
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
        ctx.setLineDash([]);
        ctx.lineWidth = 4; ctx.strokeStyle = C.night; ctx.lineJoin = 'round';
        ctx.strokeText(`${Math.round(v)} GW`, padL, y - 6);
        ctx.lineWidth = 1;
        ctx.fillStyle = C.mist + '0.75)';
        ctx.fillText(`${Math.round(v)} GW`, padL, y - 6);
      }

      ctx.save();
      ctx.beginPath(); ctx.rect(0, 0, clipX, H); ctx.clip();

      const nx = xOf(nowIdx - 1);
      // forecast zone wash
      const wash = ctx.createLinearGradient(nx, 0, W, 0);
      wash.addColorStop(0, `rgba(${C.sky},0.07)`); wash.addColorStop(1, `rgba(${C.sky},0)`);
      ctx.fillStyle = wash; ctx.fillRect(nx, top, W - nx, H - top - bottomPad);

      // bands
      const band = (z, alpha) => {
        ctx.beginPath();
        for (let i = nowIdx - 1; i < N; i++) ctx.lineTo(xOf(i), yOf(shown.med[i] + z * shown.sig[i]));
        for (let i = N - 1; i >= nowIdx - 1; i--) ctx.lineTo(xOf(i), yOf(shown.med[i] - z * shown.sig[i]));
        ctx.closePath();
        ctx.fillStyle = `rgba(${C.sky},${alpha})`; ctx.fill();
      };
      band(1.2816, 0.17);
      band(0.6745, 0.30);

      // actuals
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';
      ctx.beginPath();
      for (let i = 0; i < nowIdx; i++) ctx.lineTo(xOf(i), yOf(shown.act[i]));
      ctx.strokeStyle = C.frost; ctx.lineWidth = 1.6; ctx.globalAlpha = 0.9; ctx.stroke(); ctx.globalAlpha = 1;

      // median
      ctx.beginPath();
      for (let i = nowIdx - 1; i < N; i++) ctx.lineTo(xOf(i), yOf(shown.med[i]));
      ctx.strokeStyle = C.livery; ctx.lineWidth = 2.4; ctx.stroke();

      // now marker
      ctx.strokeStyle = C.frost; ctx.globalAlpha = 0.55; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(Math.round(nx) + 0.5, top); ctx.lineTo(Math.round(nx) + 0.5, H - bottomPad); ctx.stroke();
      ctx.setLineDash([]); ctx.globalAlpha = 1;
      ctx.fillStyle = C.frost; ctx.font = `600 11px ${fontFam}`; ctx.textAlign = 'left';
      ctx.fillText('Now', nx + 6, top + 10);
      ctx.restore();

      // crosshair / pin
      const idx = hover >= 0 ? hover : pin;
      if (intro >= 1) {
        const x = xOf(idx);
        const past = idx < nowIdx;
        const v = past ? shown.act[idx] : shown.med[idx];
        ctx.strokeStyle = C.mist + (hover >= 0 ? '0.6)' : '0.35)'); ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(Math.round(x) + 0.5, top); ctx.lineTo(Math.round(x) + 0.5, H - bottomPad); ctx.stroke();
        if (!past) {
          const s = shown.sig[idx] * 1.2816;
          ctx.strokeStyle = `rgba(${C.sky},0.9)`; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.moveTo(x, yOf(shown.med[idx] + s)); ctx.lineTo(x, yOf(shown.med[idx] - s)); ctx.stroke();
        }
        ctx.beginPath(); ctx.arc(x, yOf(v), 5, 0, Math.PI * 2);
        ctx.fillStyle = past ? C.frost : C.livery; ctx.fill();
        ctx.lineWidth = 2; ctx.strokeStyle = C.night; ctx.stroke();
        readout(idx);
      }
    }

    function readout(i) {
      const t = times[i];
      R.zone.textContent = ZONES[zi].name;
      R.time.textContent = `${wdFmt.format(t)} ${String(t.getHours()).padStart(2, '0')}:00`;
      if (i < nowIdx) {
        R.med.textContent = fmt(shown.act[i]);
        R.kind.textContent = 'GW actual';
        R.bandWrap.hidden = true;
      } else {
        const s = shown.sig[i] * 1.2816;
        R.med.textContent = fmt(shown.med[i]);
        R.kind.textContent = 'GW median';
        R.band.textContent = `${fmt(shown.med[i] - s)}–${fmt(shown.med[i] + s)} GW`;
        R.bandWrap.hidden = false;
      }
    }

    /* pointer */
    function idxFromEvent(e) {
      const r = canvas.getBoundingClientRect();
      return clamp(Math.round(i0 + ((e.clientX - r.left) / r.width) * (i1 - i0)), i0, i1);
    }
    canvas.addEventListener('pointermove', e => { hover = idxFromEvent(e); render(); });
    canvas.addEventListener('pointerdown', e => { hover = idxFromEvent(e); render(); });
    canvas.addEventListener('pointerleave', () => { hover = -1; render(); });
    canvas.addEventListener('pointercancel', () => { hover = -1; render(); });

    const go = () => { resize(); if (!reduce) animate(); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(go); else go();
  }
})();
