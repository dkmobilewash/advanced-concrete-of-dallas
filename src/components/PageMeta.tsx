import { BUSINESS } from '@/lib/business'

interface PageMetaProps {
  title: string
  description: string
  canonicalPath: string
  ogImage?: string
  schema?: Record<string, unknown> | Record<string, unknown>[]
  noindex?: boolean
}

/**
 * Renders <title>/<meta>/<link> as plain JSX rather than imperative DOM
 * manipulation. React 19 hoists title/meta/link elements into <head>
 * automatically (deduping as needed) on both the client and during server
 * rendering, which is what lets the build-time prerender step (see
 * scripts/prerender.tsx) capture real head content in the static HTML
 * instead of only the client-side DOM.
 */
export default function PageMeta({ title, description, canonicalPath, ogImage, schema, noindex }: PageMetaProps) {
  const fullTitle = title.includes(BUSINESS.name) ? title : `${title} | ${BUSINESS.name}`
  const canonicalUrl = `${BUSINESS.siteUrl}${canonicalPath}`
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : []

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  )
}
