import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Phone, ArrowRight, ChevronDown } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import CTABanner from '@/components/sections/CTABanner'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { Service } from '@/types'
import { getServiceBySlug } from '@/data/services'
import { COMPANY } from '@/lib/utils'

interface ServiceDetailProps {
  service: Service
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const related = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s))

  return (
    <>
      <HeroSection
        title={service.name}
        subtitle={service.heroSubtitle}
        ctaText="Get a Free Estimate"
        ctaHref="/contact"
        imageSrc={service.heroImage}
        imageAlt={`${service.name} project in Plano, TX`}
        height="medium"
        align="left"
        priority
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-[1fr_360px]">
          <div>
            {service.intro.map((paragraph, i) => (
              <p key={i} className="mb-5 text-base leading-relaxed text-mid">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="h-fit rounded-lg border border-border bg-light p-6 shadow-md">
            <h3 className="font-display text-xl font-semibold text-dark">Get a Free Quote</h3>
            <p className="mt-2 text-sm leading-relaxed text-mid">
              Tell us about your {service.name.toLowerCase()} project and we&rsquo;ll get back to you within 1
              business day with a no-obligation estimate.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Button href="/contact" variant="primary" className="w-full">
                Request a Quote
              </Button>
              <Button href={COMPANY.phoneHref} variant="outline-navy" className="w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {COMPANY.phone}
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Benefits" title={`Why Choose Concrete ${service.name} in Plano`} />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <span className="text-base text-mid">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading eyebrow="Our Process" title="How It Works" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.processSteps.map((step, i) => (
              <div key={step.title} className="rounded-lg border border-border p-6">
                <span className="font-display text-4xl font-bold text-accent/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold text-dark">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mid">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {service.faq.map((item) => (
              <details key={item.question} className="faq-item rounded-lg border border-border bg-white p-5">
                <summary className="flex items-center justify-between gap-4 font-display text-base font-semibold text-dark">
                  {item.question}
                  <ChevronDown className="faq-chevron h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                </summary>
                <p className="faq-answer mt-3 text-sm leading-relaxed text-mid">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <SectionHeading eyebrow="Related" title="You May Also Need" />
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group overflow-hidden rounded-lg bg-light shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={r.heroImage}
                      alt={r.name}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-semibold text-dark">{r.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mid">{r.shortDescription}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-accent">
                      Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  )
}
