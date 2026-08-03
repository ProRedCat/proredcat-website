import BlogPreview from "@/components/blog-preview";
import {posts} from "@/.velite";
import {readingTime, wordCount} from "@/lib/utils";

export default function BlogPage() {
    const postSummaries = posts
        .filter((post) => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((post) => ({
            slug: post.slug,
            title: post.title,
            date: post.date,
            shortDescription: post.shortDescription,
            hero: post.hero,
            blurDataURL: post.blurDataURL,
            tags: post.tags,
            words: wordCount(post.body),
            readingMinutes: readingTime(post.body),
        }));

    return (
        <div className="w-full h-full">
            <BlogPreview posts={postSummaries}/>
        </div>
    );
}
