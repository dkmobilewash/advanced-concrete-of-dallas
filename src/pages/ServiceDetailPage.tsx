import { Link, Navigate } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import SectionEyebrow from '@/components/SectionEyebrow'
import ProcessSteps from '@/components/ProcessSteps'
import FaqAccordion from '@/components/FaqAccordion'
import YouMayAlsoNeed from '@/components/YouMayAlsoNeed'
import CtaSection from '@/components/CtaSection'
import { CheckCircle, Phone } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { getServiceBySlug } from '@/data/services'
import { BUSINESS } from '@/lib/business'

interface ServiceDetailPageProps {
  slug: string
}

export default function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const fadeRef = useFadeUp<HTMLDivElement>()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/" replace />

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: 'Dallas, TX',
  }

  return (
    <div ref={fadeRef}>
      <PageMeta
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
        ogImage={service.heroImage}
        schema={schema}
      />

      <PageHero
        title={service.name}
        subtitle={service.heroSubtitle}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/concrete-services' }, { label: service.name }]}
      />

      <section className="section bg-white">
        <div className="container-acd grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
          <div className="fade-up">
            {service.intro.map((paragraph, i) => (
              <p key={i} className="mb-5 font-body text-base leading-relaxed text-mid">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="fade-up h-fit border border-rule bg-cream p-6">
            <h3 className="text-navy">Get a Free Quote</h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-mid">
              Tell us about your {service.name.toLowerCase()} project and we&rsquo;ll get back to you within 1
              business day with a no-obligation estimate.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link to="/free-estimate-dallas" className="btn-primary w-full">
                Request a Quote
              </Link>
              <a href={BUSINESS.phoneHref} className="btn-outline-navy w-full">
                <Phone className="h-4 w-4" />
                {BUSINESS.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Benefits" heading={`Why Choose Concrete ${service.name} in Dallas`} />
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 fade-up sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
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
            <SectionEyebrow eyebrow="FAQ" heading="Frequently Asked Questions" />
          </div>
          <div className="fade-up">
            <FaqAccordion items={service.faq} />
          </div>
        </div>
      </section>

      <YouMayAlsoNeed slugs={service.relatedServices} />

      <CtaSection />
    </div>
  )
}
