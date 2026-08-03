'use client';

import Link from 'next/link';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';
import { FilterTagButton } from "@/components/tag-chip";
import { Icons } from "@/components/icons";

const DEFAULT_HERO_IMAGE = "/blog/default-hero-image.JPG";

type BlogPostSummary = {
    slug: string;
    title: string;
    date: string;
    shortDescription: string;
    hero?: string;
    blurDataURL: string;
    tags?: string[];
    words: number;
    readingMinutes: number;
};

export default function BlogPreview({ posts }: { posts: BlogPostSummary[] }) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const visiblePosts = selectedTags.length > 0
        ? posts.filter((post) => post.tags?.some((tag) => selectedTags.includes(tag)))
        : posts;

    const toggleTag = (tag: string) => {
        setSelectedTags((currentTags) =>
            currentTags.includes(tag)
                ? currentTags.filter((currentTag) => currentTag !== tag)
                : [...currentTags, tag]
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 max-w-3xl">
                <p className="mb-2 text-sm font-semibold text-red-secondary">Technical writing</p>
                <h1 className="text-3xl font-bold md:text-4xl">Writing</h1>
                <p className="mt-3 text-base leading-7 text-primary-navy-dark/80">
                    Technical deep dives and build notes from backend systems, developer tooling, product work, and the occasional rabbit hole.
                </p>
            </div>

            {selectedTags.length > 0 ? (
                <div className="mb-6 flex flex-wrap items-center gap-3 border-y border-primary-navy-dark/10 py-3">
                    <p className="text-sm font-semibold">Filtered by</p>
                    <div className="flex flex-wrap gap-2">
                        {selectedTags.map((tag) => (
                            <FilterTagButton key={tag} selected onClick={() => toggleTag(tag)}>
                                {tag}
                            </FilterTagButton>
                        ))}
                    </div>
                </div>
            ) : null}

            {visiblePosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {visiblePosts.map((post) => (
                        <article
                            key={post.slug}
                            className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary-navy-dark/10 bg-primary-cream shadow-[0_12px_28px_rgba(0,26,77,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-primary-navy-dark/25 hover:shadow-[0_16px_34px_rgba(0,26,77,0.12)]"
                        >
                            <Link href={`/${post.slug}`} className="relative block h-52 overflow-hidden border-b border-primary-navy-dark/10">
                                    <Image
                                        src={post.hero || DEFAULT_HERO_IMAGE}
                                        alt={post.title}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        placeholder={post?.blurDataURL ? "blur" : "empty"}
                                        blurDataURL={post?.blurDataURL}
                                        priority={post === visiblePosts[0]}
                                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                                    />
                            </Link>
                            <div className="flex flex-1 flex-col p-5">
                                <div>
                                    <h2 className="text-xl font-semibold leading-snug">
                                        <Link href={`/${post.slug}`} className="underline-offset-4 hover:underline">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="mt-2 text-sm text-primary-navy-dark/70">
                                            {format(new Date(post.date), 'MMMM d, yyyy')} | {post.words} words | {post.readingMinutes} min
                                    </p>
                                </div>

                                <p className="mt-4 flex-1 text-sm leading-6 text-primary-navy-dark/90">{post.shortDescription}</p>
                                <div className="mt-5 flex flex-wrap gap-2">
                                        {post.tags?.map((tag) => (
                                            <FilterTagButton
                                                key={tag}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleTag(tag);
                                                }}
                                                selected={selectedTags.includes(tag)}
                                            >
                                                {tag}
                                            </FilterTagButton>
                                        ))}
                                </div>

                                <div className="mt-5 border-t border-primary-navy-dark/10 pt-4">
                                    <Link
                                        href={`/${post.slug}`}
                                        className="inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
                                    >
                                        Read post
                                        <Icons.ArrowRight className="h-4 w-4" aria-hidden="true" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ) : (
                <div className="rounded-lg border border-primary-navy-dark/20 p-8 text-center">
                    <p>No blog posts match the current filter.</p>
                </div>
            )}
        </div>
    )
}
