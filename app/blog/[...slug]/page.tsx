import {posts} from "#site/content";
import {notFound} from "next/navigation";
import {MDXContent} from "@/components/mdx-component";

import "@/styles/mdx.css";
import {format} from "date-fns";
import {readingTime, wordCount} from "@/lib/utils";

interface PostPageProps {
    params: {
        slug: string[];
    }
}

async function getPostFromParams(params: PostPageProps["params"]) {
    const slug = params?.slug?.join("/");
    return posts.find(post => post.slugAsParams === slug);
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({params}: PostPageProps) {
    const post = await getPostFromParams(params);
    const resolvedParams = await props.params;
    const post = await getPostFromParams(resolvedParams);

    if (!post) {
        return {};
    }

    const ogImage = post.hero ? `https://proredcat.com${post.hero}` : 'https://proredcat.com/blog/default-hero-image.JPG';

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: ['Reilly Oldham'],
            tags: post.tags,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [ogImage],
        },
    };
}

export default async function PostPage(props: PostPageProps) {
    const resolvedParams = await props.params;
    const post = await getPostFromParams(resolvedParams);

    // TODO: Create a custom 404 page as the default looks bad
    if (!post || !post.published) {
        notFound();
    }

    // console.log(post)

    return (
        <>
            <article className="container pt-[15vh] prose w-full">
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