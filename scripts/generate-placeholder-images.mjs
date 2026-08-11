// One-time script: generates branded WebP placeholder images to replace the
// external picsum.photos placeholder URLs. Run manually (`node
// scripts/generate-placeholder-images.mjs`) — output is committed as static
// assets, not regenerated on every build.
import sharp from 'sharp'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const NAVY = '#16233f'
const NAVY_DARK = '#0e1826'
const SILVER = '#7e8998'

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function cardSvg(width, height, label, seed) {
  // Deterministic pseudo-random angle/offset per seed so the 22 images aren't identical.
  let hash = 0
  for (const ch of seed) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0
  const angle = 20 + (hash % 40)
  const lineSpacing = 36 + (hash % 20)
  const gradId = `g${hash}`

  const lines = []
  for (let x = -height; x < width + height; x += lineSpacing) {
    lines.push(`<line x1="${x}" y1="0" x2="${x + height}" y2="${height}" stroke="white" stroke-opacity="0.05" stroke-width="2" />`)
  }

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle} 0.5 0.5)">
      <stop offset="0%" stop-color="${NAVY_DARK}" />
      <stop offset="55%" stop-color="${NAVY}" />
      <stop offset="100%" stop-color="${SILVER}" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#${gradId})" />
  <g>${lines.join('')}</g>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
    font-family="Arial, sans-serif" font-weight="700" font-size="${Math.round(height * 0.075)}"
    letter-spacing="2" fill="#ffffff" fill-opacity="0.92">${escapeXml(label.toUpperCase())}</text>
</svg>`
}

async function renderWebp(outPath, width, height, label, seed) {
  const svg = cardSvg(width, height, label, seed)
  await sharp(Buffer.from(svg)).webp({ quality: 82 }).toFile(outPath)
}

const servicesDir = resolve(import.meta.dirname, '../public/images/services')
const galleryDir = resolve(import.meta.dirname, '../public/images/gallery')
mkdirSync(servicesDir, { recursive: true })
mkdirSync(galleryDir, { recursive: true })

const services = [
  { slug: 'driveways', name: 'Driveways' },
  { slug: 'patios', name: 'Patios' },
  { slug: 'pool-decks', name: 'Pool Decks' },
  { slug: 'retaining-walls', name: 'Retaining & Block Walls' },
  { slug: 'foundations-slabs', name: 'Foundations & Slabs' },
  { slug: 'commercial-concrete', name: 'Commercial Concrete' },
]

const galleryItems = [
  { id: 1, category: 'Driveways' },
  { id: 2, category: 'Driveways' },
  { id: 3, category: 'Driveways' },
  { id: 4, category: 'Patios' },
  { id: 5, category: 'Patios' },
  { id: 6, category: 'Patios' },
  { id: 7, category: 'Pool Decks' },
  { id: 8, category: 'Pool Decks' },
  { id: 9, category: 'Pool Decks' },
  { id: 10, category: 'Retaining Walls' },
  { id: 11, category: 'Retaining Walls' },
  { id: 12, category: 'Foundations' },
  { id: 13, category: 'Foundations' },
  { id: 14, category: 'Commercial' },
  { id: 15, category: 'Commercial' },
  { id: 16, category: 'Commercial' },
]

for (const s of services) {
  await renderWebp(resolve(servicesDir, `${s.slug}.webp`), 1600, 900, s.name, s.slug)
  console.log(`services/${s.slug}.webp`)
}

for (const g of galleryItems) {
  await renderWebp(resolve(galleryDir, `${g.id}.webp`), 800, 600, g.category, `gal-${g.id}`)
  console.log(`gallery/${g.id}.webp`)
}

console.log(`Generated ${services.length + galleryItems.length} WebP placeholder images.`)
