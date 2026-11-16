# vighneshnatarajanganesh.github.io/personal-website

Personal site of **Vighnesh Natarajan Ganesh**: quantitative researcher in European power at Millennium, and national-level motorcycle racer (#90).

Live: https://vighneshnatarajanganesh.github.io/personal-website/

## How it works

Static site. The JavaScript bundle (`assets/js/app.js`) is committed, so GitHub Pages serves everything as is with no build on the server.

```
index.html              all content (edit text here)
assets/css/site.css     styles; palette and fonts at the top
assets/js/app.js        built bundle (do not edit by hand)
src/main.js             loader, smooth scroll, scroll animations
src/hero.js             WebGL "race day" reveal in the hero
src/lap.js              3D career-lap circuit
src/contours.js         topographic background lines
assets/img/             photos (WebP); hero-desk / hero-track are the aligned cut-outs
assets/fonts/           Archivo + Bodoni Moda (OFL), self-hosted
```

## Editing

- **Text, results, roles:** edit `index.html` and push. No build needed.
- **Career-lap turns:** the panels live in `index.html` (`.panel`); turn labels and years are in `MILESTONES` in `src/lap.js` (rebuild after changing).
- **Rebuild the JS** after editing anything in `src/`:
  ```
  npm install
  npm run build
  ```
- **Preview locally:** `npm run serve`, then open http://localhost:8080 (WebGL needs a server; double-clicking the file may block textures).
- **New hero photos:** replace `assets/img/hero-desk-*.webp` and `hero-track-*.webp` with two aligned, background-removed images of the same size (2400 x 2000 source works well).

Libraries: three.js (MIT), GSAP with ScrollTrigger (GreenSock standard no-charge license), Lenis (MIT).
