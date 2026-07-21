import { posts } from "#site/content";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

function escapeXml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

export function GET() {
    const publishedPosts = posts
        .filter((post) => post.published)
        .sort((a, b) => new Date(b.updated ?? b.date).getTime() - new Date(a.updated ?? a.date).getTime());

    const latestPostDate = publishedPosts[0]?.updated ?? publishedPosts[0]?.date;
    const lastBuildDate = latestPostDate
        ? new Date(latestPostDate).toUTCString()
        : new Date(0).toUTCString();

    const items = publishedPosts.map((post) => {
        const url = `${siteConfig.url}/${post.slug}`;
        const categories = post.tags
            ?.map((tag) => `      <category>${escapeXml(tag)}</category>`)
            .join("\n");

        return [
            "    <item>",
            `      <title>${escapeXml(post.title)}</title>`,
            `      <link>${escapeXml(url)}</link>`,
            `      <guid isPermaLink="true">${escapeXml(url)}</guid>`,
            `      <description>${escapeXml(post.shortDescription)}</description>`,
            `      <pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
            categories,
            "    </item>",
        ].filter(Boolean).join("\n");
    }).join("\n");

    const feed = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
        "  <channel>",
        `    <title>${escapeXml(`${siteConfig.name} — Writing`)}</title>`,
        `    <link>${escapeXml(`${siteConfig.url}/blog`)}</link>`,
        `    <atom:link href="${escapeXml(`${siteConfig.url}/feed.xml`)}" rel="self" type="application/rss+xml" />`,
        `    <description>${escapeXml(siteConfig.description)}</description>`,
        "    <language>en-NZ</language>",
        `    <lastBuildDate>${lastBuildDate}</lastBuildDate>`,
        items,
        "  </channel>",
        "</rss>",
    ].join("\n");

    return new Response(feed, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    });
}
