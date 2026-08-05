import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Concrete Services in Plano TX',
  description:
    'Explore our full range of concrete services including driveways, patios, pool decks, block walls, foundations, and commercial concrete work in Plano, TX.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Concrete Services in Plano TX | Plano Concrete Solutions',
    description:
      'Explore our full range of concrete services in Plano, TX: driveways, patios, pool decks, block walls, foundations, and commercial concrete.',
    url: '/services',
    images: ['/og-image.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Professional Concrete Services in Plano, TX"
        subtitle="Residential and commercial concrete work built for North Texas conditions, from driveways to full commercial pours."
        imageSrc="https://picsum.photos/seed/pcs-services-hero/1600/700"
        imageAlt="Concrete contractor finishing a slab in Plano, TX"
        height="medium"
        align="left"
        priority
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-base leading-relaxed text-mid">
            Plano Concrete Solutions handles the full range of concrete work homeowners and businesses need
            throughout Plano and its surrounding neighborhoods. From a single driveway replacement to a
            multi-phase commercial parking lot, our crews bring the same standard of engineering, finish
            quality, and communication to every job. Browse our services below, or reach out for a free
            estimate on your specific project.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ServicesGrid showHeading={false} />
        </div>
      </section>

      <WhyChooseUs />

      <CTABanner />
    </>
  )
}
