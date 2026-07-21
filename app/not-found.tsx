import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page not found — Reilly Oldham",
    description: "Well, this wasn’t in the happy path.",
    robots: {
        index: false,
        follow: false,
    },
    alternates: {},
};

export default function NotFound() {
    return (
        <div className="flex min-h-[calc(100vh-65px-2rem)] items-center justify-center px-4 py-16 text-center">
            <div className="max-w-md">
                <h1 className="text-[7rem] font-medium leading-none tracking-[-0.06em] text-primary-navy-dark sm:text-[9rem]">404</h1>
                <p className="mt-6 text-lg leading-7 text-primary-navy-dark/75">Well, this wasn’t in the happy path.</p>
                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-md bg-primary-navy-dark px-5 py-3 text-sm font-semibold text-primary-cream transition hover:bg-primary-navy-dark/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy-dark"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}
