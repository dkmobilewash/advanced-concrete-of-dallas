import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LocationDetail from '@/components/locations/LocationDetail'
import { getLocationBySlug } from '@/data/locations'

const SLUG = 'legacy-west'

export function generateMetadata(): Metadata {
  const location = getLocationBySlug(SLUG)
  if (!location) return {}
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/service-areas/${SLUG}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `/service-areas/${SLUG}`,
      images: ['/og-image.jpg'],
    },
  }
}

export default function LegacyWestPage() {
  const location = getLocationBySlug(SLUG)
  if (!location) notFound()
  return <LocationDetail location={location} />
}
