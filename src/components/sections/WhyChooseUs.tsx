import { ShieldCheck, ClipboardCheck, MapPin, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const points = [
  {
    icon: ShieldCheck,
    label: 'Licensed & Fully Insured',
    description: 'Every project is backed by proper licensing and insurance for your protection.',
  },
  {
    icon: ClipboardCheck,
    label: 'Free Estimates',
    description: 'We provide clear, no-obligation quotes before any work begins.',
  },
  {
    icon: MapPin,
    label: 'Locally Owned & Serving Plano',
    description: 'A Plano-based crew that knows the neighborhoods, soil, and codes we build for.',
  },
  {
    icon: Star,
    label: '5-Star Rated on Google',
    description: 'Consistently rated by homeowners across Plano for quality and reliability.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-light py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading eyebrow="Why Us" title="Why Plano Homeowners Choose Us" />
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.label} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <point.icon className="h-8 w-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-dark">{point.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mid">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
