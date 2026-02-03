import { siteConfig } from "@/config/site";

export function getPersonJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        name: siteConfig.author,
        url: siteConfig.url,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
        ],
        jobTitle: "Software Engineer",
        description: siteConfig.description,
    };
}

export function getWebsiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        author: {
            "@type": "Person",
            name: siteConfig.author,
        },
    };
}

export interface ArticleJsonLdProps {
    title: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    url: string;
    image?: string;
}

export function getArticleJsonLd({
    title,
    description,
    datePublished,
    dateModified,
    url,
    image,
}: ArticleJsonLdProps) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: description,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        url: url,
        image: image || `${siteConfig.url}/og-image.jpg`,
        author: {
            "@type": "Person",
            name: siteConfig.author,
            url: siteConfig.url,
        },
        publisher: {
            "@type": "Person",
            name: siteConfig.author,
            url: siteConfig.url,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    };
}
