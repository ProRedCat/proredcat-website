import { MetadataRoute } from 'next';
import { posts } from '#site/content';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const blogPosts = posts
    .filter(post => post.published)
    .map(post => ({
      url: `${baseUrl}/${post.slug}`,
      lastModified: new Date(post.updated ?? post.date),
    }));

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/blog`,
    },
    {
      url: `${baseUrl}/projects`,
    },
    {
      url: `${baseUrl}/about`,
    },
    ...blogPosts,
  ];
}
