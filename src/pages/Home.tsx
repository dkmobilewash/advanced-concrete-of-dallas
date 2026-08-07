import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import PageHero from '@/components/PageHero'
import SectionEyebrow from '@/components/SectionEyebrow'
import ServiceCard from '@/components/ServiceCard'
import ProcessSteps from '@/components/ProcessSteps'
import FaqAccordion from '@/components/FaqAccordion'
import CtaSection from '@/components/CtaSection'
import { ShieldCheck, ClipboardCheck, MapPin, Star, CheckCircle } from '@/components/icons'
import { useFadeUp } from '@/hooks/useFadeUp'
import { BUSINESS } from '@/lib/business'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/serviceAreas'
import { testimonials } from '@/data/testimonials'
import { getBlogPostBySlug } from '@/data/blogPosts'

const trustPoints = [
  { icon: ShieldCheck, label: 'Licensed & Insured' },
  { icon: ClipboardCheck, label: 'Free Estimates' },
  { icon: MapPin, label: 'Locally Owned in Dallas' },
  { icon: Star, label: '5-Star Rated' },
]

const whyChooseUs = [
  {
    icon: ShieldCheck,
    heading: 'Engineered for North Texas Soil',
    body: 'Every driveway, patio, and slab we pour accounts for how expansive clay soil moves through a Dallas wet-dry cycle. We size reinforcement and joint spacing to the site, not a generic template, so the concrete we leave behind isn’t the concrete you’re calling someone else about in three years.',
  },
  {
    icon: ClipboardCheck,
    heading: 'Straightforward, Written Estimates',
    body: 'You’ll get a detailed quote before any work starts — scope, thickness, finish, and price in writing. No vague verbal numbers that turn into change orders once the crew is already on site.',
  },
  {
    icon: MapPin,
    heading: 'Crews Who Know Dallas Neighborhoods',
    body: 'From HOA finish requirements in Lake Highlands to tight lot access in Bishop Arts, we’ve worked the access constraints, permitting quirks, and soil conditions specific to the neighborhoods we serve.',
  },
  {
    icon: CheckCircle,
    heading: 'We Show Up When We Say We Will',
    body: 'Scheduling slippage is the single biggest complaint homeowners have about concrete contractors. We build realistic timelines up front and communicate immediately if weather or site conditions require a change.',
  },
]

const chooseContractorTips = [
  {
    title: 'Confirm Licensing & Insurance',
    description: 'Ask for proof, not just a claim. A contractor without current insurance makes any jobsite accident your liability, not theirs.',
  },
  {
    title: 'Ask How They Handle Soil Movement',
    description: 'A contractor who can’t explain how they account for North Texas clay soil in their reinforcement plan is guessing, not engineering.',
  },
  {
    title: 'Get the Estimate in Writing',
    description: 'Thickness, reinforcement type, finish, and total cost should all be spelled out before a single form is set.',
  },
  {
    title: 'Ask to See Recent Local Work',
    description: 'A contractor with real experience in your neighborhood can point to a project down the street, not just photos from somewhere else.',
  },
  {
    title: 'Understand the Cure Timeline',
    description: 'Ask exactly when you can walk on it, drive on it, and what the sealing schedule looks like. Vague answers here are a red flag.',
  },
]

