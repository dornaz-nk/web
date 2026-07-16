# Dornaz Niknezhad — Portfolio

Product & UX Designer portfolio. Static site (no build step) published with GitHub Pages.

## Pages
- `Home.dc.html` — landing (also served at the site root via `index.html`)
- `About.dc.html`
- Case studies: `Cue`, `KoolLogik`, `Nura`, `Octolux`, `SignifyHealth` (`.dc.html`)

## How it's built
Pages are exported from a design tool as `.dc.html` (custom `<x-dc>` markup rendered
by `support.js`, a small React runtime). Supporting files:

- `_ds/dornaz-design-system-…/` — design tokens (colors, fonts, typography, spacing,
  shadows, radius) + `_ds_bundle.js` (the NavBar / Button / Tag / Footer / MetricCounter components)
- `vendor/` — React + ReactDOM (loaded before `support.js`)
- `assets/` — logo
- `uploads/` — project screenshots
- `.nojekyll` — tells GitHub Pages to serve the `_ds/` and `vendor/` folders as-is

## Replacing placeholder images
See `IMAGES-TO-REPLACE.md`. Drop real screenshots into `uploads/` using the same filenames.
