import Breadcrumb, { type BreadcrumbItem } from './Breadcrumb'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: BreadcrumbItem[]
  gradientClassName?: string
  backgroundImage?: string
  size?: 'default' | 'large'
  children?: React.ReactNode
}

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  gradientClassName = 'bg-gradient-to-br from-navy via-navy to-navy-dark',
  backgroundImage,
  size = 'default',
  children,
}: PageHeroProps) {
  return (
    <section className="relative">
      {breadcrumb && <Breadcrumb items={breadcrumb} />}
      <div className={`relative overflow-hidden ${gradientClassName}`}>
        {backgroundImage && (
          <>
            <img
              src={backgroundImage}
              alt=""
              aria-hidden="true"
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/70" />
          </>
        )}
        <div className={`container-acd relative ${size === 'large' ? 'py-24 md:py-40' : 'py-16 md:py-24'}`}>
          <h1 className="text-white">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl font-body text-lg text-white/80">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}
