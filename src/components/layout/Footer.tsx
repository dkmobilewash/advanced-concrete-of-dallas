import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { services } from '@/data/services'
import { locations } from '@/data/locations'
import { COMPANY } from '@/lib/utils'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="font-display text-xl font-bold text-white">
              Plano Concrete <span className="text-accent">Solutions</span>
            </Link>
            <p className="mt-3 font-display text-sm uppercase tracking-wide text-accent">
              Plano&rsquo;s Trusted Concrete Contractors
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Licensed and insured, proudly serving Plano, Texas and surrounding neighborhoods with quality
              concrete work built to last.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://facebook.com"
                aria-label="Plano Concrete Solutions on Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Plano Concrete Solutions on Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://google.com"
                aria-label="Plano Concrete Solutions on Google"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-accent">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {locations.map((l) => (
                <li key={l.slug}>
                  <Link href={`/service-areas/${l.slug}`} className="text-sm text-gray-400 hover:text-accent">
                    {l.area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {COMPANY.address}
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={COMPANY.phoneHref} className="hover:text-accent">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-accent break-all">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {COMPANY.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center text-xs text-gray-500 md:flex-row md:justify-between md:px-6 md:text-left">
          <p>&copy; {year} Plano Concrete Solutions. All Rights Reserved.</p>
          <p>
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy Policy
            </Link>
            {' | '}
            <Link href="/terms-of-service" className="hover:text-accent">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
