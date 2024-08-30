import type {Metadata} from "next";
import "./globals.css";
import {Header} from "@/components/header";
import {cn} from "@/lib/utils";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";

// const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Reilly Oldham",
    description: "Reilly Oldham's portfolio and blog",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen")}>
                <div className="container mx-auto max-w-screen-2xl">
                    <Header/>
                    <Analytics/>
                    <SpeedInsights/>
                    <main className="mt-4">{children}</main>
                </div>
            </body>
        </html>
    );
}