import Link from "next/link";
import {Icons} from "@/components/icons";
import { siteConfig } from "@/config/site";
import {PageNav} from "@/components/page-nav";

export function Header() {
    return (
        <header className="z-10 sticky top-0 w-full border-b border-border">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <PageNav/>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center">
                        <Link href={siteConfig.links.github}>
                            <Icons.GitHub className="h-6 w-6"/>
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href={siteConfig.links.linkedin}>
                            <Icons.LinkedIn className="h-6 w-6"/>
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}