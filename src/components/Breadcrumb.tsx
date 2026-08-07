import { Link } from 'react-router-dom'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-cream">
      <div className="container-acd py-3">
        <ol className="flex flex-wrap items-center gap-2 font-body text-sm text-mid">
          {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
              <li key={item.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">&rsaquo;</span>}
                {isLast || !item.href ? (
                  <span className="text-charcoal">{item.label}</span>
                ) : (
                  <Link to={item.href} className="text-silver hover:text-silver-lt hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
