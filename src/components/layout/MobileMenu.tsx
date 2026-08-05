'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { COMPANY } from '@/lib/utils'
import { cn } from '@/lib/utils'

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-md text-primary"
      >
        <Menu className="h-7 w-7" aria-hidden="true" />
      </button>

      <div
        className={cn(
          'fixed inset-0 z-[60] bg-white transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 rounded-md bg-accent px-4 py-3 font-display text-sm font-semibold text-white min-h-[44px]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {COMPANY.phone}
          </a>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-md text-primary"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col overflow-y-auto px-4 py-4" aria-label="Mobile">
          <div className="border-b border-border">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              className="flex w-full items-center justify-between py-4 font-display text-base font-semibold uppercase text-dark"
            >
              Services
              <ChevronDown className={cn('h-5 w-5 transition-transform', servicesOpen && 'rotate-180')} aria-hidden="true" />
            </button>
            {servicesOpen && (
              <div className="flex flex-col pb-3">
                <Link href="/services" onClick={() => setOpen(false)} className="py-2.5 text-mid">
                  All Concrete Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-mid"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-border">
            <button
              onClick={() => setAreasOpen((v) => !v)}
              aria-expanded={areasOpen}
              className="flex w-full items-center justify-between py-4 font-display text-base font-semibold uppercase text-dark"
            >
              Service Areas
              <ChevronDown className={cn('h-5 w-5 transition-transform', areasOpen && 'rotate-180')} aria-hidden="true" />
            </button>
            {areasOpen && (
              <div className="flex flex-col pb-3">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/service-areas/${l.slug}`}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-mid"
                  >
                    {l.area}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            onClick={() => setOpen(false)}
            className="border-b border-border py-4 font-display text-base font-semibold uppercase text-dark"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="py-4 font-display text-base font-semibold uppercase text-dark"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  )
}
