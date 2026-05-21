import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { StaticTagChip } from "@/components/tag-chip";
import { cn } from "@/lib/utils";

type ProjectLink = {
    href: string;
    label: string;
};

type ProjectCardProps = {
    title: string;
    href: string;
    meta: string;
    description: string;
    image: string;
    imageAlt: string;
    tags: string[];
    links: ProjectLink[];
    imageFit?: "cover" | "contain";
    imageClassName?: string;
    priority?: boolean;
};

function isExternalUrl(href: string) {
    return href.startsWith("http");
}

export function ProjectCard({
    title,
    href,
    meta,
    description,
    image,
    imageAlt,
    tags,
    links,
    imageFit = "cover",
    imageClassName,
    priority = false,
}: ProjectCardProps) {
    const titleIsExternal = isExternalUrl(href);

    return (
        <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-primary-navy-dark/10 bg-primary-cream shadow-[0_12px_28px_rgba(0,26,77,0.08)] transition duration-200 hover:-translate-y-0.5 hover:border-primary-navy-dark/25 hover:shadow-[0_16px_34px_rgba(0,26,77,0.12)]">
            <Link
                href={href}
                target={titleIsExternal ? "_blank" : undefined}
                rel={titleIsExternal ? "noopener noreferrer" : undefined}
                className="relative block h-52 overflow-hidden bg-primary-navy-dark"
            >
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={priority}
                    className={cn(
                        "transition duration-300 group-hover:scale-[1.02]",
                        imageFit === "contain" ? "object-contain p-3" : "object-cover",
                        imageClassName
                    )}
                    unoptimized={image.endsWith(".gif")}
                />
            </Link>

            <div className="flex flex-1 flex-col p-5">
                <div>
                    <Link
                        href={href}
                        target={titleIsExternal ? "_blank" : undefined}
                        rel={titleIsExternal ? "noopener noreferrer" : undefined}
                        className="text-xl font-semibold leading-snug underline-offset-4 hover:underline"
                    >
                        {title}
                    </Link>
                    <p className="mt-1 text-sm text-primary-navy-dark/70">{meta}</p>
                </div>

                <p className="mt-4 flex-1 text-sm leading-6 text-primary-navy-dark/90">{description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <StaticTagChip key={tag}>{tag}</StaticTagChip>
                    ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-primary-navy-dark/10 pt-4">
                    {links.map((link) => {
                        const external = isExternalUrl(link.href);

                        return (
                            <Link
                                key={`${link.href}-${link.label}`}
                                href={link.href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener noreferrer" : undefined}
                                className="inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
                            >
                                {link.label}
                                {external ? <Icons.ArrowDiagUpRight className="h-4 w-4" aria-hidden="true" /> : null}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}
