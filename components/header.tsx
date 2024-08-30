import Link from "next/link";
import {Icons} from "@/components/icons";
import {siteConfig} from "@/config/site";
import {PageNav} from "@/components/page-nav";

export function Header() {
    return (
        <header className="z-10 sticky top-0 w-full">
            <div
                className="container mx-auto flex h-14 max-w-screen-2xl items-center justify-between border-b-4 border-orange-secondary">
                <div className="flex-1">
                    <PageNav/>
                </div>
                <nav className="flex items-center space-x-2">
                    <Link
                        href={siteConfig.links.github}
                        className="bg-repeat-x bg-bottom hover:bg-[url('/wave.svg')]"
                    >
                        <Icons.GitHub className="h-8 w-8"/>
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href={siteConfig.links.linkedin}
                        className="mb-2 bg-repeat-x bg-bottom hover:bg-[url('/wave.svg')]"
                    >
                        <Icons.LinkedIn className="h-8 w-8"/>
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}