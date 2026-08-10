import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import { MapPin } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { serviceAreas } from '@/data/serviceAreas'
import { getBreadcrumbSchema } from '@/lib/schema'

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Service Areas', path: '/service-areas' },
])

export default function ServiceAreasIndex() {
  const fadeRef = useFadeUp<HTMLDivElement>()

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Dallas Service Areas"
        description="Advanced Concrete of Dallas serves Uptown, Highland Park, Preston Hollow, Lakewood, and neighborhoods throughout Dallas, TX."
        canonicalPath="/service-areas"
        schema={breadcrumbSchema}
      />

      <PageHero
        title="Where We Work"
        subtitle="Proudly serving Dallas and the neighborhoods that make up the city."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
      />

      <section className="section bg-white">
        <div className="container-acd grid grid-cols-1 gap-6 fade-up sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/service-areas/${area.slug}`}
              className="group block border-t-4 border-silver bg-white p-6 shadow-sm transition-colors hover:bg-cream"
            >
              <div className="flex items-center gap-2 text-silver">
                <MapPin className="h-5 w-5" />
                <h3 className="text-navy">{area.name}</h3>
              </div>
              <p className="mt-2 font-body text-sm leading-relaxed text-mid">{area.tagline}</p>
              <span className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-silver group-hover:text-silver-lt">
                View Area &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
