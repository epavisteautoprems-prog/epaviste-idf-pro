import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

const entries: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = {
  "/enlevement-epave-gratuit": {
    title:
      "Enlèvement Épave Gratuit Île-de-France | Intervention 24h/24 – Agréé VHU",
    description:
      "Enlèvement épave gratuit IDF ✓ 7j/7 7h–22h ✓ Épaviste agréé ✓ Certificat destruction ✓ Paris & 8 départements. Devis gratuit, sans engagement.",
    keywords: [
      "enlèvement épave gratuit",
      "épave gratuite idf",
      "enlever épave gratuitement",
      "enlèvement épave sans frais",
      "épaviste gratuit Paris",
      "enlèvement véhicule hors usage idf",
    ],
  },
  "/rachat-epave": {
    title:
      "Rachat Épave Île-de-France | Estimation Gratuite & Paiement Immédiat",
    description:
      "Rachat épave IDF ✓ Estimation gratuite ✓ Paiement jour J ✓ Voiture accidentée, sans CT ✓ 8 départements. Appelez pour une fourchette honnête.",
    keywords: [
      "rachat épave idf",
      "prix rachat épave",
      "vendre épave ile de france",
      "estimation épave gratuite",
      "rachat épave Paris",
    ],
  },
  "/epaviste-agree": {
    title: "Épaviste Agréé Île-de-France | VHU Préfecture – Filaire Officielle",
    description:
      "Épaviste agréé IDF ✓ Agrément VHU ✓ Traçabilité ✓ Certificat destruction ✓ Enlèvement gratuit ou rachat selon cas. Intervention 24–48 h.",
    keywords: [
      "épaviste agréé idf",
      "épaviste agréé préfecture",
      "VHU agréé",
      "filière destruction véhicule",
    ],
  },
  "/vehicule-hors-usage": {
    title: "Véhicule Hors d’Usage IDF | Enlèvement Gratuit & Certificat VHU",
    description:
      "VHU Île-de-France ✓ Obligations propriétaire ✓ Enlèvement agréé ✓ Certificat destruction ✓ Paris 75 & couronnes. Conseils + devis gratuits.",
    keywords: [
      "véhicule hors usage",
      "VHU",
      "épave réglementation",
      "enlèvement VHU idf",
    ],
  },
  "/certificat-destruction": {
    title: "Certificat de Destruction VHU | Remis en Île-de-France – SIV",
    description:
      "Certificat destruction VHU ✓ Document officiel ✓ Radiation SIV ✓ Assurance ✓ Après enlèvement agréé IDF. Accompagnement étape par étape.",
    keywords: [
      "certificat de destruction",
      "certificat destruction VHU",
      "radier véhicule SIV",
      "destruction véhicule officielle",
    ],
  },
};

export function metadataForServicePath(path: string): Metadata {
  const e = entries[path];
  if (!e) {
    return { title: "Service" };
  }
  return buildMetadata({
    title: e.title,
    description: e.description,
    path,
    keywords: e.keywords,
    absoluteTitle: true,
  });
}
