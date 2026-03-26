import type { ArticleData, FAQ } from "@/types";
import { CITIES } from "@/lib/constants";

const DEPT_CODES = ["75", "77", "78", "91", "92", "93", "94", "95"] as const;

export type BlogIntent = "comparatif" | "info" | "transactionnel";

export function getBlogDepartmentCode(slug: string): string | null {
  const deptMatch = slug.match(/-(75|77|78|91|92|93|94|95)$/);
  if (deptMatch) return deptMatch[1];

  const city = CITIES.find((c) => slug.includes(c.slug));
  return city?.dept ?? null;
}

export function getBlogIntent(slug: string): BlogIntent {
  if (slug.startsWith("enlevement-vs-rachat-")) return "comparatif";
  if (slug.startsWith("epave-documents-")) return "info";
  if (
    slug.includes("guide") ||
    slug.includes("comment-faire") ||
    slug.includes("sans-carte-grise") ||
    slug.includes("non-gage")
  ) {
    return "info";
  }
  return "transactionnel";
}

export function isSiloDepartmentSlug(slug: string): boolean {
  return DEPT_CODES.some((code) => slug.endsWith(`-${code}`));
}

export function getContextualArticles(
  all: ArticleData[],
  current: ArticleData,
  limit = 4,
): { sameDept: ArticleData[]; sameIntent: ArticleData[] } {
  const dept = getBlogDepartmentCode(current.slug);
  const intent = getBlogIntent(current.slug);
  const others = all.filter((a) => a.slug !== current.slug);

  const sameDept = dept
    ? others
        .filter((a) => getBlogDepartmentCode(a.slug) === dept)
        .slice(0, limit)
    : [];

  const sameIntent = others
    .filter((a) => getBlogIntent(a.slug) === intent)
    .slice(0, limit);

  return { sameDept, sameIntent };
}

export function getRouteAwareBlogFaqs(article: ArticleData): FAQ[] {
  const dept = getBlogDepartmentCode(article.slug);
  const intent = getBlogIntent(article.slug);
  const deptLabel = dept ? `dans le ${dept}` : "en Ile-de-France";

  return [
    {
      question: `Ce guide est-il valable ${deptLabel} ?`,
      answer:
        "Oui. Les principes sont applicables localement, puis adaptes selon acces (sous-sol, copropriete, voie privee) et etat reel du vehicule.",
    },
    {
      question: "Quel est le meilleur moyen d'eviter un report de rendez-vous ?",
      answer:
        "Envoyez avant confirmation: adresse exacte, photos du vehicule, photos d'acces, et documents disponibles. C'est le levier numero 1 pour un premier passage reussi.",
    },
    {
      question:
        intent === "comparatif"
          ? "Comment trancher entre rachat et enlevement gratuit ?"
          : "Peut-on obtenir un devis fiable avant de bloquer un creneau ?",
      answer:
        intent === "comparatif"
          ? "Le choix depend de la valeur residuelle, du delai cible et du niveau de simplicite administrative recherche."
          : "Oui. Une estimation serieuse est possible avec les bonnes informations (modele, etat, photos, acces, documents).",
    },
  ];
}

