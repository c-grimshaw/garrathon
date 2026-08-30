# The Garr-athon 🏁

Garrett McDonald's bachelor party, mapped as a marathon course — 8 checkpoints
across Ottawa on September 9, from axe throwing on City Centre Ave to full-body
VR on Rideau St.

Static site built with SvelteKit (`adapter-static`) + Leaflet, deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Develop

```sh
npm install
npm run dev
```

## Build & preview

```sh
npm run build
npm run preview   # serves at /garrathon/
```

## Before the big day

Replace the best-man placeholders in `src/lib/stops.js` (`bestMan.name`,
`bestMan.phone`) — the RSVP and emergency-contact buttons use them.
