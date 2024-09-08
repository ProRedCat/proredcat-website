import {defineCollection, defineConfig, s} from 'velite'
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const computedFields = <T extends { slug: string }>(data: T) => {
    return ({
        ...data,
        slugAsParams: data.slug.split("/").slice(1).join("/")
    });
}

const posts = defineCollection({
    name: 'Post',
    pattern: 'blog/**/*.mdx',
    schema: s
        .object({
            title: s.string().max(99),
            slug: s.path(),
            description: s.string().max(999),
            short_description: s.string().max(999),
            date: s.isodate(),
            published: s.boolean().default(true),
            body: s.mdx()
        }).transform(computedFields)
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    collections: {posts},
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, { theme: "one-dark-pro" }],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap",
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
        remarkPlugins: []
    }
})