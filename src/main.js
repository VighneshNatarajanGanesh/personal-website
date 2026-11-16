import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { drawContours } from './contours.js';
import { initHero } from './hero.js';
import { initLap } from './lap.js';

gsap.registerPlugin(ScrollTrigger);
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const html = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = matchMedia('(max-width: 760px)').matches;
const coarse = matchMedia('(hover: none)').matches;

/* ---------------- smooth scroll ---------------- */
let lenis = null;
if (!reduce) {
  lenis = new Lenis({ lerp: 0.095, wheelMultiplier: 0.95, touchMultiplier: 1.2 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
const scrollToHash = hash => {
  const el = hash === '#top' ? 0 : $(hash);
  if (el === null) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) });
  else (el === 0 ? window.scrollTo(0, 0) : el.scrollIntoView());
};
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
  const h = a.getAttribute('href');
  if (h.length < 2) return;
  e.preventDefault(); closeMenu(); scrollToHash(h);
  history.replaceState(null, '', h);
}));

/* ---------------- nav backdrop ---------------- */
const navEl = $('[data-nav]');
const onNavScroll = () => navEl.classList.toggle('is-scrolled', window.scrollY > innerHeight * 0.5);
window.addEventListener('scroll', onNavScroll, { passive: true }); onNavScroll();

/* ---------------- menu ---------------- */
const menu = $('[data-menu]'), menuBtn = $('[data-menu-btn]');
function openMenu() { menu.hidden = false; requestAnimationFrame(() => html.classList.add('menu-open')); menuBtn.setAttribute('aria-expanded', 'true'); lenis && lenis.stop(); }
function closeMenu() { if (!html.classList.contains('menu-open')) return; html.classList.remove('menu-open'); menuBtn.setAttribute('aria-expanded', 'false'); lenis && lenis.start(); setTimeout(() => { if (!html.classList.contains('menu-open')) menu.hidden = true; }, 700); }
menuBtn.addEventListener('click', () => html.classList.contains('menu-open') ? closeMenu() : openMenu());
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

/* ---------------- contours ---------------- */
const contourCanvas = $('[data-contours]');
const redrawContours = () => drawContours(contourCanvas);
redrawContours();
let rcT; window.addEventListener('resize', () => { clearTimeout(rcT); rcT = setTimeout(redrawContours, 200); });

/* ---------------- hero reveal ---------------- */
const hero = initHero($('[data-reveal]'), { textureWidth: innerWidth < 700 ? 1100 : 1800 });

/* ---------------- loader: lights out ---------------- */
const loaderEl = $('[data-loader]');
const pods = $$('.pod', loaderEl);
const pctEl = $('[data-loader-pct]');
const seen = sessionStorage.getItem('vng-seen') === '1';
const tasks = [document.fonts ? document.fonts.ready : Promise.resolve(), hero ? hero.ready.catch(() => {}) : Promise.resolve()];
let done = 0;
tasks.forEach(t => t.then(() => { done++; }));
const stepMs = reduce ? 0 : seen ? 110 : 260;

function runLoader() {
  return new Promise(resolve => {
    let lit = 0;
    const tick = () => {
      const target = done === tasks.length ? 5 : Math.min(4, 1 + Math.floor((done / tasks.length) * 4));
      if (lit < target) { pods[lit].classList.add('is-lit'); lit++; }
      pctEl.textContent = String(Math.round((lit / 5) * 100)).padStart(2, '0');
      if (lit >= 5) return setTimeout(resolve, reduce ? 0 : seen ? 180 : 520);
      setTimeout(tick, stepMs);
    };
    tick();
  });
}
const safety = new Promise(r => setTimeout(r, 7000));
Promise.race([runLoader(), safety]).then(() => {
  loaderEl.classList.add('is-out');
  setTimeout(() => {
    loaderEl.classList.add('is-done');
    sessionStorage.setItem('vng-seen', '1');
    lenis && lenis.start();
    introHero();
  }, reduce ? 0 : 260);
});

function introHero() {
  hero && hero.show();
  if (reduce) return;
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.from('.hero-name-a', { yPercent: 60, opacity: 0, duration: 1.4 }, 0.05)
    .from('.hero-name-b', { yPercent: 80, opacity: 0, duration: 1.4 }, 0.15)
    .from('.hero-figure', { y: 80, opacity: 0, duration: 1.6 }, 0)
    .from('.hero-meta > *', { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, 0.5)
    .from('.nav > *', { y: -20, opacity: 0, duration: 1, stagger: 0.08 }, 0.35);
}

/* ---------------- hero scroll: full bleed → card ---------------- */
if (!reduce) {
  const card = $('[data-hero-card]');
  const endScale = mobile ? 0.8 : 0.6;
  gsap.timeline({ scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom bottom', scrub: true } })
    .to(card, { scale: endScale, borderRadius: mobile ? 34 : 46, ease: 'none' }, 0)
    .to('.hero-meta', { opacity: 0, y: 30, ease: 'none', duration: 0.35 }, 0)
    .fromTo('.marquee-a .marquee-track', { xPercent: -6 }, { xPercent: -32, ease: 'none' }, 0)
    .fromTo('.marquee-b .marquee-track', { xPercent: -34 }, { xPercent: -8, ease: 'none' }, 0);
}

/* ---------------- statement: word fill ---------------- */
const words = $('[data-words]');
if (words) {
  const wrapWords = node => {
    [...node.childNodes].forEach(ch => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(part => {
          if (!part) return;
          if (/^\s+$/.test(part)) frag.appendChild(document.createTextNode(part));
          else { const s = document.createElement('span'); s.className = 'w'; s.textContent = part; frag.appendChild(s); }
        });
        node.replaceChild(frag, ch);
      } else if (ch.nodeType === 1) wrapWords(ch);
    });
  };
  wrapWords(words);
  const ws = $$('.w', words);
  if (reduce) ws.forEach(w => (w.style.opacity = 1));
  else {
    ScrollTrigger.create({
      trigger: words, start: 'top 85%', end: 'bottom 45%', scrub: true,
      onUpdate: self => { const n = self.progress * ws.length; ws.forEach((w, i) => { w.style.opacity = String(0.14 + 0.86 * Math.min(1, Math.max(0, n - i))); }); }
    });
  }
  gsap.from('.proof-row li', { opacity: 0, y: 16, stagger: 0.05, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.proof', start: 'top 85%' } });
}

/* ---------------- career lap ---------------- */
const lapSection = $('[data-lap]');
const lap = reduce ? null : initLap($('.lap-pin', lapSection), { mobile });
if (!lap) html.classList.add('no-webgl');
else {
  ScrollTrigger.create({ trigger: lapSection, start: 'top top', end: 'bottom bottom', onUpdate: self => lap.setProgress(self.progress) });
}

/* ---------------- big titles ---------------- */
if (!reduce) {
  $$('.big-title').forEach(t => {
    gsap.from(t.children, { yPercent: 50, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: 0.08, scrollTrigger: { trigger: t, start: 'top 88%' } });
  });
  /* collage parallax */
  $$('[data-speed]').forEach(el => {
    const s = parseFloat(el.dataset.speed) * (mobile ? 0.5 : 1);
    gsap.fromTo(el, { yPercent: s * 60 }, { yPercent: -s * 60, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
}

window.addEventListener('load', () => ScrollTrigger.refresh());
