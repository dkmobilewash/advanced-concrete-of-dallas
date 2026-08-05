import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import GalleryGrid from '@/components/sections/GalleryGrid'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Concrete Project Gallery',
  description:
    'Browse photos of completed concrete projects in Plano, TX — driveways, patios, pool decks, block walls, and more.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Concrete Project Gallery | Plano Concrete Solutions',
    description:
      'Browse photos of completed concrete projects in Plano, TX — driveways, patios, pool decks, block walls, and more.',
    url: '/gallery',
    images: ['/og-image.jpg'],
  },
}

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Our Work Speaks for Itself"
        subtitle="A look at recent driveways, patios, pool decks, and commercial projects across Plano."
        imageSrc="https://picsum.photos/seed/pcs-gallery-hero/1600/500"
        imageAlt="Completed concrete patio project in Plano, TX"
        height="short"
        priority
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <GalleryGrid />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
