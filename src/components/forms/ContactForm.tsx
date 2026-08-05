'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { locations } from '@/data/locations'

const serviceAreaOptions = [...locations.map((l) => l.area), 'Other Plano Area']
const serviceOptions = ['Driveway', 'Patio', 'Pool Deck', 'Block Wall', 'Foundation/Slab', 'Commercial', 'Other']
const heardAboutOptions = ['Google', 'Facebook', 'Referral', 'Yard Sign', 'Other']

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.'),
  phone: z
    .string()
    .regex(/^[\d\s()+\-.]{10,20}$/, 'Please enter a valid phone number.'),
  email: z.string().email('Please enter a valid email address.'),
  serviceArea: z.string().min(1, 'Please select your service area.'),
  serviceNeeded: z.string().min(1, 'Please select a service.'),
  description: z.string().min(20, 'Please provide at least 20 characters describing your project.'),
  heardAbout: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  defaultServiceArea?: string
}

export default function ContactForm({ defaultServiceArea }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      serviceArea: defaultServiceArea ?? '',
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      reset({ ...data, name: '', phone: '', email: '', description: '', heardAbout: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full rounded-md border border-border bg-white px-4 py-3 text-base text-dark placeholder:text-mid/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 min-h-[44px]'
  const labelClasses = 'mb-1.5 block font-body text-sm font-medium text-dark'
  const errorClasses = 'mt-1.5 text-sm text-red-600'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-green-600" aria-hidden="true" />
        <p className="mt-4 font-display text-lg font-semibold text-dark">Request Received</p>
        <p className="mt-2 text-sm text-mid">We&rsquo;ll be in touch within 1 business day!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClasses}>
          Full Name
        </label>
        <input id="name" type="text" className={inputClasses} {...register('name')} />
        {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input id="phone" type="tel" className={inputClasses} {...register('phone')} />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email Address
          </label>
          <input id="email" type="email" className={inputClasses} {...register('email')} />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="serviceArea" className={labelClasses}>
            Service Area / Neighborhood
          </label>
          <select id="serviceArea" className={inputClasses} {...register('serviceArea')}>
            <option value="">Select your area&hellip;</option>
            {serviceAreaOptions.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          {errors.serviceArea && <p className={errorClasses}>{errors.serviceArea.message}</p>}
        </div>
        <div>
          <label htmlFor="serviceNeeded" className={labelClasses}>
            Service Needed
          </label>
          <select id="serviceNeeded" className={inputClasses} {...register('serviceNeeded')}>
            <option value="">Select a service&hellip;</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.serviceNeeded && <p className={errorClasses}>{errors.serviceNeeded.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClasses}>
          Project Description
        </label>
        <textarea
          id="description"
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your project—size, timeline, and any details that will help us prepare an estimate."
          {...register('description')}
        />
        {errors.description && <p className={errorClasses}>{errors.description.message}</p>}
      </div>

      <div>
        <label htmlFor="heardAbout" className={labelClasses}>
          How did you hear about us? <span className="text-mid font-normal">(optional)</span>
        </label>
        <select id="heardAbout" className={inputClasses} {...register('heardAbout')}>
          <option value="">Select an option&hellip;</option>
          {heardAboutOptions.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 rounded-md bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          Something went wrong submitting your request. Please try again or call us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-accent px-8 py-4 font-display text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dark disabled:opacity-60 min-h-[44px]"
      >
        {isSubmitting ? 'Sending…' : 'Send My Request'}
      </button>
    </form>
  )
}
