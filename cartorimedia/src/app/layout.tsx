import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    preload: false,
    display: "swap",
});

export const metadata: Metadata = {
    title: "Cartorimedia",
    description: "Cartorimedia - Addiction recovery social media specialists",
    icons: {
        icon: "/images/logos/icon-logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="dns-prefetch" href="https://api.ipify.org" />
                <link rel="dns-prefetch" href="https://ipapi.co" />
            </head>
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
