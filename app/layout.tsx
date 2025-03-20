import type {Metadata} from "next";
import "./globals.css";
import {Header} from "@/components/header";
import {cn} from "@/lib/utils";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";

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
        <html lang="en" className="scroll-pt-[4rem]">
        <body className={cn("min-h-screen container mx-auto max-w-screen-2xl", "p-4 pt-0")}>
        <Header/>
        <Analytics/>
        <SpeedInsights/>
        <main className="min-h-[calc(100vh-65px-2rem)]">{children}</main>
        </body>
        </html>
    );
}
