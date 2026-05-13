import type { Metadata, Viewport } from "next";
import { AccessibilitySkipLink } from "@/components/AccessibilitySkipLink";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ReducedMotionProvider } from "@/components/ReducedMotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sawaensemble.org"),
  title: {
    default: "SAWA Ensemble | Storytelling, Art, and the Wonders of Africa",
    template: "%s | SAWA Ensemble"
  },
  description:
    "SAWA Ensemble is a living cultural and music ensemble from Kizimkazi, Zanzibar, where rhythm, storytelling, theatre, craft, devotion, and community learning meet.",
  keywords: [
    "SAWA Ensemble",
    "Zanzibar music",
    "Kizimkazi",
    "African ensemble",
    "cultural workshops",
    "ngoma",
    "storytelling",
    "Assalam Community Foundation"
  ],
  openGraph: {
    title: "SAWA Ensemble",
    description:
      "A living ensemble from Kizimkazi, Zanzibar. Storytelling, Art, and the Wonders of Africa.",
    url: "https://sawaensemble.org",
    siteName: "SAWA Ensemble",
    images: [
      {
        url: "/images/sawa/hero-rise.jpg",
        width: 1600,
        height: 900,
        alt: "SAWA Ensemble performing in a cinematic coastal atmosphere"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SAWA Ensemble",
    description:
      "Storytelling, Art, and the Wonders of Africa from Kizimkazi, Zanzibar.",
    images: ["/images/sawa/hero-rise.jpg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050504",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <ReducedMotionProvider>
          <AccessibilitySkipLink />
          <Navbar />
          <main id="main-content" className="sawa-shell min-h-screen">
            {children}
          </main>
          <Footer />
        </ReducedMotionProvider>
      </body>
    </html>
  );
}
