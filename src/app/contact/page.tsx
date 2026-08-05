import type { Metadata } from 'next'
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from 'lucide-react'
import HeroSection from '@/components/sections/HeroSection'
import ContactForm from '@/components/forms/ContactForm'
import { COMPANY } from '@/lib/utils'
import { locations } from '@/data/locations'

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimates',
  description:
    'Contact us for a free concrete estimate in Plano, TX. Call (214) 751-8014 or fill out our online form. We serve all Plano neighborhoods.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Plano Concrete Solutions | Free Estimates',
    description:
      'Contact us for a free concrete estimate in Plano, TX. Call (214) 751-8014 or fill out our online form.',
    url: '/contact',
    images: ['/og-image.jpg'],
  },
}

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
  areaServed: locations.map((l) => l.area).concat('Plano'),
  priceRange: '$$',
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <HeroSection
        title="Get Your Free Concrete Estimate in Plano"
        subtitle="Tell us about your project and we'll respond within 1 business day with a no-obligation quote."
        imageSrc="https://picsum.photos/seed/pcs-contact-hero/1600/500"
        imageAlt="Concrete crew consulting with a Plano homeowner"
        height="short"
        priority
      />

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-[3fr_2fr]">
          <div>
            <h2 className="mb-6 font-display text-2xl font-semibold text-dark">Request a Free Estimate</h2>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <a
              href={COMPANY.phoneHref}
              className="flex items-center gap-4 rounded-lg bg-primary p-6 text-white transition-colors hover:bg-dark min-h-[44px]"
            >
              <Phone className="h-8 w-8 shrink-0 text-accent" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-300">Call us</p>
                <p className="font-display text-2xl font-semibold">{COMPANY.phone}</p>
              </div>
            </a>

            <div className="rounded-lg border border-border bg-light p-6">
              <ul className="space-y-4 text-sm text-mid">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  <a href={`mailto:${COMPANY.email}`} className="hover:text-accent break-all">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  {COMPANY.hours}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                  Serving {COMPANY.address} and surrounding neighborhoods
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-border p-6">
              <h3 className="font-display text-base font-semibold text-dark">Neighborhoods We Serve</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-mid">
                {locations.map((l) => (
                  <li key={l.slug}>{l.area}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-lg bg-accent/10 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-sm text-dark">We respond within 1 business day &mdash; guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-6 text-center font-display text-2xl font-semibold text-dark">
            Serving Plano, TX and Surrounding Areas
          </h2>
          <div className="overflow-hidden rounded-lg border border-border shadow-md">
            <iframe
              title="Plano Concrete Solutions service area map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214470.3!2d-96.7997!3d33.0198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1b3c1c9b5555%3A0x0!2sPlano%2C+TX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  )
}
