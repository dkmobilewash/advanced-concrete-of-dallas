import { Link } from 'react-router-dom'
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from './icons'
import { BUSINESS } from '@/lib/business'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/serviceAreas'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-acd py-16">
        <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <span className="font-heading text-lg font-bold uppercase text-white">{BUSINESS.shortName}</span>
            <br />
            <span className="font-serif text-sm italic text-gold-lt">of Dallas</span>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/60">{BUSINESS.tagline}</p>
            <p className="mt-3 font-body text-xs text-white/40">{BUSINESS.license}</p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://facebook.com"
                aria-label={`${BUSINESS.name} on Facebook`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                aria-label={`${BUSINESS.name} on Instagram`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-lt">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="font-body text-sm text-white/60 hover:text-gold-lt">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-lt">Service Areas</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceAreas.map((a) => (
                <li key={a.slug}>
                  <Link to={`/service-areas/${a.slug}`} className="font-body text-sm text-white/60 hover:text-gold-lt">
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-gold-lt">Contact</h3>
            <ul className="mt-4 space-y-3 font-body text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.addressLine}
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={BUSINESS.phoneHref} className="hover:text-gold-lt">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-gold-lt">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {BUSINESS.hours}
              </li>
            </ul>
            <Link to="/free-estimate-dallas" className="btn-primary mt-5 w-full">
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-acd flex flex-col items-center gap-2 py-6 text-center font-body text-xs text-white/40 md:flex-row md:justify-between md:text-left">
          <p>
            &copy; {year} {BUSINESS.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
