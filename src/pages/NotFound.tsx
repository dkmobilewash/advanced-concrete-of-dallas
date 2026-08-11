import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import CtaSection from '@/components/CtaSection'
import { services } from '@/data/services'
import { useFadeUp } from '@/hooks/useFadeUp'

export default function NotFound() {
  const fadeRef = useFadeUp<HTMLDivElement>()

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our concrete services or head back to the homepage."
        canonicalPath="/404"
        noindex
      />

      <PageHero title="Page Not Found" subtitle="The page you're looking for doesn't exist or may have moved." />

      <section className="section bg-white">
        <div className="container-acd max-w-2xl text-center fade-up">
          <p className="font-body text-base leading-relaxed text-mid">
            Double-check the address, or use one of the links below to find what you need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary">
              Back to Homepage
            </Link>
            <Link to="/concrete-services" className="btn-outline-navy">
              View Our Services
            </Link>
          </div>

          <div className="mt-12 border-t border-rule pt-8">
            <p className="mb-4 font-heading text-sm font-semibold uppercase tracking-wide text-navy">
              Popular Services
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="border border-rule bg-white px-4 py-2.5 font-heading text-sm font-semibold text-navy transition-colors hover:border-silver hover:text-silver"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
