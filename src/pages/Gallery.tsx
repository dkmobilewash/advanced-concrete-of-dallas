import { useState } from 'react'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import { useFadeUp } from '@/hooks/useFadeUp'
import { getBreadcrumbSchema } from '@/lib/schema'
import type { GalleryImage } from '@/types'

const categories = ['All', 'Driveways', 'Patios', 'Pool Decks', 'Retaining Walls', 'Foundations', 'Commercial'] as const

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/1.webp', alt: 'Broom-finished concrete driveway in Dallas', category: 'Driveways' },
  { id: 2, src: '/images/gallery/2.webp', alt: 'Exposed aggregate driveway with curved edge', category: 'Driveways' },
  { id: 3, src: '/images/gallery/3.webp', alt: 'Stamped concrete driveway in a Dallas neighborhood', category: 'Driveways' },
  { id: 4, src: '/images/gallery/4.webp', alt: 'Stamped concrete patio with stone pattern', category: 'Patios' },
  { id: 5, src: '/images/gallery/5.webp', alt: 'Backyard patio with built-in seating wall', category: 'Patios' },
  { id: 6, src: '/images/gallery/6.webp', alt: 'Concrete patio finished for outdoor entertaining', category: 'Patios' },
  { id: 7, src: '/images/gallery/7.webp', alt: 'Cool deck pool surface finished in tan', category: 'Pool Decks' },
  { id: 8, src: '/images/gallery/8.webp', alt: 'Textured concrete pool deck surrounding backyard pool', category: 'Pool Decks' },
  { id: 9, src: '/images/gallery/9.webp', alt: 'Resurfaced pool deck with slip-resistant finish', category: 'Pool Decks' },
  { id: 10, src: '/images/gallery/10.webp', alt: 'CMU block retaining wall on a sloped lot', category: 'Retaining Walls' },
  { id: 11, src: '/images/gallery/11.webp', alt: 'Decorative capped block privacy wall', category: 'Retaining Walls' },
  { id: 12, src: '/images/gallery/12.webp', alt: 'Poured foundation slab for a new home addition', category: 'Foundations' },
  { id: 13, src: '/images/gallery/13.webp', alt: 'Post-tension slab with cable reinforcement visible', category: 'Foundations' },
  { id: 14, src: '/images/gallery/14.webp', alt: 'Commercial parking lot concrete pour', category: 'Commercial' },
  { id: 15, src: '/images/gallery/15.webp', alt: 'ADA-compliant commercial sidewalk and ramp', category: 'Commercial' },
  { id: 16, src: '/images/gallery/16.webp', alt: 'Warehouse interior concrete floor finish', category: 'Commercial' },
]

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Gallery', path: '/gallery' },
])

export default function Gallery() {
  const fadeRef = useFadeUp<HTMLDivElement>()
  const [active, setActive] = useState<(typeof categories)[number]>('All')

  const filtered = active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active)

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Concrete Project Gallery"
        description="Browse photos of completed concrete projects in Dallas, TX — driveways, patios, pool decks, retaining walls, and more."
        canonicalPath="/gallery"
        schema={breadcrumbSchema}
      />

      <PageHero
        title="Our Work Speaks for Itself"
        subtitle="A look at recent driveways, patios, pool decks, and commercial projects across Dallas."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Gallery' }]}
      />

      <section className="section bg-white">
        <div className="container-acd">
          <div className="fade-up mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`border px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-wide transition-colors ${
                  active === cat
                    ? 'border-silver bg-silver text-navy'
                    : 'border-rule bg-white text-mid hover:border-silver hover:text-silver'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="fade-up grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img) => (
              <div key={img.id} className="group relative h-72 overflow-hidden border border-rule">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/80 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="font-heading text-sm font-semibold uppercase tracking-wide text-white">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
