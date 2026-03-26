import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { SocialProof } from "@/components/ui/SocialProof";

const HERO_SRC =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0D2136]">
      <Image
        src={HERO_SRC}
        alt="Épaviste — enlèvement véhicule Île-de-France"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0D2136]/95 via-[#0D2136]/85 to-[#0D2136]/95"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-24 pt-28 text-center md:pt-32">
        <span className="mb-6 inline-flex items-center rounded-full bg-secondary/90 px-4 py-1.5 text-xs font-semibold text-white shadow md:text-sm">
          ⭐ {SITE_CONFIG.rating}/5 · {SITE_CONFIG.reviewCount} avis Google · Agréé
          Préfecture IDF
        </span>

        <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
          Épaviste Agréé{" "}
          <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
            Île-de-France
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Enlèvement épave{" "}
          <strong className="text-secondary">GRATUIT</strong> sous 24h · Rachat
          au <strong className="text-secondary">meilleur prix</strong> ·
          Certificat de destruction VHU officiel
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-lg font-bold text-white shadow-lg animate-pulse-cta transition hover:scale-105 hover:bg-secondary-dark"
          >
            📞 Appel Gratuit : {SITE_CONFIG.phone}
          </a>
          <Link
            href="#devis"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            Devis gratuit en 2 minutes →
          </Link>
        </div>

        <div className="mt-8">
          <SocialProof />
        </div>

        <a
          href="#services"
          className="mt-16 animate-bounce text-sm text-gray-400 hover:text-white"
          aria-label="Défiler vers le contenu"
        >
          ↓
        </a>
      </div>
    </section>
  );
}
