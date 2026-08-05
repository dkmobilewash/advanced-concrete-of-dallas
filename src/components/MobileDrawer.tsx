import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Phone, X } from './icons'
import { BUSINESS } from '@/lib/business'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/serviceAreas'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-[60] w-full bg-white transition-transform duration-300 ease-in-out lg:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between border-b border-rule px-4 py-4">
        <a href={BUSINESS.phoneHref} className="btn-primary">
          <Phone className="h-4 w-4" />
          {BUSINESS.phone}
        </a>
        <button onClick={onClose} aria-label="Close menu" className="flex h-11 w-11 items-center justify-center text-navy">
          <X className="h-7 w-7" />
        </button>
      </div>

      <nav className="flex flex-col overflow-y-auto px-4 py-2" aria-label="Mobile">
        <div className="border-b border-rule">
          <button
            onClick={() => setServicesOpen((v) => !v)}
            aria-expanded={servicesOpen}
            className="flex w-full items-center justify-between py-4 font-heading text-base font-semibold uppercase text-navy"
          >
            Services
            <ChevronDown className={`h-5 w-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
          </button>
          {servicesOpen && (
            <div className="flex flex-col pb-3">
              <Link to="/concrete-services" onClick={onClose} className="py-2.5 text-mid">
                All Services
              </Link>
              {services.map((s) => (
                <Link key={s.slug} to={`/${s.slug}`} onClick={onClose} className="py-2.5 text-mid">
                  {s.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-rule">
          <button
            onClick={() => setAreasOpen((v) => !v)}
            aria-expanded={areasOpen}
            className="flex w-full items-center justify-between py-4 font-heading text-base font-semibold uppercase text-navy"
          >
            Service Areas
            <ChevronDown className={`h-5 w-5 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
          </button>
          {areasOpen && (
            <div className="flex flex-col pb-3">
              <Link to="/service-areas" onClick={onClose} className="py-2.5 text-mid">
                All Service Areas
              </Link>
              {serviceAreas.map((a) => (
                <Link key={a.slug} to={`/service-areas/${a.slug}`} onClick={onClose} className="py-2.5 text-mid">
                  {a.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/gallery" onClick={onClose} className="border-b border-rule py-4 font-heading text-base font-semibold uppercase text-navy">
          Gallery
        </Link>
        <Link to="/blog" onClick={onClose} className="border-b border-rule py-4 font-heading text-base font-semibold uppercase text-navy">
          Blog
        </Link>
        <Link to="/about-advanced-concrete-of-dallas" onClick={onClose} className="border-b border-rule py-4 font-heading text-base font-semibold uppercase text-navy">
          About
        </Link>
        <Link to="/free-estimate-dallas" onClick={onClose} className="py-4 font-heading text-base font-semibold uppercase text-navy">
          Contact Us
        </Link>
      </nav>
    </div>
  )
}
