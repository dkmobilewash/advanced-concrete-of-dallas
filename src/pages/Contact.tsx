import { useState, type FormEvent } from 'react'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import { Phone, Mail, Clock, MapPin, ShieldCheck, ClipboardCheck, CheckCircle, AlertCircle } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { BUSINESS } from '@/lib/business'
import { serviceAreas } from '@/data/serviceAreas'
import { getBusinessSchema, getBreadcrumbSchema } from '@/lib/schema'

const serviceOptions = ['Driveway', 'Patio', 'Pool Deck', 'Retaining Wall', 'Foundation/Slab', 'Commercial', 'Other']

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: ClipboardCheck, label: 'Free Estimates' },
  { icon: CheckCircle, label: 'Custom Designs' },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function Contact() {
  const fadeRef = useFadeUp<HTMLDivElement>()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', description: '' })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const { supabase } = await import('@/lib/supabase')
      const { error } = await supabase.from('contact_submissions').insert({
        name: form.name,
        phone: form.phone,
        email: form.email,
        service: form.service,
        description: form.description,
      })
      if (error) throw error
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', description: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full border border-rule bg-white px-4 py-3 font-body text-base text-charcoal placeholder:text-mid/60 focus:border-silver focus:outline-none min-h-[44px]'
  const labelClasses = 'mb-1.5 block font-heading text-sm font-semibold uppercase tracking-wide text-navy'

  const schema = getBusinessSchema(['Dallas', ...serviceAreas.map((a) => a.name)])
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Free Estimate', path: '/free-estimate-dallas' },
  ])

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Free Estimate | Contact Us"
        description="Contact Advanced Concrete of Dallas for a free concrete estimate in Dallas, TX. Call (214) 466-6247 or fill out our online form."
        canonicalPath="/free-estimate-dallas"
        schema={[schema, breadcrumbSchema]}
      />

      <PageHero
        title="Get Your Free Concrete Estimate"
        subtitle="Tell us about your project and we'll respond within 1 business day with a no-obligation quote."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Free Estimate' }]}
      />

      <section className="section bg-white">
        <div className="container-acd grid grid-cols-1 gap-12 lg:grid-cols-[3fr_2fr]">
          <div className="fade-up">
            <h2 className="text-navy">Request a Free Estimate</h2>

            {status === 'success' ? (
              <div className="mt-6 flex flex-col items-center border border-rule bg-cream p-8 text-center">
                <CheckCircle className="h-10 w-10 text-silver" />
                <p className="mt-4 font-heading text-lg font-semibold text-navy">Request Received</p>
                <p className="mt-2 font-body text-sm text-mid">We&rsquo;ll be in touch within 1 business day!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className={inputClasses}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className={inputClasses}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className={inputClasses}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClasses}>
                    Service Needed
                  </label>
                  <select
                    id="service"
                    required
                    className={inputClasses}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select a service&hellip;</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className={labelClasses}>
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    rows={5}
                    required
                    className={inputClasses}
                    placeholder="Tell us about your project — size, timeline, and any details that will help us prepare an estimate."
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-start gap-2 border border-red-200 bg-red-50 p-4 font-body text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>
                      Something went wrong submitting your request. Please try again, or call us directly at{' '}
                      <a href={BUSINESS.phoneHref} className="font-semibold underline">
                        {BUSINESS.phone}
                      </a>
                      .
                    </span>
                  </div>
                )}

                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                  {status === 'submitting' ? 'Sending…' : 'Send My Request'}
                </button>
              </form>
            )}
          </div>

          <div className="fade-up space-y-6">
            <a href={BUSINESS.phoneHref} className="flex items-center gap-4 bg-navy p-6 text-white transition-colors hover:bg-navy-dark">
              <Phone className="h-8 w-8 shrink-0 text-silver" />
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">Call us</p>
                <p className="font-heading text-2xl font-semibold">{BUSINESS.phone}</p>
              </div>
            </a>

            <div className="border border-rule bg-cream p-6">
              <ul className="space-y-4 font-body text-sm text-mid">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-silver" />
                  {BUSINESS.addressLine}
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-silver" />
                  <a href={`mailto:${BUSINESS.email}`} className="break-all hover:text-silver">
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-silver" />
                  {BUSINESS.hours}
                </li>
              </ul>
            </div>

            <div className="border border-rule p-6">
              <h3 className="text-navy">Why Homeowners Trust Us</h3>
              <ul className="mt-4 space-y-3">
                {trustBadges.map((b) => (
                  <li key={b.label} className="flex items-center gap-3">
                    <b.icon className="h-5 w-5 text-silver" />
                    <span className="font-heading text-sm font-semibold text-navy">{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
