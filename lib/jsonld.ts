import { siteConfig } from "@/config/site";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const aboutUrl = `${siteConfig.url}/about`;

export function serializeJsonLd(value: unknown) {
    return JSON.stringify(value).replace(/</g, "\\u003c");
}

function getPersonEntity() {
    return {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.author,
        alternateName: "ProRedCat",
        url: aboutUrl,
        image: `${siteConfig.url}/Reilly-square.jpg`,
        sameAs: [
            siteConfig.links.github,
            siteConfig.links.linkedin,
            siteConfig.links.twitter,
        ],
        jobTitle: "Software Engineer",
        description: siteConfig.description,
    };
}

function getPersonReference() {
    return {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.author,
        url: aboutUrl,
    };
}

export function getPersonJsonLd() {
    return {
        "@context": "https://schema.org",
        ...getPersonEntity(),
    };
}

export function getWebsiteJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        alternateName: ["ProRedCat", "proredcat.dev"],
        url: siteConfig.url,
        description: siteConfig.description,
        author: getPersonReference(),
    };
}

export function getProfilePageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${aboutUrl}#profile-page`,
        name: `About ${siteConfig.author}`,
        url: aboutUrl,
        mainEntity: getPersonEntity(),
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
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: title,
        description: description,
        datePublished: datePublished,
        dateModified: dateModified ?? datePublished,
        url: url,
        image: image || `${siteConfig.url}/og-image.png`,
        author: getPersonReference(),
        publisher: getPersonReference(),
        isPartOf: {
            "@type": "Blog",
            "@id": `${siteConfig.url}/blog#blog`,
            name: `Writing by ${siteConfig.author}`,
            url: `${siteConfig.url}/blog`,
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    };
}

export function getArticleBreadcrumbJsonLd(title: string, url: string) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: siteConfig.url,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Writing",
                item: `${siteConfig.url}/blog`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: title,
                item: url,
            },
        ],
    };
}
