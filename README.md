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

- `booking.vrbo` (iTrip and Airbnb are wired up already)

Drive times are approximate. The Steamboat area copy (skiable acreage, summer
activities) is general knowledge rather than listing fact, so give it a read before
launch.

**Photos** live in `public/images` and come from the iTrip listing:

```bash
./scripts/fetch-listing-photos.sh
```

The script holds the mapping from iTrip's filenames to ours, and resizes for the
web. Every current photo was shot in summer. The gallery reads paths from the
`gallery` array in `property.ts`.

## Deploy

Netlify builds from `netlify.toml` on every push to `main`. The site is a static
export (`output: "export"`, published from `out`), because Netlify's Next runtime
does not support Next 16.
