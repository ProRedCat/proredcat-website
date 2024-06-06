import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
          <div>
              <Header />
              {children}
          </div>
      </body>
    </html>
  );
}
