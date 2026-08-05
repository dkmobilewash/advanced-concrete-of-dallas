import type { Metadata } from 'next'
import { COMPANY } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the privacy policy for Plano Concrete Solutions, covering how we collect and use your information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="prose-plano px-4 md:px-6">
        <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-mid">Last updated: January 2026</p>

        <h2>Information We Collect</h2>
        <p>
          Plano Concrete Solutions (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information
          you voluntarily provide when you submit our contact form or otherwise reach out to request an estimate.
          This includes your full name, phone number, email address, service area or neighborhood, the type of
          concrete service you&rsquo;re interested in, and any project details you choose to share with us. We do
          not collect sensitive personal information, and we do not require you to create an account to use our
          website.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          Information submitted through our contact form is used solely to respond to your inquiry, prepare a
          project estimate, and follow up regarding services you&rsquo;ve requested. We do not use your contact
          information for unrelated marketing purposes without your consent, and we do not sell, rent, or trade
          your personal information to third parties for their own marketing use.
        </p>

        <h2>Third-Party Sharing</h2>
        <p>
          We do not sell your personal information. We may share limited information with service providers who
          help us operate our business &mdash; for example, email or scheduling tools &mdash; but only to the
          extent necessary to respond to your request, and those providers are not permitted to use your
          information for their own purposes.
        </p>

        <h2>Cookies &amp; Analytics</h2>
        <p>
          Our website does not use cookies for advertising or tracking purposes beyond standard, privacy-respecting
          website analytics that help us understand general site traffic and improve our content. These analytics
          do not identify you personally.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain contact form submissions only as long as necessary to respond to your inquiry and maintain
          reasonable business records. If you would like your information removed from our records sooner, you can
          contact us using the information below.
        </p>

        <h2>Your Rights &amp; Data Removal Requests</h2>
        <p>
          You may request that we delete the personal information you&rsquo;ve submitted to us at any time. To make
          a request, email us at{' '}
          <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
            {COMPANY.email}
          </a>{' '}
          or call {COMPANY.phone}, and we will remove your information from our active records within a
          reasonable timeframe.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes in our practices. Any changes will
          be posted on this page with an updated effective date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this privacy policy, contact Plano Concrete Solutions at{' '}
          <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
            {COMPANY.email}
          </a>{' '}
          or {COMPANY.phone}.
        </p>
      </div>
    </section>
  )
}
