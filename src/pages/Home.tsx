import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import SectionEyebrow from '@/components/SectionEyebrow'
import ServiceCard from '@/components/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'
import { ShieldCheck, ClipboardCheck, MapPin, Star } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { BUSINESS } from '@/lib/business'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/serviceAreas'

const trustPoints = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: ClipboardCheck, label: 'Free Estimates' },
  { icon: MapPin, label: 'Locally Owned in Dallas' },
  { icon: Star, label: '5-Star Rated' },
]

const processSteps = [
  { title: 'Free Estimate', description: 'We walk your site, talk through your project, and provide a clear, no-obligation quote.' },
  { title: 'Design & Schedule', description: 'We finalize finish, layout, and scope, then lock in a start date that works for you.' },
  { title: 'Prep & Pour', description: 'Our crew handles excavation, forms, reinforcement, and the pour itself, start to finish.' },
  { title: 'Finish & Walkthrough', description: 'We finish, seal, and walk the completed project with you before we call it done.' },
]

const homeFaq = [
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, every estimate is free and comes with no obligation. We visit your property, assess the site, and provide a detailed written quote.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. Advanced Concrete of Dallas is fully licensed and insured for residential and commercial concrete work throughout the Dallas area.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Dallas and the surrounding neighborhoods, including Uptown, Highland Park, University Park, Preston Hollow, Lakewood, Oak Lawn, Lake Highlands, Oak Cliff, and the Bishop Arts District.',
  },
  {
    question: 'How soon can you start my project?',
    answer: 'Timelines vary by season and project size. We’ll give you a realistic start date during your free estimate, and we do our best to work around your schedule.',
  },
]

export default function Home() {
  const fadeRef = useFadeUp<HTMLDivElement>()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: ['Dallas', ...serviceAreas.map((a) => a.name)],
    priceRange: '$$',
  }

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Concrete Contractor Dallas TX"
        description="Advanced Concrete of Dallas pours driveways, patios, pool decks, and commercial concrete throughout Dallas, TX. Licensed, insured, free estimates."
        canonicalPath="/"
        schema={schema}
      />

      <PageHero
        title="Dallas's Concrete Experts"
        subtitle="From driveways to commercial slabs — quality work, fair prices, and a finish built to last the Texas heat."
        size="large"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/free-estimate-dallas" className="btn-primary">
            Get a Free Estimate
          </Link>
          <Link to="/gallery" className="btn-secondary">
            See Our Work
          </Link>
        </div>
      </PageHero>

      <section className="border-y border-rule bg-white py-8">
        <div className="container-acd flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustPoints.map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-mid">
              <t.icon className="h-5 w-5 text-silver" />
              <span className="font-heading text-sm font-semibold uppercase tracking-wide">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow
              eyebrow="What We Do"
              heading="Our Concrete Services"
              subtitle="From residential driveways to large commercial pours, we handle every stage of concrete work throughout Dallas."
            />
          </div>
          <div className="grid grid-cols-1 gap-6 fade-up sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} title={s.name} description={s.shortDescription} href={`/${s.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Our Process" heading="How We Work" align="center" />
          </div>
          <div className="fade-up">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Where We Work" heading="Proudly Serving Dallas & Surrounding Neighborhoods" variant="dark" />
          </div>
          <div className="fade-up flex flex-wrap justify-center gap-3">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                to={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 font-heading text-sm font-medium text-white transition-colors hover:border-silver hover:bg-silver hover:text-navy"
              >
                <MapPin className="h-4 w-4" />
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-acd max-w-3xl">
          <div className="fade-up">
            <SectionEyebrow eyebrow="FAQ" heading="Frequently Asked Questions" />
          </div>
          <div className="fade-up">
            <FaqAccordion items={homeFaq} />
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
