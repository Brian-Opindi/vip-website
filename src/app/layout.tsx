import type { Metadata } from "next";
import { Poppins, Urbanist, Jost, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Cursor from "@/components/cursor"

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: "400",
});

const urbanist = Urbanist({
    variable: "--font-urbanist",
    subsets: ["latin"],
});

const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
});

const wixMadeforDisplay = Wix_Madefor_Display({
    variable: "--font-wix-madefor-display",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Very Individual Protection Services",
    description: "Very Individual Protection Services",
    keywords: "VIP, Security, Protection, Services",
    authors: [
        {
            name: "Very Individual Protection Services",
            url: "https://veryindividualprotection.com",
        },
    ],
    creator: "Very Individual Protection Services",
    openGraph: {
        title: "Very Individual Protection Services",
        description: "Very Individual Protection Services",
        url: "https://veryindividualprotection.com",
        siteName: "Very Individual Protection Services",
        type: "website",
        images: [
            {
                url: "https://veryindividualprotection.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Very Individual Protection Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Very Individual Protection Services",
        description: "Very Individual Protection Services",
        images: ["https://veryindividualprotection.com/og-image.png"],
        creator: "@veryindividualprotection",
    },
    icons: {
        icon: "/favicon.io/favicon.ico",
        shortcut: "/favicon.io/favicon.ico",
        apple: "/favicon.io/apple-touch-icon.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={`${poppins.variable} ${urbanist.variable} ${jost.variable} ${wixMadeforDisplay.variable} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <Cursor />
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}