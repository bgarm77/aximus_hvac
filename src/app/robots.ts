import type { MetadataRoute } from 'next'

// TODO: Change to allow after launch with real photos,
// blog articles and reviews ready.
// Then resubmit sitemap to Google Search Console.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
  }
}
