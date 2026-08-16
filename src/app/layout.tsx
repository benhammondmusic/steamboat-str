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
  "A Steamboat Springs condo built for ski trips and Front Range long weekends. Minutes to the gondola, full kitchen, hot tub, and heated ski storage.";

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
