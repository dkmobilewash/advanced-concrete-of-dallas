import Link from 'next/link'
import { Car, TreePine, Waves, Grid3x3, Layers, Building2, MapPin, Star } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/forms/ContactForm'
import { Location } from '@/types'
import { services } from '@/data/services'

interface LocationDetailProps {
  location: Location
}

const serviceIcons: Record<string, typeof Car> = {
  driveways: Car,
  patios: TreePine,
  'pool-decks': Waves,
  'block-walls': Grid3x3,
  'foundations-slabs': Layers,
  'commercial-concrete': Building2,
}

export default function LocationDetail({ location }: LocationDetailProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://planoconcretesolutions.com/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Service Areas',
        item: 'https://planoconcretesolutions.com/service-areas',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: location.area,
        item: `https://planoconcretesolutions.com/service-areas/${location.slug}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HeroSection
        title={`Concrete Contractors Serving ${location.area}, Plano TX`}
        subtitle={location.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc={`https://picsum.photos/seed/pcs-${location.slug}-hero/1600/700`}
        imageAlt={`Concrete contractor working in ${location.area}, Plano, TX`}
        height="medium"
        align="left"
        priority
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {location.intro.map((paragraph, i) => (
            <p key={i} className="mb-5 text-base leading-relaxed text-mid">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Our Work" title={`Concrete Services We Offer in ${location.area}`} />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.slug]
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-display text-base font-semibold text-dark">{s.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="rounded-lg border-l-4 border-accent bg-light p-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-dark">Local to {location.area}</h3>
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mid">
              {location.landmarks.map((landmark) => (
                <li key={landmark}>{landmark}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-white md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <div className="flex justify-center gap-1">
            {Array.from({ length: location.testimonial.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
            ))}
          </div>
          <p className="mt-4 text-lg leading-relaxed text-gray-200">&ldquo;{location.testimonial.quote}&rdquo;</p>
          <p className="mt-5 font-display text-sm font-semibold text-white">
            {location.testimonial.name}{' '}
            <span className="font-body font-normal text-gray-400">&mdash; {location.testimonial.area}</span>
          </p>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-sm text-mid">
            We also serve{' '}
            {location.nearbyAreas.map((area, i) => {
              const nearby = location.nearbyAreas
              const isLast = i === nearby.length - 1
              const slug = area.toLowerCase().replace(/\s+/g, '-')
              return (
                <span key={area}>
                  <Link href={`/service-areas/${slug}`} className="font-medium text-accent hover:underline">
                    {area}
                  </Link>
                  {!isLast ? ', ' : ''}
                </span>
              )
            })}
            , and more across Plano.
          </p>
        </div>
      </section>

      <section className="bg-light py-16 md:py-20">
        <div className="mx-auto max-w-2xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Get Started"
            title={`Request a Free Estimate in ${location.area}`}
            subtitle="Fill out the form below and we'll respond within 1 business day."
          />
          <ContactForm defaultServiceArea={location.area} />
        </div>
      </section>
    </>
  )
}
