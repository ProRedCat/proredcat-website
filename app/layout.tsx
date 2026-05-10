import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import {Header} from "@/components/header";
import {cn} from "@/lib/utils";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";
import {getPersonJsonLd, getWebsiteJsonLd} from "@/lib/jsonld";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "Reilly Oldham",
    description: "Software engineer specializing in backend and full-stack development. Building scalable systems, optimizing performance, and crafting developer tools. View my projects and technical blog.",
    keywords: ["software engineer", "backend development", "full-stack development", "scalable systems", "performance optimization", "developer tools", "technical blog"],
    authors: [{ name: "Reilly Oldham" }],
    creator: "Reilly Oldham",
    publisher: "Reilly Oldham",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://www.proredcat.xyz'),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.proredcat.xyz",
        title: "Reilly Oldham - Software Engineer",
        description: "Software engineer specializing in backend and full-stack development. Building scalable systems, optimizing performance, and crafting developer tools.",
        siteName: "Reilly Oldham",
        images: [
            {
                url: "/blog/default-hero-image.JPG",
                width: 1200,
                height: 630,
                alt: "Reilly Oldham - Software Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Reilly Oldham - Software Engineer",
        description: "Software engineer specializing in backend and full-stack development. Building scalable systems, optimizing performance, and crafting developer tools.",
        images: ["/blog/default-hero-image.JPG"],
        creator: "@proredcat",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: "https://www.proredcat.xyz",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn("scroll-pt-[4rem]", spaceGrotesk.variable)}>
        <head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(getPersonJsonLd())}}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(getWebsiteJsonLd())}}
            />
        </head>
        <body className={cn("min-h-screen container mx-auto max-w-screen-2xl", "p-4 pt-0")}>
        <Header/>
        <Analytics/>
        <SpeedInsights/>
        <main className="min-h-[calc(100vh-65px-2rem)]">{children}</main>
        </body>
        </html>
    );
}
