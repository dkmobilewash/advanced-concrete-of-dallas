import { useParams, Navigate } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import { useFadeUp } from '@/hooks/useFadeUp'
import { getBlogPostBySlug } from '@/data/blogPosts'
import { BUSINESS } from '@/lib/business'
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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    description: post.excerpt,
    author: { '@type': 'Organization', name: BUSINESS.name },
  }

  return (
    <div ref={fadeRef}>
      <PageMeta title={post.title} description={post.excerpt} canonicalPath={`/blog/${post.slug}`} schema={schema} />

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
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
