import type {Metadata} from "next";
import {Space_Grotesk} from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import {Header} from "@/components/header";
import {cn} from "@/lib/utils";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";
import {getPersonJsonLd, getWebsiteJsonLd} from "@/lib/jsonld";
import {siteConfig} from "@/config/site";

const isProduction = process.env.VERCEL_ENV === "production";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
    title: "Reilly Oldham",
    description: "Portfolio and technical writing from Reilly Oldham, a backend and full-stack software engineer in Wellington, New Zealand.",
    keywords: ["software engineer", "backend development", "full-stack development", "AI integrations", "transport apps", "technical blog"],
    authors: [{ name: "Reilly Oldham" }],
    creator: "Reilly Oldham",
    publisher: "Reilly Oldham",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: "Reilly Oldham - Software Engineer",
        description: "Portfolio and technical writing from Reilly Oldham, a backend and full-stack software engineer in Wellington, New Zealand.",
        siteName: "Reilly Oldham",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Reilly Oldham - Software Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Reilly Oldham - Software Engineer",
        description: "Portfolio and technical writing from Reilly Oldham, a backend and full-stack software engineer in Wellington, New Zealand.",
        images: ["/og-image.png"],
        creator: "@proredcat",
    },
    robots: {
        index: isProduction,
        follow: isProduction,
        googleBot: {
            index: isProduction,
            follow: isProduction,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: siteConfig.url,
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
