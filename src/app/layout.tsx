import type { Metadata, Viewport } from "next";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";

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
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
