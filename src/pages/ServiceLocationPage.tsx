import { useParams, Navigate, Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import SectionEyebrow from '@/components/SectionEyebrow'
import ProcessSteps from '@/components/ProcessSteps'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'
import { CheckCircle, MapPin, Phone } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { getServiceBySlug, services } from '@/data/services'
import { getServiceAreaBySlug, serviceAreas } from '@/data/serviceAreas'
import { BUSINESS } from '@/lib/business'

export default function ServiceLocationPage() {
  const { serviceSlug, locationSlug } = useParams<{ serviceSlug: string; locationSlug: string }>()
  const fadeRef = useFadeUp<HTMLDivElement>()

  const service = serviceSlug ? getServiceBySlug(serviceSlug) : undefined
  const area = locationSlug ? getServiceAreaBySlug(locationSlug) : undefined

  if (!service || !area) return <Navigate to="/" replace />

  const otherServicesHere = services.filter((s) => s.slug !== service.slug)
  const otherAreasForService = serviceAreas.filter((a) => a.slug !== area.slug)

  const faqItems = [
    {
      question: `Do you offer ${service.name.toLowerCase()} in ${area.name}?`,
      answer: `Yes. ${BUSINESS.name} regularly works in ${area.name} and the surrounding area — ${area.closingLine.toLowerCase()}`,
    },
    ...service.faq,
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: {
      '@type': 'Place',
      name: `${area.name}, Dallas, TX`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BUSINESS.siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: service.name, item: `${BUSINESS.siteUrl}/${service.slug}` },
      {
        '@type': 'ListItem',
        position: 3,
        name: area.name,
        item: `${BUSINESS.siteUrl}/${service.slug}/${area.slug}`,
      },
    ],
  }

  return (
    <div ref={fadeRef}>
      <PageMeta
        title={`${service.name} in ${area.name}, TX`}
        description={`Professional ${service.name.toLowerCase()} in ${area.name}, Dallas TX. Licensed & insured, free estimates. Call ${BUSINESS.phone}.`}
        canonicalPath={`/${service.slug}/${area.slug}`}
        ogImage={service.heroImage}
        schema={[schema, breadcrumbSchema]}
      />

      <PageHero
        title={`${service.name} in ${area.name}, TX`}
        subtitle={`${service.heroSubtitle} Built for ${area.name} homeowners and businesses.`}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: service.name, href: `/${service.slug}` },
          { label: area.name },
        ]}
      />

      <section className="section bg-white">
        <div className="container-acd fade-up max-w-3xl">
          <p className="mb-5 font-body text-base leading-relaxed text-mid">
            When {area.name} homeowners and businesses need {service.name.toLowerCase()}, they call{' '}
            {BUSINESS.name}. We bring the same standard of site prep and reinforcement to every{' '}
            {service.name.toLowerCase()} project in {area.name} that we do across the rest of Dallas —
            engineered for North Texas clay soil and built to hold up to the Texas heat.
          </p>
          <p className="mb-5 font-body text-base leading-relaxed text-mid">{service.intro[0]}</p>
          <p className="font-body text-base leading-relaxed text-mid">{area.intro}</p>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Benefits" heading={`Why Choose ${service.name} in ${area.name}`} />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 fade-up sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-silver" />
                <span className="font-body text-base text-mid">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Our Process" heading="How It Works" />
          </div>
          <div className="fade-up">
            <ProcessSteps steps={service.processSteps} />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-acd max-w-3xl">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Local Notes" heading={`${service.name} Work in ${area.name}`} />
          </div>
          <div className="fade-up border-l-4 border-silver bg-white p-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-silver" />
              <h3 className="text-navy">Local to {area.name}</h3>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-mid">{area.localNotes}</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd max-w-3xl">
          <div className="fade-up">
            <SectionEyebrow eyebrow="FAQ" heading="Frequently Asked Questions" />
          </div>
          <div className="fade-up">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Nearby" heading={`Other Services in ${area.name}`} align="left" />
            <div className="flex flex-wrap gap-3">
              {otherServicesHere.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}/${area.slug}`}
                  className="border border-rule bg-white px-4 py-2.5 font-heading text-sm font-semibold text-navy transition-colors hover:border-silver hover:text-silver"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="fade-up">
            <SectionEyebrow eyebrow="Nearby" heading={`${service.name} in Other Areas`} align="left" />
            <div className="flex flex-wrap gap-3">
              {otherAreasForService.map((a) => (
                <Link
                  key={a.slug}
                  to={`/${service.slug}/${a.slug}`}
                  className="border border-rule bg-white px-4 py-2.5 font-heading text-sm font-semibold text-navy transition-colors hover:border-silver hover:text-silver"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd fade-up max-w-3xl text-center">
          <p className="font-body text-base leading-relaxed text-mid">{area.closingLine}</p>
          <a href={BUSINESS.phoneHref} className="btn-outline-navy mt-6">
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </div>
      </section>

      <CtaSection heading={`Ready to Start Your ${service.name} Project in ${area.name}?`} />
    </div>
  )
}
