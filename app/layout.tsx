import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

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
        <body className={cn("min-h-screen container mx-auto max-w-screen-2xl", "p-4 pt-0 sm:p-6 md:p-8")}>
        <Header />
        <Analytics />
        <SpeedInsights />
        <main className="flex flex-col items-center justify-center">{children}</main>
        </body>
        </html>
    );
}
