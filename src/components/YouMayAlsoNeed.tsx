import SectionEyebrow from './SectionEyebrow'
import ServiceCard from './ServiceCard'
import { getServiceBySlug } from '@/data/services'

interface YouMayAlsoNeedProps {
  slugs: string[]
}

export default function YouMayAlsoNeed({ slugs }: YouMayAlsoNeedProps) {
  const related = slugs.map((slug) => getServiceBySlug(slug)).filter((s) => s !== undefined)
  if (related.length === 0) return null

  return (
    <section className="section bg-cream">
      <div className="container-acd">
        <SectionEyebrow eyebrow="Related" heading="You May Also Need" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {related.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.name}
              description={service.shortDescription}
              href={`/${service.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
