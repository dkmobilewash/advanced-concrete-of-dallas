import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import SectionHeading from '@/components/ui/SectionHeading'

export default function TestimonialsSection() {
  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Customers Say"
          variant="dark"
          subtitle="Real feedback from homeowners across Plano and the surrounding neighborhoods."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/5 p-6 shadow-md">
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-200">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 font-display text-sm font-semibold text-white">
                {t.name} <span className="font-body font-normal text-gray-400">&mdash; {t.area}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
