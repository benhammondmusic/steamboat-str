# steamboat-str

Marketing site for a short term rental at 2525 Cattle Kate Circle, Steamboat Springs, CO.

Built with Next.js (App Router), TypeScript, and Tailwind v4. Deploys to Netlify.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Filling in the real content

Two places, no component edits needed.

**Listing facts** live in `src/data/property.ts`, sourced from the iTrip listing and
the MLS record for unit 4306. Anything still set to `TODO` renders as a loud amber
badge on the page, so unfilled fields are obvious in review rather than silently
shipping as blanks. Still open:

- `booking.airbnb` and `booking.vrbo` (iTrip is wired up already)
- `booking.email` and `booking.phone`
- `rates` (nightly floors and minimum stay)

Drive times are approximate. The Steamboat area copy (skiable acreage, summer
activities) is general knowledge rather than listing fact, so give it a read before
launch.

**Photos** live in `public/images`. The gallery reads filenames from the `gallery`
array in `property.ts`, so replacing a placeholder is just dropping a real photo at
the same path. To regenerate the placeholder art:

```bash
npm run placeholders
```

## Deploy

Netlify picks up `netlify.toml` and the Next.js runtime plugin. Connect the repo in
the Netlify dashboard, no build settings to configure by hand.
