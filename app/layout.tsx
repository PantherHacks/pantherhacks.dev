import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PantherHacks",
  description: "PantherHacks is a hackathon hosted by Chapman University's Fowler School of Engineering.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logos/pantherhacks/pantherhacks_red_mascot.png",
        href: "/logos/pantherhacks/pantherhacks_red_mascot.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logos/pantherhacks/pantherhacks_mascot_light.png",
        href: "/logos/pantherhacks/pantherhacks_mascot_light.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
