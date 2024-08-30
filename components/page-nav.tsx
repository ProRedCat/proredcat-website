"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function PageNav() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="flex items-center pb-2 pt-2 bg-no-repeat bg-bottom hover:bg-[url('/wave.svg')]">
                <span className="font-bold text-lg leading-none mr-2">{siteConfig.name}</span>
            </Link>
            <Link
                href="/projects"
                className={cn(
                    "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block relative pb-2 pt-2 bg-repeat-x bg-bottom hover:bg-[url('/wave.svg')]",
                    pathname === "/projects" ? "text-foreground" : "text-foreground/60"
                )}
            >
                Projects
            </Link>
            <Link
                href="/about"
                className={cn(
                    "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block relative pb-2 pt-2 bg-repeat-x bg-bottom hover:bg-[url('/wave.svg')]",
                    pathname === "/about" ? "text-foreground" : "text-foreground/60"
                )}
            >
                About
            </Link>
            <Link
                href="/blog"
                className={cn(
                    "text-lg font-medium transition-colors hover:text-primary hidden sm:inline-block relative pb-2 pt-2 bg-repeat-x bg-bottom hover:bg-[url('/wave.svg')]",
                    pathname === "/blog" ? "text-foreground" : "text-foreground/60"
                )}
            >
                Blog
            </Link>
        </nav>
    );
}
