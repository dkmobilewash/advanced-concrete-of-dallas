import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import SectionEyebrow from '@/components/SectionEyebrow'
import ServiceCard from '@/components/ServiceCard'
import CtaSection from '@/components/CtaSection'
import { MapPin } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { getServiceBySlug } from '@/data/services'
import { BUSINESS } from '@/lib/business'
import type { ServiceArea } from '@/types'

interface ServiceAreaPageProps {
  area: ServiceArea
}

export default function ServiceAreaPage({ area }: ServiceAreaPageProps) {
  const fadeRef = useFadeUp<HTMLDivElement>()
  const topServices = area.topServices.map((slug) => getServiceBySlug(slug)).filter((s) => s !== undefined)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BUSINESS.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: `${BUSINESS.siteUrl}/service-areas` },
      { '@type': 'ListItem', position: 3, name: area.name, item: `${BUSINESS.siteUrl}/service-areas/${area.slug}` },
    ],
  }

  return (
    <div ref={fadeRef}>
      <PageMeta
        title={`Concrete Contractor in ${area.name}, Dallas TX`}
        description={`${BUSINESS.name} provides concrete driveways, patios, and more in ${area.name}, Dallas, TX. Free estimates — call ${BUSINESS.phone}.`}
        canonicalPath={`/service-areas/${area.slug}`}
        schema={schema}
      />

      <PageHero
        title={`Concrete Contractor Serving ${area.name}, Dallas TX`}
        subtitle={area.tagline}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Service Areas', href: '/service-areas' }, { label: area.name }]}
      />

      <section className="section bg-white">
        <div className="container-acd max-w-3xl fade-up">
          <p className="mb-5 font-body text-base leading-relaxed text-mid">{area.intro}</p>
          <p className="font-body text-base leading-relaxed text-mid">{area.why}</p>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Our Work" heading={`Concrete Services We Offer in ${area.name}`} />
          </div>
          <div className="grid grid-cols-1 gap-6 fade-up sm:grid-cols-2 lg:grid-cols-3">
            {topServices.map((service) => (
              <ServiceCard key={service.slug} title={service.name} description={service.shortDescription} href={`/${service.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd max-w-3xl fade-up">
          <div className="border-l-4 border-gold bg-cream p-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gold" />
              <h3 className="text-navy">Local to {area.name}</h3>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-mid">{area.localNotes}</p>
          </div>
          <p className="mt-8 font-body text-base leading-relaxed text-mid">{area.closingLine}</p>
        </div>
      </section>

      <CtaSection heading={`Ready to Start Your Concrete Project in ${area.name}?`} />
    </div>
  )
}
