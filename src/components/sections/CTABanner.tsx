import { Phone, ClipboardList } from 'lucide-react'
import { COMPANY } from '@/lib/utils'
import Button from '@/components/ui/Button'

export default function CTABanner() {
  return (
    <section
      className="relative bg-accent py-16 text-white md:py-20"
      style={{ clipPath: 'polygon(0 6%, 100% 0, 100% 94%, 0 100%)' }}
    >
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          Ready to Start Your Concrete Project in Plano?
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/90">
          Get a free estimate today &mdash; no obligation. We&rsquo;ll respond within 1 business day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={COMPANY.phoneHref} variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-accent">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </Button>
          <Button href="/contact" variant="secondary" className="!bg-primary !border-primary hover:!bg-dark">
            <ClipboardList className="h-4 w-4" aria-hidden="true" />
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
