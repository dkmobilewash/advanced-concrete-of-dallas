import { Link } from 'react-router-dom'
import { Phone } from './icons'
import { BUSINESS } from '@/lib/business'

interface CtaSectionProps {
  heading?: string
  subtext?: string
}

export default function CtaSection({
  heading = 'Ready to Start Your Concrete Project in Dallas?',
  subtext = "Get a free estimate today — no obligation. We'll respond within 1 business day.",
}: CtaSectionProps) {
  return (
    <section className="section bg-navy">
      <div className="container-acd text-center">
        <h2 className="text-white">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-white/75">{subtext}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={BUSINESS.phoneHref} className="btn-primary">
            <Phone className="h-4 w-4" />
            Call {BUSINESS.phone}
          </a>
          <Link to="/free-estimate-dallas" className="btn-secondary">
            Request a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  )
}
