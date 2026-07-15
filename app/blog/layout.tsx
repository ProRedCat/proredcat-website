import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const title = "Blog - Reilly Oldham";
const description =
    "Technical deep dives and build notes from backend systems, developer tooling, product work, and the occasional rabbit hole.";
const url = `${siteConfig.url}/blog`;

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: url,
    },
    openGraph: {
        title,
        description,
        url,
        type: "website",
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
        title,
        description,
        images: ["/og-image.png"],
        creator: "@proredcat",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
