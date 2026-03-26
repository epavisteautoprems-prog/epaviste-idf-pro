import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "À propos",
  description: `${SITE_CONFIG.name} : épaviste agréé VHU, équipe mobile en Île-de-France, service 7j/7.`,
  alternates: { canonical: `${SITE_CONFIG.url}/a-propos` },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 prose prose-lg prose-neutral">
      <h1>À propos d’{SITE_CONFIG.name}</h1>
      <p>
        Nous sommes une équipe d’<strong>épavistes agréés</strong> intervenant
        sur l’ensemble de l’Île-de-France. Notre mission : simplifier
        l’enlèvement des véhicules hors d’usage, sécuriser les démarches
        administratives et proposer un <strong>rachat équitable</strong> lorsque
        c’est possible.
      </p>
      <p>
        {SITE_CONFIG.vehiclesCount.toLocaleString("fr-FR")}+ véhicules traités,
        note moyenne {SITE_CONFIG.rating}/5 sur la base de{" "}
        {SITE_CONFIG.reviewCount} avis — nous combinons réactivité, transparence
        et respect de la réglementation VHU.
      </p>
      <p>
        <Link href="/contact">Nous contacter</Link> ·{" "}
        <Link href="/blog">Blog</Link>
      </p>
    </article>
  );
}