const homeFaq = [
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, every estimate is free and comes with no obligation. We visit your property, assess the site, and provide a detailed written quote.',
  },
  {
    question: 'How much does a concrete driveway cost in Dallas?',
    answer: 'Cost depends on square footage, slab thickness, reinforcement, and finish selection — broom, exposed aggregate, and stamped concrete all price differently. We break down exactly what drives the number in our driveway cost guide, and provide an exact figure during your free estimate.',
  },
  {
    question: 'How long does concrete take to cure in Texas heat?',
    answer: 'Surface set happens fast in Dallas heat, but full design strength takes about 28 days. Foot traffic is generally safe after 24–48 hours, and we recommend waiting at least 7 days before driving on a new driveway.',
  },
  {
    question: 'Post-tension or conventional slab — which do I need?',
    answer: 'Post-tension slabs use tensioned steel cables to resist cracking from clay soil movement and are now standard for most new Dallas homes. Conventional rebar-reinforced slabs are often the more economical choice for garages and smaller additions. We’ll recommend the right fit based on your soil and structure.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. Advanced Concrete of Dallas is fully licensed and insured for residential and commercial concrete work throughout the Dallas area.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Dallas and the surrounding neighborhoods, including Uptown, Highland Park, University Park, Preston Hollow, Lakewood, Oak Lawn, Lake Highlands, Oak Cliff, and the Bishop Arts District.',
  },
]

const relatedReadingSlugs = [
  'how-much-does-a-concrete-driveway-cost-in-dallas',
  'north-texas-clay-soil-and-foundation-cracks',
  'post-tension-vs-conventional-slab-foundations',
]

