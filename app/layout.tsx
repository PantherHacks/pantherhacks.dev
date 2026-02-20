import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { mainWebsiteLink } from "@/lib/links";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PantherHacks 2026",
  description:
    "PantherHacks is a hackathon hosted by Chapman Computer Science Club in partnership with Chapman University's Fowler School of Engineering.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logos/pantherhacks/cyborg_pete_orange.svg",
        href: "/logos/pantherhacks/cyborg_pete_orange.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/pantherhacks/cyborg_pete_white.svg",
        href: "/logos/pantherhacks/cyborg_pete_white.svg",
      },
    ],
  },
  metadataBase: new URL(mainWebsiteLink),
  openGraph: {
    images: "/social-images/opengraph-image.png",
  },
  twitter: {
    images: "/social-images/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
