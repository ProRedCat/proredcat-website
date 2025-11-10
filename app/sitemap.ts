import { MetadataRoute } from 'next'
import { posts } from '#site/content'

export const runtime = 'nodejs'

const baseUrl = 'https://www.proredcat.xyz'
const withBase = (path: string) =>
  new URL(path.startsWith('/') ? path : `/${path}`, baseUrl).toString()

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = posts
    .filter((post) => post.published)
    .map((post) => {
      const d = new Date(post.date)
      return {
        url: withBase(post.slug),
        lastModified: isNaN(d.getTime()) ? undefined : d,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }
    })

  const staticPages: MetadataRoute.Sitemap = [
    { url: withBase('/'),          lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: withBase('/blog'),      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: withBase('/projects'),  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: withBase('/about'),     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  return [...staticPages, ...blogPosts]
}
