import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import { property } from "@/data/property";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const title = `${property.name} | ${property.tagline}`;
const description =
  "Top-floor 2 bedroom condo at Wildhorse Meadows in Steamboat Springs. Private gondola to the ski base across the street, heated pool and three hot tubs, AC, and in-unit laundry. Sleeps 6.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Steamboat Springs vacation rental",
    "Steamboat ski condo",
    "Colorado ski trip rental",
    "Denver long weekend Steamboat",
    "Fort Collins family ski trip",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
    siteName: property.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
