import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://shrivix.com/sitemap.xml',
    host: 'https://shrivix.com',
  }
}
