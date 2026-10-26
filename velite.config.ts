import path from "node:path";
import sharp from "sharp";
import { defineCollection, defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const DEFAULT_HERO_IMAGE = "/blog/default-hero-image.JPG";

async function getHeroImage(hero?: string) {
  const src = hero || DEFAULT_HERO_IMAGE;
  const publicImagePath = src.replace(/^\/+/, "");
  const imagePath = path.join(process.cwd(), "public", publicImagePath);

  const image = sharp(imagePath);
  const [{ width, height }, buffer] = await Promise.all([
    image.metadata(),
    image.clone().resize(16, 9, { fit: "cover" }).webp({ quality: 35 }).toBuffer(),
  ]);
  if (!width || !height) {
    throw new Error(`Cannot determine hero image dimensions: ${imagePath}`);
  }
  return {
    src,
    width,
    height,
    blurDataURL: `data:image/webp;base64,${buffer.toString("base64")}`,
  };
}

const computedFields = async <T extends { slug: string; hero?: string }>(data: T) => {
  return {
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
    heroImage: await getHeroImage(data.hero),
  };
};

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.path(),
      description: s.string().max(999),
      shortDescription: s.string().max(999),
      date: s.isodate(),
      updated: s.isodate().optional(),
      hero: s.string().max(999).optional(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      body: s.mdx(),
      metadata: s.metadata(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [rehypePrettyCode, { theme: "one-dark-pro" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
          },
        },
      ],
    ],
    remarkPlugins: [remarkMath],
  },
});
