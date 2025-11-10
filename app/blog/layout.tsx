import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Reilly Oldham",
    description: "Technical blog posts about software engineering, backend development, and technology.",
    alternates: {
        canonical: "https://www.proredcat.xyz/blog",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
