import AlexaTransportProject from "@/components/projects/alexa-transport";
import CatchyWearOSProject from "@/components/projects/catchy-wearos";
import HumanMotionDiffusion from "@/components/projects/human-motion";
import MinigunProject from "@/components/projects/minigun";
import RaygunMCPProject from "@/components/projects/raygun-mcp";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const title = "Projects - Reilly Oldham";
const description =
    "Software engineering projects across observability, developer tooling, AI integrations, public transport, web applications, and research.";
const url = `${siteConfig.url}/projects`;

export const metadata: Metadata = {
    title,
    description,
    alternates: {
        canonical: url,
        types: {
            "application/rss+xml": `${siteConfig.url}/feed.xml`,
        },
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

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-primary-cream">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 max-w-3xl">
                    <p className="mb-2 text-sm font-semibold text-red-secondary">Selected builds</p>
                    <h1 className="text-3xl font-bold md:text-4xl">Projects</h1>
                    <p className="mt-3 text-base leading-7 text-primary-navy-dark/80">
                        Shipped work and experiments across observability, developer tooling, AI integrations, public
                        transport, web apps, and research.
                    </p>
                </div>
                
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <CatchyWearOSProject />
                    <RaygunMCPProject />
                    <MinigunProject />
                    <AlexaTransportProject />
                    <HumanMotionDiffusion />
                    {/* Add more projects here */}
                </div>
            </div>
        </div>
    );
}