export default function Home() {
  const fadeRef = useFadeUp<HTMLDivElement>()
  const relatedReading = relatedReadingSlugs.map((slug) => getBlogPostBySlug(slug)).filter((p) => p !== undefined)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dallas',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    areaServed: ['Dallas', ...serviceAreas.map((a) => a.name)],
    priceRange: '$$',
  }

  return (
    <div ref={fadeRef}>
      <PageMeta
        title="Concrete Contractor Dallas TX"
        description="Advanced Concrete of Dallas pours driveways, patios, pool decks, and commercial concrete throughout Dallas, TX. Licensed, insured, free estimates."
        canonicalPath="/"
        schema={schema}
      />

      <PageHero
        title="Dallas's Concrete Experts"
        subtitle="From driveways to commercial slabs — quality work, fair prices, and a finish built to last the Texas heat."
        size="large"
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/free-estimate-dallas" className="btn-primary">
            Get a Free Estimate
          </Link>
          <Link to="/gallery" className="btn-secondary">
            See Our Work
          </Link>
        </div>
      </PageHero>

      <section className="border-y border-rule bg-white py-8">
        <div className="container-acd flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {trustPoints.map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-mid">
              <t.icon className="h-5 w-5 text-silver" />
              <span className="font-heading text-sm font-semibold uppercase tracking-wide">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Who We Are" heading="Dallas Concrete Work Built Around Local Soil, Not Guesswork" align="left" />
            <p className="mb-4 font-body text-base leading-relaxed text-mid">
              Most concrete failures in North Texas trace back to the same root cause: a slab that wasn’t
              engineered for how expansive clay soil moves through the region’s wet-dry cycles. {BUSINESS.name}{' '}
              exists to fix that starting point, not just pour concrete and hope. We size reinforcement,
              control joints, and drainage to the site conditions in front of us, whether that’s a{' '}
              <Link to="/driveways/lakewood" className="text-silver hover:underline">
                driveway replacement in Lakewood
              </Link>{' '}
              or a{' '}
              <Link to="/commercial-concrete/uptown-dallas" className="text-silver hover:underline">
                commercial pour in Uptown Dallas
              </Link>
              .
            </p>
            <p className="font-body text-base leading-relaxed text-mid">
              That approach shows up in the details: proper base compaction before a single form goes down,
              rebar or post-tension reinforcement sized to the structure, and finish work that accounts for a
              Texas summer, not a mild-climate showroom sample. It’s the same standard whether the job is a
              single-car driveway or a multi-phase commercial lot.
            </p>
          </div>

          <div className="fade-up flex flex-col gap-4">
            <div className="border border-rule bg-cream p-6 text-center">
              <p className="font-heading text-4xl font-bold text-silver">
                {new Date().getFullYear() - BUSINESS.founded}+
              </p>
              <p className="mt-1 font-heading text-sm uppercase tracking-wide text-navy">Years Serving Dallas</p>
            </div>
            <div className="border border-rule bg-cream p-6 text-center">
              <p className="font-heading text-4xl font-bold text-silver">{serviceAreas.length}</p>
              <p className="mt-1 font-heading text-sm uppercase tracking-wide text-navy">Dallas-Area Locations Served</p>
            </div>
            <div className="border border-rule bg-cream p-6 text-center">
              <p className="font-heading text-4xl font-bold text-silver">{services.length}</p>
              <p className="mt-1 font-heading text-sm uppercase tracking-wide text-navy">Concrete Services Offered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow
              eyebrow="What We Do"
              heading="Our Concrete Services"
              subtitle="From residential driveways to large commercial pours, we handle every stage of concrete work throughout Dallas."
            />
          </div>
          <div className="grid grid-cols-1 gap-6 fade-up sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} title={s.name} description={s.shortDescription} href={`/${s.slug}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Why Us" heading="Why Dallas Homeowners & Businesses Choose Us" />
          </div>
          <div className="grid grid-cols-1 gap-8 fade-up sm:grid-cols-2">
            {whyChooseUs.map((w) => (
              <div key={w.heading} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-silver/10">
                  <w.icon className="h-6 w-6 text-silver" />
                </div>
                <div>
                  <h3 className="text-navy">{w.heading}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-mid">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Our Process" heading="How We Work" align="center" />
          </div>
          <div className="fade-up">
            <ProcessSteps steps={[
              { title: 'Free Estimate', description: 'We walk your site, talk through your project, and provide a clear, no-obligation quote.' },
              { title: 'Design & Schedule', description: 'We finalize finish, layout, and scope, then lock in a start date that works for you.' },
              { title: 'Prep & Pour', description: 'Our crew handles excavation, forms, reinforcement, and the pour itself, start to finish.' },
              { title: 'Finish & Walkthrough', description: 'We finish, seal, and walk the completed project with you before we call it done.' },
            ]} />
          </div>
        </div>
      </section>

      <section className="section bg-navy">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Reviews" heading="What Dallas Customers Say" variant="dark" />
          </div>
          <div className="grid grid-cols-1 gap-6 fade-up sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-white/15 bg-white/5 p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-silver-lt" />
                  ))}
                </div>
                <p className="mt-4 font-body text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 font-heading text-sm font-semibold text-white">
                  {t.name} <span className="font-body font-normal text-white/50">&mdash; {t.area}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow
              eyebrow="Where We Work"
              heading="Proudly Serving Dallas & Surrounding Neighborhoods"
              subtitle="From the urban core along the Katy Trail to established neighborhoods around White Rock Lake, we bring the same reinforcement standards and finish quality to every corner of the Dallas-Fort Worth Metroplex we serve."
            />
          </div>
          <div className="fade-up flex flex-wrap justify-center gap-3">
            {serviceAreas.map((a) => (
              <Link
                key={a.slug}
                to={`/service-areas/${a.slug}`}
                className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-heading text-sm font-medium text-navy transition-colors hover:border-silver hover:bg-silver hover:text-white"
              >
                <MapPin className="h-4 w-4" />
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-section-alt">
        <div className="container-acd">
          <div className="fade-up">
            <SectionEyebrow eyebrow="Buyer's Guide" heading="How to Choose a Concrete Contractor in Dallas" />
          </div>
          <div className="fade-up">
            <ProcessSteps steps={chooseContractorTips} />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-acd max-w-3xl">
          <div className="fade-up">
            <SectionEyebrow eyebrow="FAQ" heading="Frequently Asked Questions" />
          </div>
          <div className="fade-up">
            <FaqAccordion items={homeFaq} />
          </div>
          {relatedReading.length > 0 && (
            <div className="fade-up mt-10 border-t border-rule pt-8">
              <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-navy">
                Learn More From Our Blog
              </p>
              <ul className="space-y-2">
                {relatedReading.map((post) => (
                  <li key={post.slug}>
                    <Link to={`/blog/${post.slug}`} className="text-sm text-silver hover:underline">
                      {post.title} &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
