import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import SectionHeading from '@/components/ui/SectionHeading'

interface ServicesGridProps {
  title?: string
  eyebrow?: string
  showHeading?: boolean
}

export default function ServicesGrid({
  title = 'Our Concrete Services',
  eyebrow = 'What We Do',
  showHeading = true,
}: ServicesGridProps) {
  return (
    <div>
      {showHeading && (
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle="From residential driveways to large commercial pours, we handle every stage of concrete work throughout Plano."
        />
      )}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={service.heroImage}
                alt={service.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-dark">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mid">{service.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-accent">
                Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
