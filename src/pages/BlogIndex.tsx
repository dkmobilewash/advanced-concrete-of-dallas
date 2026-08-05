import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import { useFadeUp } from '@/hooks/useFadeUp'
import { blogPosts } from '@/data/blogPosts'

export default function BlogIndex() {
  const fadeRef = useFadeUp<HTMLDivElement>()

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Concrete Tips & Guides | Blog"
        description="Guides on concrete costs, materials, maintenance, and comparisons for Dallas, TX homeowners from Advanced Concrete of Dallas."
        canonicalPath="/blog"
      />

      <PageHero
        title="Concrete Tips & Guides"
        subtitle="Straightforward guidance on materials, costs, and maintenance for Dallas homeowners."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <section className="section bg-white">
        <div className="container-acd grid grid-cols-1 gap-8 fade-up sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block border-t-4 border-gold bg-white p-6 shadow-sm transition-colors hover:bg-cream">
              <span className="font-heading text-xs font-semibold uppercase tracking-wide text-gold">
                {post.tag} &middot; {post.readTime}
              </span>
              <h3 className="mt-3 text-navy">{post.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-mid">{post.excerpt}</p>
              <span className="mt-4 inline-block font-heading text-sm font-semibold uppercase tracking-wide text-gold group-hover:text-gold-lt">
                Read More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
