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

export interface ServiceArea {
  name: string
  slug: string
  tagline: string
  intro: string
  why: string
  topServices: string[]
  localNotes: string
  closingLine: string
}

export interface Testimonial {
  name: string
  area: string
  rating: number
  quote: string
}

export type BlogSection =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  tag: string
  readTime: string
  content: BlogSection[]
  /** Service slugs (see data/services.ts) this post is most relevant to. */
  relatedServiceSlugs: string[]
}

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}
