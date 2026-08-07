import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from './icons'
import { BUSINESS } from '@/lib/business'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/serviceAreas'
import MobileDrawer from './MobileDrawer'
import HamburgerButton from './HamburgerButton'

function useClickOutside<T extends HTMLElement>(onOutside: () => void) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onOutside()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [onOutside])

  return ref
}

function NavDropdown({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 font-heading text-sm font-semibold uppercase tracking-wide text-navy hover:text-silver"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="absolute left-1/2 top-full z-50 mt-3 w-max -translate-x-1/2 border border-rule bg-white p-3 shadow-lg"
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="hidden bg-navy md:block">
        <div className="container-acd flex items-center justify-between py-2 text-sm">
          <a href={BUSINESS.phoneHref} className="font-heading font-semibold text-silver-lt hover:text-silver">
            {BUSINESS.phone}
          </a>
          <span className="font-body text-white/70">{BUSINESS.tagline}</span>
        </div>
      </div>

      <div className="h-header-mobile md:h-header">
        <div className="container-acd flex h-full items-center justify-between">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-heading text-xl font-bold uppercase text-navy">{BUSINESS.shortName}</span>
            <span className="font-serif text-sm italic text-silver">of Dallas</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            <NavDropdown label="Services">
              <div className="flex w-56 flex-col">
                <Link to="/concrete-services" className="px-3 py-2 font-heading text-sm font-semibold text-navy hover:bg-cream">
                  All Services
                </Link>
                <div className="my-1 border-t border-rule" />
                {services.map((s) => (
                  <Link key={s.slug} to={`/${s.slug}`} className="px-3 py-2 font-body text-sm text-mid hover:bg-cream hover:text-silver">
                    {s.name}
                  </Link>
                ))}
              </div>
            </NavDropdown>

            <NavDropdown label="Service Areas">
              <div className="grid w-[28rem] grid-cols-2 gap-1">
                {serviceAreas.map((a) => (
                  <Link key={a.slug} to={`/service-areas/${a.slug}`} className="px-3 py-2 font-body text-sm text-mid hover:bg-cream hover:text-silver">
                    {a.name}
                  </Link>
                ))}
              </div>
            </NavDropdown>

            <Link to="/gallery" className="font-heading text-sm font-semibold uppercase tracking-wide text-navy hover:text-silver">
              Gallery
            </Link>
            <Link to="/blog" className="font-heading text-sm font-semibold uppercase tracking-wide text-navy hover:text-silver">
              Blog
            </Link>
            <Link to="/about-advanced-concrete-of-dallas" className="font-heading text-sm font-semibold uppercase tracking-wide text-navy hover:text-silver">
              About
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link to="/free-estimate-dallas" className="btn-primary">
              Get Free Estimate
            </Link>
          </div>

          <HamburgerButton open={drawerOpen} onClick={() => setDrawerOpen((v) => !v)} />
        </div>
      </div>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  )
}
