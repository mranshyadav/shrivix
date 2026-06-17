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
      description: 'Shrivix builds AI agents, intelligent automation, and enterprise software for modern businesses.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://shrivix.com/#website',
      url: 'https://shrivix.com',
      name: 'Shrivix',
      publisher: { '@id': 'https://shrivix.com/#organization' },
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
