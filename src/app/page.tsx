import type { Metadata } from 'next'
import { ShieldCheck, ClipboardCheck, MapPin, Star } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import ServiceAreaMap from '@/components/sections/ServiceAreaMap'
import CTABanner from '@/components/sections/CTABanner'
import { COMPANY } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Plano Concrete Solutions | Driveways, Patios & More in Plano, TX',
  description:
    "Plano's trusted concrete contractors. We pour driveways, patios, pool decks, and more throughout Plano, TX. Call (214) 751-8014 for a free estimate.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Plano Concrete Solutions | Driveways, Patios & More in Plano, TX',
    description:
      "Plano's trusted concrete contractors. We pour driveways, patios, pool decks, and more throughout Plano, TX.",
    url: '/',
    images: ['/og-image.jpg'],
  },
}

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: ClipboardCheck, label: 'Free Estimates' },
  { icon: MapPin, label: 'Locally Owned in Plano' },
  { icon: Star, label: '5-Star Google Rated' },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Plano Concrete Solutions',
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Plano',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  areaServed: [
    'Plano',
    'West Plano',
    'East Plano',
    'North Plano',
    'Downtown Plano',
    'Legacy West',
    'Willow Bend',
    'Deerfield',
    'Preston Meadow',
  ],
  priceRange: '$$',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <HeroSection
        title="Plano's Concrete Experts"
        subtitle="From driveways to commercial slabs — quality work, fair prices, and a finish built to last the Texas heat."
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        ctaText2="See Our Work"
        ctaHref2="/gallery"
        imageSrc="https://picsum.photos/seed/pcs-home-hero/1920/1080"
        imageAlt="Freshly poured concrete driveway in a Plano, Texas neighborhood"
        height="full"
        showScrollChevron
        priority
      />

      <section className="border-y border-border bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 md:px-6">
          {trustBadges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 text-mid">
              <b.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="font-display text-sm font-semibold uppercase tracking-wide">{b.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ServicesGrid />
        </div>
      </section>

      <WhyChooseUs />

      <TestimonialsSection />

      <ServiceAreaMap />

      <CTABanner />
    </>
  )
}
