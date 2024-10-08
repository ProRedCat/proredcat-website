    import Link from "next/link";
    import {Icons} from "@/components/icons";
    import {siteConfig} from "@/config/site";
    import {PageNav} from "@/components/page-nav";

    export function Header() {
        return (
            <>
                <header className="z-10 sticky top-0 w-full bg-primary-cream">
                    <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between">
                        <div className="flex-1">
                            <PageNav/>
                        </div>
                        <nav className="flex items-center space-x-2">
                            <Link
                                href={siteConfig.links.github}
                                className="pb-2 pt-2"
                            >
                                <Icons.GitHub className="h-8 w-8"/>
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href={siteConfig.links.linkedin}
                                className="pb-2 pt-2"
                            >
                                <Icons.LinkedIn className="h-9 w-9"/>
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </nav>
                    </div>
                <div className="sticky top-14 w-full">
                    <div className="w-full h-1 bg-primary-navy-dark rounded-full"></div>
                </div>
                </header>
            </>
        );
    }
