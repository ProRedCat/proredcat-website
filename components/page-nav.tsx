"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function PageNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const desktopLinkClass = "text-xl font-medium transition-colors hover:text-primary-navy-dark text-foreground pb-2 pt-2";
    const mobileLinkClass = "text-2xl font-medium text-foreground";

    return (
        <nav className="flex items-center">
            <Link href="/" className="flex items-center pb-2 pt-2">
                <span className="font-bold text-2xl leading-none mr-2">{siteConfig.name}</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ml-6">
                <Link href="/projects" className={desktopLinkClass}>
                    Projects
                </Link>
                <Link href="/about" className={desktopLinkClass}>
                    About
                </Link>
                <Link href="/blog" className={desktopLinkClass}>
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
                    <Link href="/" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/projects" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                        Projects
                    </Link>
                    <Link href="/about" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                        About
                    </Link>
                    <Link href="/blog" className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </Link>
                </div>
            </div>
        </nav>
    );
}
