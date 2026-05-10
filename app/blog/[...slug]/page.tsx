import {posts} from "#site/content";
import {notFound} from "next/navigation";
import {MDXContent} from "@/components/mdx-component";

import "@/styles/mdx.css";
import {format} from "date-fns";
import {readingTime, wordCount} from "@/lib/utils";
import {getArticleJsonLd} from "@/lib/jsonld";

async function getPostFromParams(params: { slug: string[] }) {
    const slug = params?.slug?.join("/");
    return posts.find(post => post.slugAsParams === slug);
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
    return posts
        .filter((post) => post.published)
        .map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
    const resolvedParams = await params;
    const post = await getPostFromParams(resolvedParams);

    if (!post || !post.published) {
        return {};
    }

    const ogImage = post.hero ? `https://www.proredcat.xyz${post.hero}` : "https://www.proredcat.xyz/blog/default-hero-image.JPG";
    const canonicalUrl = `https://www.proredcat.xyz/${post.slug}`;

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: "Reilly Oldham" }],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: canonicalUrl,
            siteName: "Reilly Oldham",
            publishedTime: post.date,
            authors: ["Reilly Oldham"],
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [ogImage],
            creator: "@reillyoldham",
        },
    };
}

export default async function PostPage({params}: { params: Promise<{ slug: string[] }> }) {
    const resolvedParams = await params;
    const post = await getPostFromParams(resolvedParams);

    // TODO: Create a custom 404 page as the default looks bad
    if (!post || !post.published) {
        notFound();
    }

    const canonicalUrl = `https://www.proredcat.xyz/${post.slug}`;
    const ogImage = post.hero ? `https://www.proredcat.xyz${post.hero}` : "https://www.proredcat.xyz/blog/default-hero-image.JPG";
    
    const articleJsonLd = getArticleJsonLd({
        title: post.title,
        description: post.description,
        datePublished: post.date,
        url: canonicalUrl,
        image: ogImage,
    });

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(articleJsonLd)}}
            />
            <article className="container pt-[15vh] prose w-full mx-auto">
                <h1 className="mb-2">{post.title}</h1>
                <div className="mb-4">
                    <p className="text-sm opacity-70">
                        {format(new Date(post.date), 'MMMM d, yyyy')} | {wordCount(post.body)} words
                        | {readingTime(post.body)} min
                    </p>
                </div>
                <p>{post.description}</p>
                <hr/>
                <MDXContent code={post.body}/>
            </article>
        </>);
}