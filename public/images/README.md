# Images

This project currently uses `picsum.photos` seeded placeholder images (configured in `next.config.js`
`images.remotePatterns`) throughout the site, since no real project photography was provided.

Before launch, replace the placeholder URLs in the following files with real photos placed in this
directory (`/public/images/...`), then update the corresponding `src` values:

- `src/data/services.ts` — `heroImage` per service (`/public/images/services/*.jpg`)
- `src/data/locations.ts` / `src/components/locations/LocationDetail.tsx` — location hero images
- `src/components/sections/GalleryGrid.tsx` — `galleryImages` array (`/public/images/gallery/*.jpg`)
- `src/app/page.tsx` — home hero image
- `public/og-image.jpg` and `public/favicon.ico` — social share image and browser favicon
