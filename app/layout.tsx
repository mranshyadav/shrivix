import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import '../styles.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shrivix.com'),
  title: {
    default: 'Shrivix — AI Agents & Intelligent Automation for Modern Businesses',
    template: '%s — Shrivix',
  },
  description: 'Shrivix builds AI agents, intelligent automation pipelines, and enterprise software that help businesses scale faster. From AI cold calling to SaaS development and custom solutions.',
  keywords: ['AI agents', 'intelligent automation', 'AI cold calling', 'SaaS development', 'custom software', 'business automation', 'Shrivix'],
  authors: [{ name: 'Shrivix' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: 'https://shrivix.com',
    siteName: 'Shrivix',
    title: 'Shrivix — AI Agents & Intelligent Automation',
    description: 'AI agents, intelligent automation, and enterprise software that help businesses scale faster.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shrivix — AI Agents & Intelligent Automation',
    description: 'AI agents, intelligent automation, and enterprise software that help businesses scale faster.',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://shrivix.com/#organization',
      name: 'Shrivix',
      url: 'https://shrivix.com',
      logo: 'https://shrivix.com/logo.png',
      description: 'Shrivix builds AI agents, intelligent automation, and enterprise software for modern businesses.',
      email: 'hello@shrivix.com',
      telephone: '+917669449009',
      address: { '@type': 'PostalAddress', addressCountry: 'IN' },
      sameAs: [
        'https://linkedin.com/company/shrivix',
        'https://x.com/shrivix',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://shrivix.com/#website',
      url: 'https://shrivix.com',
      name: 'Shrivix',
      publisher: { '@id': 'https://shrivix.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://shrivix.com/services',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://shrivix.com/#service',
      name: 'Shrivix',
      url: 'https://shrivix.com',
      provider: { '@id': 'https://shrivix.com/#organization' },
      serviceType: ['AI Agents', 'Workflow Automation', 'SaaS Development', 'Mobile App Development', 'Custom Software', 'IT Consulting'],
      areaServed: { '@type': 'Country', name: 'India' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shrivix Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Cold Calling Agent' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Email Outreach Agent' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SaaS Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Software Solutions' } },
        ],
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <ScrollReveal />
      </body>
    </html>
  )
}
