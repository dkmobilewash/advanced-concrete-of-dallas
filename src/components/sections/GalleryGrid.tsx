'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { GalleryCategory, GalleryImage } from '@/types'

const categories: (GalleryCategory | 'All')[] = [
  'All',
  'Driveways',
  'Patios',
  'Pool Decks',
  'Block Walls',
  'Foundations',
  'Commercial',
]

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/pcs-gal-1/800/600', alt: 'Broom-finished concrete driveway in Plano', category: 'Driveways' },
  { id: 2, src: 'https://picsum.photos/seed/pcs-gal-2/800/600', alt: 'Exposed aggregate driveway with curved edge', category: 'Driveways' },
  { id: 3, src: 'https://picsum.photos/seed/pcs-gal-3/800/600', alt: 'Stamped concrete driveway in a Plano neighborhood', category: 'Driveways' },
  { id: 4, src: 'https://picsum.photos/seed/pcs-gal-4/800/600', alt: 'Stamped concrete patio with stone pattern', category: 'Patios' },
  { id: 5, src: 'https://picsum.photos/seed/pcs-gal-5/800/600', alt: 'Backyard patio with built-in seating wall', category: 'Patios' },
  { id: 6, src: 'https://picsum.photos/seed/pcs-gal-6/800/600', alt: 'Concrete patio finished for outdoor entertaining', category: 'Patios' },
  { id: 7, src: 'https://picsum.photos/seed/pcs-gal-7/800/600', alt: 'Cool deck pool surface finished in tan', category: 'Pool Decks' },
  { id: 8, src: 'https://picsum.photos/seed/pcs-gal-8/800/600', alt: 'Textured concrete pool deck surrounding backyard pool', category: 'Pool Decks' },
  { id: 9, src: 'https://picsum.photos/seed/pcs-gal-9/800/600', alt: 'Resurfaced pool deck with slip-resistant finish', category: 'Pool Decks' },
  { id: 10, src: 'https://picsum.photos/seed/pcs-gal-10/800/600', alt: 'CMU block retaining wall on a sloped lot', category: 'Block Walls' },
  { id: 11, src: 'https://picsum.photos/seed/pcs-gal-11/800/600', alt: 'Decorative capped block privacy wall', category: 'Block Walls' },
  { id: 12, src: 'https://picsum.photos/seed/pcs-gal-12/800/600', alt: 'Poured foundation slab for a new home addition', category: 'Foundations' },
  { id: 13, src: 'https://picsum.photos/seed/pcs-gal-13/800/600', alt: 'Post-tension slab with cable reinforcement visible', category: 'Foundations' },
  { id: 14, src: 'https://picsum.photos/seed/pcs-gal-14/800/600', alt: 'Commercial parking lot concrete pour', category: 'Commercial' },
  { id: 15, src: 'https://picsum.photos/seed/pcs-gal-15/800/600', alt: 'ADA-compliant commercial sidewalk and ramp', category: 'Commercial' },
  { id: 16, src: 'https://picsum.photos/seed/pcs-gal-16/800/600', alt: 'Warehouse interior concrete floor finish', category: 'Commercial' },
]

export default function GalleryGrid() {
  const [active, setActive] = useState<(GalleryCategory | 'All')>('All')

  const filtered =
    active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active)

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide transition-colors min-h-[44px]',
              active === cat
                ? 'border-accent bg-accent text-white'
                : 'border-border bg-white text-mid hover:border-accent hover:text-accent'
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((img) => (
          <div key={img.id} className="group relative h-72 overflow-hidden rounded-lg shadow-md">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-dark/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-white">
                {img.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
