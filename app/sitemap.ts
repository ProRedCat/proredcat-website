import { MetadataRoute } from 'next';
import { posts } from '#site/content';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const blogPosts = posts
    .filter(post => post.published)
    .map(post => ({
      url: `${baseUrl}/${post.slug}`,
      lastModified: new Date(post.date),
    }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
}
