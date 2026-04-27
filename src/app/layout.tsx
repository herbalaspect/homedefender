import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/seo/LocalBusinessSchema";
import { Analytics } from "@/components/seo/Analytics";

/**
 * Site-wide defaults. Per-page metadata is built with `pageMetadata()` from
 * `@/lib/seo` and exported from each page's `page.tsx`.
 */
export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "Madison Roofing Contractor | Home Defender Remodeling",
    template: "%s | Home Defender Remodeling",
  },
  description:
    "Trusted Madison roofing contractor serving Dane County. Expert roof replacement, storm damage repair, gutters, and windows. Free estimates — call today.",
  alternates: { canonical: BUSINESS.url },
  openGraph: {
    type: "website",
    siteName: BUSINESS.name,
    url: BUSINESS.url,
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <Nav />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
