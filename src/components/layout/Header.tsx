'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Phone } from 'lucide-react'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { COMPANY } from '@/lib/utils'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-shadow',
        scrolled ? 'shadow-md border-b border-border' : 'border-b border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="font-display font-bold text-xl md:text-2xl text-primary shrink-0">
          Plano Concrete <span className="text-accent">Solutions</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
          <div className="group relative">
            <button className="flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-dark hover:text-accent py-6">
              Services <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 rounded-lg border border-border bg-white p-3 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <Link
                href="/services"
                className="block rounded-md px-3 py-2 font-display text-sm font-semibold text-primary hover:bg-light"
              >
                All Concrete Services
              </Link>
              <div className="my-1 border-t border-border" />
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="block rounded-md px-3 py-2 text-sm text-mid hover:bg-light hover:text-accent"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-dark hover:text-accent py-6">
              Service Areas <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-96 -translate-x-1/2 rounded-lg border border-border bg-white p-3 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1">
                {locations.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/service-areas/${l.slug}`}
                    className="block rounded-md px-3 py-2 text-sm text-mid hover:bg-light hover:text-accent"
                  >
                    {l.area}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/gallery"
            className="font-display text-sm font-semibold uppercase tracking-wide text-dark hover:text-accent"
          >
            Gallery
          </Link>
          <Link
            href="/contact"
            className="font-display text-sm font-semibold uppercase tracking-wide text-dark hover:text-accent"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:block">
          <a
            href={COMPANY.phoneHref}
            className="flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-accent-dark min-h-[44px]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {COMPANY.phone}
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  )
}
