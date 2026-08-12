import { Link, useParams, Navigate } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import { useFadeUp } from '@/hooks/useFadeUp'
import { getBlogPostBySlug } from '@/data/blogPosts'
import { getServiceBySlug } from '@/data/services'
import { BUSINESS } from '@/lib/business'
import { LOGO_IMAGE_OBJECT, LOGO_URL, businessRef, getBreadcrumbSchema } from '@/lib/schema'
import type { BlogSection } from '@/types'

function Section({ section }: { section: BlogSection }) {
  switch (section.type) {
    case 'h2':
      return <h2 className="mt-10 mb-4 text-navy">{section.text}</h2>
    case 'h3':
      return <h3 className="mt-8 mb-3 text-navy">{section.text}</h3>
    case 'p':
      return <p className="mb-4 font-body text-base leading-relaxed text-mid">{section.text}</p>
    case 'ul':
      return (
        <ul className="mb-4 ml-6 list-disc space-y-2 font-body text-base leading-relaxed text-mid">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="mb-4 ml-6 list-decimal space-y-2 font-body text-base leading-relaxed text-mid">
          {section.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )
    case 'callout':
      return (
        <div className="my-6 border-l-4 border-silver bg-cream p-5 font-body text-base leading-relaxed text-charcoal">
          {section.text}
        </div>
      )
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const fadeRef = useFadeUp<HTMLDivElement>()
  const post = slug ? getBlogPostBySlug(slug) : undefined

  if (!post) return <Navigate to="/blog" replace />

  const relatedServices = post.relatedServiceSlugs.map((slug) => getServiceBySlug(slug)).filter((s) => s !== undefined)

  const canonicalUrl = `${BUSINESS.siteUrl}/blog/${post.slug}`

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: LOGO_URL,
    datePublished: post.date,
    dateModified: post.date,
    url: canonicalUrl,
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
    author: { '@type': 'Organization', name: BUSINESS.name, ...businessRef() },
    publisher: { '@type': 'Organization', name: BUSINESS.name, logo: LOGO_IMAGE_OBJECT, ...businessRef() },
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ])

  return (
    <div ref={fadeRef}>
      <PageMeta
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        schema={[schema, breadcrumbSchema]}
      />

      <PageHero
        title={post.title}
        subtitle={`${post.tag} · ${post.readTime} · ${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`}
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title }]}
      />

      <section className="section bg-white">
        <div className="container-acd max-w-3xl fade-up">
          {post.content.map((section, i) => (
            <Section key={i} section={section} />
          ))}

          {relatedServices.length > 0 && (
            <div className="mt-10 border-t border-rule pt-8">
              <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-navy">
                Related Services
              </p>
              <div className="flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    to={`/${service.slug}`}
                    className="border border-rule bg-white px-4 py-2.5 font-heading text-sm font-semibold text-navy transition-colors hover:border-silver hover:text-silver"
                  >
                    {service.name} in Dallas
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
