import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import SectionEyebrow from '@/components/SectionEyebrow'
import CtaSection from '@/components/CtaSection'
import { ShieldCheck, ClipboardCheck, MapPin, Star } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { BUSINESS } from '@/lib/business'
import { getBreadcrumbSchema } from '@/lib/schema'

const values = [
  { icon: ShieldCheck, label: 'Licensed & Fully Insured', description: 'Every project is backed by proper licensing and insurance for your protection.' },
  { icon: ClipboardCheck, label: 'Free, Honest Estimates', description: 'We provide clear, no-obligation quotes before any work begins — no surprise charges.' },
  { icon: MapPin, label: 'Locally Owned & Operated', description: 'A Dallas-based crew that knows the neighborhoods, soil, and codes we build for.' },
  { icon: Star, label: 'Craftsmanship That Lasts', description: 'We engineer for North Texas clay soil and Texas heat, not just the minimum code requirement.' },
]

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about-advanced-concrete-of-dallas' },
])

export default function About() {
  const fadeRef = useFadeUp<HTMLDivElement>()

  return (
    <div ref={fadeRef}>
      <PageMeta
        title={`About ${BUSINESS.name}`}
        description={`Learn about ${BUSINESS.name}, a locally owned, licensed and insured concrete contractor serving Dallas, TX and the surrounding neighborhoods.`}
        canonicalPath="/about-advanced-concrete-of-dallas"
        schema={breadcrumbSchema}
      />

      <PageHero
        title={`About ${BUSINESS.name}`}
        subtitle="A locally owned concrete contractor built on straightforward pricing and work that holds up to Texas conditions."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      <section className="section bg-white">
        <div className="container-acd grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="fade-up">
            <h2 className="text-navy">Our Story</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-mid">
              {BUSINESS.name} was founded by concrete professionals who grew tired of watching homeowners get
              burned by rushed pours, thin slabs, and contractors who disappeared after the check cleared. We
              set out to build a company around the opposite approach: proper site prep, correct reinforcement
              for North Texas clay soil, and a crew that shows up when they say they will.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-mid">
              Today we handle residential and commercial concrete work across Dallas and its surrounding
              neighborhoods — driveways, patios, pool decks, retaining walls, foundations, and full commercial
              pours. Every project gets the same standard of engineering and finish quality, whether it's a
              single driveway or a multi-phase parking lot.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-mid">{BUSINESS.license}.</p>
          </div>
          <div className="fade-up flex items-center justify-center border border-rule bg-cream p-10 text-center">
            <div>
              <p className="font-heading text-5xl font-bold text-silver">{new Date().getFullYear() - BUSINESS.founded}+</p>
              <p className="mt-2 font-heading text-sm uppercase tracking-wide text-navy">Years Serving Dallas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Why Us" heading="What Sets Us Apart" />
          </div>
          <div className="grid grid-cols-2 gap-8 fade-up lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.label} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-silver/10">
                  <v.icon className="h-8 w-8 text-silver" />
                </div>
                <h3 className="mt-4 text-navy">{v.label}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-mid">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
