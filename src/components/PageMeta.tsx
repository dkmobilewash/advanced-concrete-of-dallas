import { useEffect } from 'react'
import { BUSINESS } from '@/lib/business'

interface PageMetaProps {
  title: string
  description: string
  canonicalPath: string
  ogImage?: string
  schema?: Record<string, unknown>
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function PageMeta({ title, description, canonicalPath, ogImage, schema }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = title.includes(BUSINESS.name) ? title : `${title} | ${BUSINESS.name}`
    document.title = fullTitle

    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    if (ogImage) upsertMeta('property', 'og:image', ogImage)

    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', `${BUSINESS.siteUrl}${canonicalPath}`)

    let schemaEl: HTMLScriptElement | null = null
    if (schema) {
      schemaEl = document.createElement('script')
      schemaEl.type = 'application/ld+json'
      schemaEl.text = JSON.stringify(schema)
      schemaEl.dataset.pageSchema = 'true'
      document.head.appendChild(schemaEl)
    }

    return () => {
      if (schemaEl) schemaEl.remove()
    }
  }, [title, description, canonicalPath, ogImage, schema])

  return null
}
