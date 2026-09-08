import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SplashScreen } from "@/components/layout";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#163A2B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://heavenfurniture.com"),
  title: {
    default: "Heaven Furniture Mart — Heirloom Solid Wood Furniture & Bespoke Interior Styling",
    template: "%s | Heaven Furniture Mart",
  },
  description:
    "Handcrafted bespoke solid wood furniture and luxury interior styling from Chattogram, Bangladesh. Seasoned Chittagong Teak, Burma Teak & White Oak sofas, beds, dining sets and executive suites.",
  keywords: [
    "Heaven Furniture Mart",
    "Solid Wood Furniture Bangladesh",
    "Chittagong Teak Furniture",
    "Bespoke Furniture Chattogram",
    "Handcrafted Dining Table",
    "Luxury Bedroom Suite",
    "Living Room Sofa Bangladesh",
    "Agrabad Furniture Showroom",
  ],
  authors: [{ name: "Heaven Furniture Mart", url: "https://heavenfurniture.com" }],
  creator: "Heaven Furniture Mart",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Heaven Furniture Mart — Designed. Crafted. Customized.",
    description:
      "Handcrafted bespoke solid wood furniture and heirloom interior styling in Chattogram, Bangladesh. 100% seasoned timber & 10-year warranty.",
    url: "https://heavenfurniture.com",
    siteName: "Heaven Furniture Mart",
    images: [
      {
        url: "/style-modern.jpg",
        width: 1200,
        height: 630,
        alt: "Heaven Furniture Mart - Heirloom Handcrafted Solid Wood Collections",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heaven Furniture Mart — Heirloom Solid Wood Furniture",
    description:
      "Handcrafted bespoke solid wood furniture and luxury interior styling from Chattogram, Bangladesh.",
    images: ["/style-modern.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${body.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <SplashScreen />
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}

