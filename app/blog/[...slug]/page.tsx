import {posts} from "#site/content";
import {notFound} from "next/navigation";
import {MDXContent} from "@/components/mdx-component";

import "@/styles/mdx.css";
import path from "node:path";
import sharp from "sharp";
import {format} from "date-fns";
import {readingTime, wordCount} from "@/lib/utils";
import {getArticleBreadcrumbJsonLd, getArticleJsonLd, serializeJsonLd} from "@/lib/jsonld";
import Link from "next/link";
import Image from "next/image";
import { StaticTagChip } from "@/components/tag-chip";
import { siteConfig } from "@/config/site";

async function getPostFromParams(params: { slug: string[] }) {
    const slug = params?.slug?.join("/");
    return posts.find(post => post.slugAsParams === slug);
}

function getPostImageUrl(hero?: string) {
    return hero ? `${siteConfig.url}${hero}` : `${siteConfig.url}/blog/default-hero-image.JPG`;
}

async function getPostImageMetadata(hero: string | undefined, alt: string) {
    const src = hero || "/blog/default-hero-image.JPG";
    const url = getPostImageUrl(hero);
    const publicImagePath = path.join(process.cwd(), "public", src.replace(/^\/+/, ""));

    try {
        const { width, height } = await sharp(publicImagePath).metadata();

        return {
            url,
            width,
            height,
            alt,
        };
    } catch {
        return {
            url,
            alt,
        };
    }
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

    const ogImage = await getPostImageMetadata(post.hero, post.title);
    const canonicalUrl = `${siteConfig.url}/${post.slug}`;

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: "Reilly Oldham" }],
        alternates: {
            canonical: canonicalUrl,
            types: {
                "application/rss+xml": `${siteConfig.url}/feed.xml`,
            },
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: canonicalUrl,
            siteName: "Reilly Oldham",
            publishedTime: post.date,
            modifiedTime: post.updated ?? post.date,
            authors: ["Reilly Oldham"],
            images: [
                ogImage,
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [ogImage.url],
            creator: "@proredcat",
        },
    };
}

export default async function PostPage({params}: { params: Promise<{ slug: string[] }> }) {
    const resolvedParams = await params;
    const post = await getPostFromParams(resolvedParams);

    if (!post || !post.published) {
        notFound();
    }

    const canonicalUrl = `${siteConfig.url}/${post.slug}`;
    const ogImage = getPostImageUrl(post.hero);
    
    const articleJsonLd = getArticleJsonLd({
        title: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.updated ?? post.date,
        url: canonicalUrl,
        image: ogImage,
    });
    const breadcrumbJsonLd = getArticleBreadcrumbJsonLd(post.title, canonicalUrl);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: serializeJsonLd(articleJsonLd)}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: serializeJsonLd(breadcrumbJsonLd)}}
            />
            <article className="prose mx-auto w-full max-w-3xl px-4 py-10 md:py-16">
                <header className="not-prose mb-10">
                    <Link href="/blog" className="mb-8 inline-flex text-sm font-semibold underline-offset-4 hover:underline">
                        Back to writing
                    </Link>
                    <h1 className="text-4xl font-bold leading-tight text-primary-navy-dark md:text-5xl">{post.title}</h1>
                    <p className="mt-4 text-sm text-primary-navy-dark/70">
                        {format(new Date(post.date), 'MMMM d, yyyy')} | {wordCount(post.body)} words | {readingTime(post.body)} min
                    </p>
                    <p className="mt-6 text-lg leading-8 text-primary-navy-dark/85">{post.description}</p>
                    {post.tags?.length ? (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <StaticTagChip key={tag}>{tag}</StaticTagChip>
                            ))}
                        </div>
                    ) : null}
                </header>

                {post.hero ? (
                    <div className="not-prose mb-10 overflow-hidden rounded-lg border border-primary-navy-dark/10">
                        <Image
                            src={post.hero}
                            alt={post.title}
                            width={1200}
                            height={630}
                            sizes="(min-width: 768px) 768px, 100vw"
                            placeholder={post.blurDataURL ? "blur" : "empty"}
                            blurDataURL={post.blurDataURL}
                            className="h-auto w-full object-cover"
                            priority
                        />
                    </div>
                ) : null}

                <hr/>
                <MDXContent code={post.body}/>
            </article>
        </>);
}
