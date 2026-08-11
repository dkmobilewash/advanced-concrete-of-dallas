import { BUSINESS } from './business'
import type { FaqItem } from '@/types'

/**
 * Stable @id for the business entity. Every schema block that needs to refer
 * to "the business" (Service.provider, BlogPosting.publisher, etc.) should
 * reference this @id instead of repeating a stripped-down duplicate object,
 * so Google can tell they all describe the same entity.
 */
export const BUSINESS_ID = `${BUSINESS.siteUrl}/#business`

export const LOGO_URL = `${BUSINESS.siteUrl}/images/logo.png`

export const LOGO_IMAGE_OBJECT = {
  '@type': 'ImageObject',
  url: LOGO_URL,
  width: 500,
  height: 500,
}

export const OPENING_HOURS_SPECIFICATION = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '18:00',
  },
]

/**
 * The full, canonical business node. Render this once (on the homepage).
 * Everywhere else, use `businessRef()` to point back at it by @id.
 */
export function getBusinessSchema(areaServedNames: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: LOGO_URL,
    logo: LOGO_IMAGE_OBJECT,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      postalCode: BUSINESS.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: areaServedNames.map((name) => ({ '@type': 'Place', name })),
    priceRange: '$$',
    openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
  }
}

/** A lightweight reference to the business node defined on the homepage. */
export function businessRef() {
  return { '@id': BUSINESS_ID }
}

export function getFaqPageSchema(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BUSINESS.siteUrl}${item.path}`,
    })),
  }
}
