"use client"

import {Icons} from "@/components/icons";
import Link from "next/link";
import {siteConfig} from "@/config/site";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

export function PageNav() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/">
                <Icons.Profile/>
                <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <Link
                href="/projects"
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/about" ? "text-foreground" : "text-foreground/60"
                )}
            >
                Projects
            </Link>
            <Link
                href="/about"
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/about" ? "text-foreground" : "text-foreground/60"
                )}
            >
                About
            </Link>
            <Link
                href="/blog"
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/blog" ? "text-foreground" : "text-foreground/60"
                )}
            >
                Blog
            </Link>
        </nav>
    )
}