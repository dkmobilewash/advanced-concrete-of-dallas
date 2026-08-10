import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import SectionEyebrow from '@/components/SectionEyebrow'
import ServiceCard from '@/components/ServiceCard'
import CtaSection from '@/components/CtaSection'
import { useFadeUp } from '@/hooks/useFadeUp'
import { services } from '@/data/services'
import { getBreadcrumbSchema } from '@/lib/schema'

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/concrete-services' },
])

export default function ServicesOverview() {
  const fadeRef = useFadeUp<HTMLDivElement>()

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Concrete Services in Dallas TX"
        description="Explore our full range of concrete services including driveways, patios, pool decks, retaining walls, foundations, and commercial concrete work in Dallas, TX."
        canonicalPath="/concrete-services"
        schema={breadcrumbSchema}
      />

      <PageHero
        title="Concrete Services in Dallas, TX"
        subtitle="Residential and commercial concrete work built for North Texas conditions, from driveways to full commercial pours."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="section bg-white">
        <div className="container-acd max-w-3xl text-center fade-up">
          <p className="font-body text-lg leading-relaxed text-mid">
            Advanced Concrete of Dallas handles the full range of concrete work homeowners and businesses need
            throughout Dallas and its surrounding neighborhoods. From a single driveway replacement to a
            multi-phase commercial parking lot, our crews bring the same standard of engineering, finish
            quality, and communication to every job.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="What We Do" heading="Browse Our Services" />
          </div>
          <div className="grid grid-cols-1 gap-6 fade-up sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} title={s.name} description={s.shortDescription} href={`/${s.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
