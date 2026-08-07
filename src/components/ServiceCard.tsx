import { Link } from 'react-router-dom'
import { ArrowRight } from './icons'

interface ServiceCardProps {
  title: string
  description: string
  href: string
}

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link
      to={href}
      className="group block border-t-4 border-silver bg-white p-6 shadow-sm transition-colors duration-200 hover:bg-cream"
    >
      <h3 className="text-navy">{title}</h3>
      <p className="mt-2 font-body text-sm leading-relaxed text-mid">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 font-heading text-sm font-semibold uppercase tracking-wide text-silver group-hover:text-silver-lt">
        Learn More <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
