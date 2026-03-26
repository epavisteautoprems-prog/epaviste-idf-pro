import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { QuoteForm } from "@/components/home/QuoteForm";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { HomeSeoArticle } from "@/components/home/HomeSeoArticle";
import { SITE_CONFIG } from "@/lib/constants";

const keywords = [
  "épaviste île-de-france",
  "enlèvement épave gratuit idf",
  "rachat épave ile de france",
  "épaviste agréé île-de-france",
  "enlèvement épave gratuit",
  "rachat épave IDF",
  "certificat destruction VHU",
  "épaviste Paris",
  "épaviste 92",
  "épaviste 93",
  "épaviste 94",
  "épaviste 77",
  "épaviste 78",
  "épaviste 91",
  "épaviste 95",
  "véhicule hors usage",
  "VHU",
  "enlèvement voiture en panne",
  "épave accidentée",
  "destruction véhicule",
  "enlèvement épave sous 24h",
  "épaviste week-end",
  "carte grise perdue épave",
];

export async function generateMetadata(): Promise<Metadata> {
  const title =
    "Épaviste Agréé Île-de-France | Enlèvement Épave Gratuit 24h/24 – Rachat au Meilleur Prix";
  const description =
    "Épaviste agréé IDF ✓ Enlèvement épave gratuit 24h ✓ Rachat au meilleur prix ✓ Certificat destruction ✓ 7j/7, 8 départements. Devis gratuit rapide 24h.";
  const url = SITE_CONFIG.url;
  const ogImage =
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop&q=80";
  return {
    title,
    description,
    keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "fr_FR",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <QuoteForm />
      <ServicesGrid />
      <HowItWorks />
      <HomeSeoArticle />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
