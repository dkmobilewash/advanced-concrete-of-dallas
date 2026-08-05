import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetail from '@/components/services/ServiceDetail'
import { getServiceBySlug } from '@/data/services'

const SLUG = 'pool-decks'

export function generateMetadata(): Metadata {
  const service = getServiceBySlug(SLUG)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${SLUG}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${SLUG}`,
      images: [service.heroImage],
    },
  }
}

export default function PoolDecksPage() {
  const service = getServiceBySlug(SLUG)
  if (!service) notFound()
  return <ServiceDetail service={service} />
}
