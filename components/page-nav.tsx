"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
];

export function PageNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const menuButtonRef = useRef<HTMLButtonElement>(null);
    const menuDialogRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen((open) => !open);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    useEffect(() => {
        if (!isMenuOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isMenuOpen]);

    const handleDialogKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeMenu();
            return;
        }

        if (event.key !== "Tab") return;

        const focusable = menuDialogRef.current?.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
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
                ref={menuButtonRef}
                onClick={toggleMenu}
                className="md:hidden ml-4 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark"
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation-menu"
            >
                <span className="flex w-6 flex-col gap-1" aria-hidden="true">
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
                </span>
            </button>

            {/* Mobile Menu Overlay */}
            {isMenuOpen ? (
                <div
                    ref={menuDialogRef}
                    id="mobile-navigation-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                    onKeyDown={handleDialogKeyDown}
                    className="fixed inset-0 z-50 bg-primary-cream md:hidden"
                >
                    {/* Close Button */}
                    <button
                        ref={closeButtonRef}
                        onClick={closeMenu}
                        className="absolute top-5 right-5 p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark"
                        aria-label="Close menu"
                    >
                        <span className="flex h-6 w-6 items-center justify-center" aria-hidden="true">
                            <span className="block h-0.5 w-6 bg-primary-navy-dark rotate-45 absolute"></span>
                            <span className="block h-0.5 w-6 bg-primary-navy-dark -rotate-45 absolute"></span>
                        </span>
                    </button>

                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                        <Link href="/" className={mobileLinkClass("/")} onClick={closeMenu}>
                            Home
                        </Link>
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={mobileLinkClass(item.href)}
                                onClick={closeMenu}
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
