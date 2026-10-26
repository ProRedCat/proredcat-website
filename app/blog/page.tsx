import BlogPreview from "@/components/blog-preview";
import { posts } from "#site/content";

export default function BlogPage() {
  const postSummaries = posts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      shortDescription: post.shortDescription,
      heroImage: post.heroImage,
      tags: post.tags,
      metadata: post.metadata,
    }));

  return (
    <div className="w-full h-full">
      <BlogPreview posts={postSummaries} />
    </div>
  );
}
