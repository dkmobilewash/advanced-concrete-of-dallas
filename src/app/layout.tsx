import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://planoconcretesolutions.com'),
  title: {
    default: 'Plano Concrete Solutions | Driveways, Patios & More in Plano, TX',
    template: '%s | Plano Concrete Solutions',
  },
  description:
    "Plano's trusted concrete contractors. We pour driveways, patios, pool decks, and more throughout Plano, TX. Call (214) 751-8014 for a free estimate.",
  openGraph: {
    siteName: 'Plano Concrete Solutions',
    locale: 'en_US',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
