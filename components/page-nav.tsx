"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function PageNav() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center">
            <Link href="/" className="flex items-center pb-2 pt-2">
                <span className="font-bold text-2xl leading-none mr-2">{siteConfig.name}</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ml-6">
                <Link
                    href="/projects"
                    className={cn(
                        "text-xl font-medium transition-colors hover:text-primary relative pb-2 pt-2",
                        pathname === "/projects" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Projects
                </Link>
                <Link
                    href="/about"
                    className={cn(
                        "text-xl font-medium transition-colors hover:text-primary relative pb-2 pt-2",
                        pathname === "/about" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    About
                </Link>
                <Link
                    href="/blog"
                    className={cn(
                        "text-xl font-medium transition-colors hover:text-primary relative pb-2 pt-2",
                        pathname === "/blog" ? "text-foreground" : "text-foreground/60"
                    )}
                >
                    Blog
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden ml-4 p-2 focus:outline-none"
                aria-label="Toggle menu"
            >
                <div className="w-6 flex flex-col gap-1">
                    <span className={cn(
                        "block h-0.5 w-full bg-primary-navy-dark transition-transform duration-300",
                        isMenuOpen && "rotate-45 translate-y-1.5"
                    )}/>
                    <span className={cn(
                        "block h-0.5 w-full bg-primary-navy-dark transition-opacity duration-300",
                        isMenuOpen && "opacity-0"
                    )}/>
                    <span className={cn(
                        "block h-0.5 w-full bg-primary-navy-dark transition-transform duration-300",
                        isMenuOpen && "-rotate-45 -translate-y-1.5"
                    )}/>
                </div>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 bg-primary-cream z-50 md:hidden transition-transform duration-300 ease-in-out",
                isMenuOpen ? "translate-x-0" : "translate-x-full"
            )}>
                {/* Close Button */}
                <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-5 right-5 p-2 focus:outline-none"
                    aria-label="Close menu"
                >
                    <div className="w-6 h-6 flex items-center justify-center">
                        <span className="block h-0.5 w-6 bg-primary-navy-dark rotate-45 absolute"></span>
                        <span className="block h-0.5 w-6 bg-primary-navy-dark -rotate-45 absolute"></span>
                    </div>
                </button>

                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    <Link
                        href="/"
                        className={cn(
                            "text-2xl font-medium",
                            pathname === "/" ? "text-foreground" : "text-foreground/60"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/projects"
                        className={cn(
                            "text-2xl font-medium",
                            pathname === "/projects" ? "text-foreground" : "text-foreground/60"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/about"
                        className={cn(
                            "text-2xl font-medium",
                            pathname === "/about" ? "text-foreground" : "text-foreground/60"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/blog"
                        className={cn(
                            "text-2xl font-medium",
                            pathname === "/blog" ? "text-foreground" : "text-foreground/60"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
}
