import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { locations } from '@/data/locations'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ServiceAreaMap() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Where We Work"
          title="Proudly Serving Plano & Surrounding Neighborhoods"
          subtitle="From established West Plano streets to the growing corridors near Legacy West, we bring the same quality concrete work to every neighborhood we serve."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/service-areas/${l.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-light px-5 py-3 font-display text-sm font-medium text-primary transition-colors hover:border-accent hover:bg-accent hover:text-white min-h-[44px]"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {l.area}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
