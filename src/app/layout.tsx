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
  title: "Facesome | Studio-Grade AI Executive Portraits & Headshots",
  description:
    "Transform candid selfies into bespoke, Forbes-level corporate headshots in 60 seconds. Studio lighting, tailored bespoke outfits, 100% natural likeness.",
  keywords: [
    "AI headshots",
    "professional headshots",
    "LinkedIn profile photo",
    "executive portrait",
    "corporate photography",
    "Facesome",
  ],
  authors: [{ name: "Facesome Studio" }],
  openGraph: {
    title: "Facesome | Studio-Grade AI Executive Portraits",
    description:
      "Transform candid photos into bespoke LinkedIn and executive headshots with master-class lighting and styling.",
    url: "https://facesome.com",
    siteName: "Facesome",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Facesome Executive Portraits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facesome | Studio-Grade AI Executive Portraits",
    description: "Forbes & Wall Street caliber corporate portraits in under 60 seconds.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08080a] text-[#f4f4f7] selection:bg-[#e5b741] selection:text-black">
        {children}
      </body>
    </html>
  );
}
