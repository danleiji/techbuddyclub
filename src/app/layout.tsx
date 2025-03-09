import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://techbuddy.dev'),
  title: {
    default: "TechBuddy - Expert Tech Mentorship & Career Resources",
    template: "%s | TechBuddy"
  },
  description: "Get personalized mentorship from industry experts and access curated resources to accelerate your tech career growth.",
  keywords: ["tech mentorship", "career guidance", "software engineering", "tech interviews", "career resources"],
  authors: [{ name: "TechBuddy Team" }],
  creator: "TechBuddy Team",
  publisher: "TechBuddy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "TechBuddy",
    title: "TechBuddy - Expert Tech Mentorship & Career Resources",
    description: "Get personalized mentorship from industry experts and access curated resources to accelerate your tech career growth.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechBuddy - Expert Tech Mentorship"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBuddy - Expert Tech Mentorship & Career Resources",
    description: "Get personalized mentorship from industry experts and access curated resources to accelerate your tech career growth.",
    creator: "@techbuddy",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
