import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

/* Body / UI — modern, highly legible sans-serif */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Display / brand — matches the Fairwood Greens wordmark */
const libre = Libre_Baskerville({
  variable: "--font-libre",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fairwood Greens Homeowners' Association",
    template: "%s · Fairwood Greens HOA",
  },
  description:
    "The official home of the Fairwood Greens Homeowners' Association in Renton, Washington — neighborhood announcements, board meetings, governing documents, events, and resident services.",
  metadataBase: new URL("https://www.fairwoodgreenshoa.org"),
  openGraph: {
    title: "Fairwood Greens Homeowners' Association",
    description:
      "Neighborhood announcements, meetings, documents, events, and resident services for the Fairwood Greens community.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${libre.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        {/* Skip link for keyboard & screen-reader users (WCAG 2.4.1) */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
