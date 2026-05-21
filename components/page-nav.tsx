"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
];

export function PageNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

    const desktopLinkClass = (href: string) => cn(
        "border-b-2 pb-2 pt-2 text-xl font-medium transition-colors hover:text-primary-navy-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark",
        isActive(href) ? "border-red-secondary text-primary-navy-dark" : "border-transparent text-foreground"
    );

    const mobileLinkClass = (href: string) => cn(
        "text-2xl font-medium text-foreground underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark",
        isActive(href) && "underline decoration-red-secondary decoration-2"
    );

    return (
        <nav className="flex items-center">
            <Link href="/" className="flex items-center pb-2 pt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark">
                <span className="font-bold text-2xl leading-none mr-2">{siteConfig.name}</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ml-6">
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} className={desktopLinkClass(item.href)}>
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
                onClick={toggleMenu}
                className="md:hidden ml-4 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
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
            {isMenuOpen ? (
                <div className="fixed inset-0 z-50 bg-primary-cream md:hidden">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-5 right-5 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark"
                        aria-label="Close menu"
                    >
                        <div className="w-6 h-6 flex items-center justify-center">
                            <span className="block h-0.5 w-6 bg-primary-navy-dark rotate-45 absolute"></span>
                            <span className="block h-0.5 w-6 bg-primary-navy-dark -rotate-45 absolute"></span>
                        </div>
                    </button>

                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <Link href="/" className={mobileLinkClass("/")} onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={mobileLinkClass(item.href)}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            ) : null}
        </nav>
    );
}
