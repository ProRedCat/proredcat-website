import { Metadata } from "next";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

const title = "About - Reilly Oldham";
const description =
    "About Reilly Oldham, a backend and full-stack software engineer working across backend systems, observability, developer tooling, and product interfaces.";
const url = `${siteConfig.url}/about`;

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

const practicePoints = [
    {
        label: "Production systems",
        body: "Architected distributed AI agent workflow infrastructure for high-volume execution, token metering, OAuth integrations, and retrieval systems.",
    },
    {
        label: "Observability",
        body: "Worked on Raygun MCP, AI Error Resolution infrastructure, exception grouping, crash reporting, and RUM support.",
    },
    {
        label: "Product surfaces",
        body: "Built interfaces for transport, crash reporting, and developer-facing workflows across Next.js, HTMX, ASP.NET Core, Kotlin, and Wear OS.",
    },
];

const profileFacts = [
    {
        label: "Current",
        value: "Software Engineer at Autohive / Raygun",
    },
    {
        label: "Based in",
        value: "Wellington, New Zealand",
    },
    {
        label: "Background",
        value: "BEng(Hons, First Class) in Software Engineering",
    },
    {
        label: "Core stack",
        value: ".NET, TypeScript, Kotlin, PostgreSQL, Next.js",
    },
    {
        label: "Writing",
        value: "Long-form technical posts and project case studies",
    },
];

const elsewhereLinks = [
    { label: "GitHub", handle: "ProRedCat", href: "https://github.com/ProRedCat", Icon: Icons.GitHub },
    { label: "LinkedIn", handle: "reilly-oldham", href: "https://www.linkedin.com/in/reilly-oldham/", Icon: Icons.LinkedIn },
];

const recentWork = [
    {
        title: "Autohive / Raygun",
        description: "Distributed AI agent execution, LLM abstraction, OAuth integrations, token metering, and RAG systems.",
        href: "https://www.autohive.com/",
    },
    {
        title: "Raygun MCP Server",
        description: "Production debugging context for AI agents, now used hundreds of thousands of times per month.",
        href: "https://github.com/MindscapeHQ/mcp-server-raygun",
    },
    {
        title: "Catchy for Wear OS",
        description: "A watch companion for Wellington public transport arrivals, saved stops, and live timing.",
        href: "/blog/catchy-wearos-wearable-data-layer",
    },
    {
        title: "Minigun",
        description: "A modern HTMX and ASP.NET Core interface over Raygun crash reporting data.",
        href: "https://github.com/ProRedCat/minigun",
    },
];

function isExternalUrl(href: string) {
    return href.startsWith("http");
}

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-primary-cream">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-y-14 lg:grid-cols-[minmax(0,42rem)_minmax(19rem,1fr)] lg:gap-x-24 2xl:gap-x-32">
                    <section>
                        <p className="mb-2 text-sm font-semibold text-red-secondary">About</p>
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                            Backend and full-stack engineer building practical software with clear interfaces.
                        </h1>
                        <div className="mt-6 space-y-5 text-base leading-7 text-primary-navy-dark/85 md:text-lg md:leading-8">
                            <p>
                                I&apos;m Reilly Oldham, a software engineer in Wellington, New Zealand. I work across
                                backend systems, observability, developer tooling, and product interfaces, with recent
                                experience building distributed agent infrastructure, Raygun observability features,
                                public transport apps, and technical writing.
                            </p>
                            <p>
                                I like turning ambiguous engineering problems into working software with explicit
                                boundaries, useful failure states, and interfaces that make the underlying system easier
                                to reason about.
                            </p>
                        </div>

                        <div className="mt-8 border-y border-primary-navy-dark/15">
                            {profileFacts.map((fact) => (
                                <div
                                    key={fact.label}
                                    className="grid gap-1 border-b border-primary-navy-dark/10 py-3 last:border-b-0 sm:grid-cols-[8rem_1fr]"
                                >
                                    <span className="text-sm font-semibold">{fact.label}</span>
                                    <span className="text-sm leading-6 text-primary-navy-dark/75">{fact.value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <aside className="space-y-3.5">
                        <section>
                            <p className="mb-3 text-sm font-semibold text-red-secondary">In practice</p>
                            <div className="divide-y divide-primary-navy-dark/10 border-b border-primary-navy-dark/15">
                                {practicePoints.map((point) => (
                                    <div
                                        key={point.label}
                                        className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[9rem_1fr] lg:grid-cols-1 xl:grid-cols-[9rem_1fr]"
                                    >
                                        <h2 className="text-sm font-semibold text-primary-navy-dark">{point.label}</h2>
                                        <p className="text-sm leading-6 text-primary-navy-dark/78">{point.body}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <p className="mb-3 text-sm font-semibold text-red-secondary">Elsewhere</p>
                            <div className="divide-y divide-primary-navy-dark/10 border-b border-primary-navy-dark/15">
                                {elsewhereLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group grid grid-cols-[1.25rem_1fr_auto] items-center gap-3 py-3 underline-offset-4 first:pt-0 hover:underline"
                                    >
                                        <link.Icon className="h-5 w-5" aria-hidden="true" />
                                        <span>
                                            <span className="block text-sm font-semibold">{link.label}</span>
                                            <span className="block text-sm text-primary-navy-dark/70">{link.handle}</span>
                                        </span>
                                        <Icons.ArrowDiagUpRight
                                            className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </aside>

                    <section className="lg:col-span-2">
                        <div className="mb-4 flex items-end justify-between gap-4">
                            <h2 className="text-2xl font-bold">Recent work</h2>
                            <Link href="/projects" className="text-sm font-semibold underline-offset-4 hover:underline">
                                All projects
                            </Link>
                        </div>
                        <div className="divide-y divide-primary-navy-dark/10 border-y border-primary-navy-dark/10">
                            {recentWork.map((work) => {
                                const href = work.href;
                                const external = href ? isExternalUrl(href) : false;
                                const content = (
                                    <>
                                        <span className="text-lg font-semibold">{work.title}</span>
                                        <span className="text-sm leading-6 text-primary-navy-dark/75">{work.description}</span>
                                        {href ? (
                                            <Icons.ArrowDiagUpRight
                                                className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                aria-hidden="true"
                                            />
                                        ) : null}
                                    </>
                                );

                                return href ? (
                                    <Link
                                        key={work.title}
                                        href={href}
                                        target={external ? "_blank" : undefined}
                                        rel={external ? "noopener noreferrer" : undefined}
                                        className="group grid gap-2 px-3 py-4 transition hover:bg-primary-navy-dark/[0.03] md:grid-cols-[14rem_1fr_auto] md:px-4"
                                    >
                                        {content}
                                    </Link>
                                ) : (
                                    <div key={work.title} className="grid gap-2 px-3 py-4 md:grid-cols-[14rem_1fr_auto] md:px-4">
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
