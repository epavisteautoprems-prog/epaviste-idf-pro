import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { StickyTopBar } from "@/components/layout/StickyTopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { WebVitalsTracker } from "@/components/seo/WebVitalsTracker";
import { SITE_CONFIG } from "@/lib/constants";
import { siteWideGraphSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: "%s | Épaviste IDF",
    default:
      "Épaviste IDF | Agréé Île-de-France — enlèvement épave gratuit 24h/24",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "épaviste île-de-france",
    "épaviste agréé idf",
    "enlèvement épave gratuit",
    "rachat épave ile de france",
    "enlèvement véhicule hors d'usage",
    "certificat destruction VHU",
    "épaviste Paris",
    "VHU",
    "75",
    "77",
    "78",
    "91",
    "92",
    "93",
    "94",
    "95",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop&q=80",
    ],
  },
  robots: { index: true, follow: true },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B4F72",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans text-neutral-900 antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <JsonLd data={siteWideGraphSchema()} />
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <StickyTopBar />
        <Header />
        <WebVitalsTracker />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
