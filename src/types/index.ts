export interface ProcessStep {
  title: string
  description: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Service {
  slug: string
  name: string
  shortDescription: string
  metaTitle: string
  metaDescription: string
  heroImage: string
  heroSubtitle: string
  intro: string[]
  benefits: string[]
  processSteps: ProcessStep[]
  faq: FaqItem[]
  relatedServices: string[]
}

export interface Testimonial {
  name: string
  area: string
  quote: string
  rating: number
}

export interface Location {
  area: string
  slug: string
  metaTitle: string
  metaDescription: string
  heroSubtitle: string
  intro: string[]
  landmarks: string[]
  nearbyAreas: string[]
  testimonial: Testimonial
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: GalleryCategory
}

export type GalleryCategory =
  | 'Driveways'
  | 'Patios'
  | 'Pool Decks'
  | 'Block Walls'
  | 'Foundations'
  | 'Commercial'
