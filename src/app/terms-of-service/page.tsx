import type { Metadata } from 'next'
import { COMPANY } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Read the terms of service governing your use of the Plano Concrete Solutions website.',
  alternates: { canonical: '/terms-of-service' },
}

export default function TermsOfServicePage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="prose-plano px-4 md:px-6">
        <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-mid">Last updated: January 2026</p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using the Plano Concrete Solutions website, you agree to be bound by these Terms of
          Service. If you do not agree with these terms, please do not use this website.
        </p>

        <h2>Use of This Website</h2>
        <p>
          This website is provided for informational purposes to help you learn about our concrete services and
          request an estimate. You agree to use the site only for lawful purposes and not to submit false,
          misleading, or fraudulent information through our contact form.
        </p>

        <h2>No Warranties on Website Content</h2>
        <p>
          The content on this website, including service descriptions, pricing indications, and project timelines,
          is provided for general informational purposes only and does not constitute a binding quote or contract.
          Actual project scope, pricing, and timelines are determined through a formal estimate and written
          agreement. We make no warranties, express or implied, regarding the accuracy or completeness of the
          information on this site.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Plano Concrete Solutions shall not be liable for any indirect,
          incidental, or consequential damages arising from your use of this website or reliance on its content.
          Nothing in these terms limits liability related to services performed under a signed project agreement,
          which is governed separately by that agreement&rsquo;s terms.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, images, and logos, is the property of Plano Concrete
          Solutions unless otherwise noted, and may not be reproduced without our written permission.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms of Service are governed by the laws of the State of Texas, without regard to its conflict of
          law principles. Any disputes arising from these terms or your use of this website will be subject to the
          jurisdiction of the courts located in Collin County, Texas.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may revise these Terms of Service at any time. Continued use of the website after changes are posted
          constitutes acceptance of the updated terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          Questions about these terms can be directed to{' '}
          <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
            {COMPANY.email}
          </a>{' '}
          or {COMPANY.phone}.
        </p>
      </div>
    </section>
  )
}
