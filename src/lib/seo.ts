import type { Metadata } from "next";
import type { ArticleData, CitySummary, DeptSummary } from "@/types";
import { SITE_CONFIG } from "@/lib/constants";

const defaultOgImage =
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&h=630&fit=crop&q=80";

function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const base = SITE_CONFIG.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function buildMetadata(input: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  /** Évite le suffixe du layout (template %s | marque) quand le titre est déjà optimisé SERP */
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(input.path ?? "/");
  const ogImage = input.ogImage
    ? absoluteUrl(input.ogImage)
    : absoluteUrl(defaultOgImage);
  const titleField = input.absoluteTitle
    ? { absolute: input.title }
    : input.title;
  return {
    title: titleField,
    description: input.description,
    keywords: input.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      title: typeof titleField === "string" ? titleField : input.title,
      description: input.description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "fr_FR",
      type: input.type ?? "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
      ...(input.publishedTime
        ? { publishedTime: input.publishedTime }
        : undefined),
      ...(input.modifiedTime
        ? { modifiedTime: input.modifiedTime }
        : undefined),
    },
    twitter: {
      card: "summary_large_image",
      title: typeof titleField === "string" ? titleField : input.title,
      description: input.description,
      images: [ogImage],
    },
  };
}

export function generateServiceMetadata(
  service: string,
  keyword: string,
  path: string,
  extraKeywords?: string[],
): Metadata {
  const title = `${service} | ${SITE_CONFIG.name}`;
  const description = `${service} en Île-de-France. ${SITE_CONFIG.description} Mot-clé : ${keyword}.`;
  return buildMetadata({
    title,
    description,
    keywords: [
      keyword,
      "épaviste IDF",
      "enlèvement épave",
      "VHU",
      "certificat destruction",
      "rachat épave",
      ...(extraKeywords ?? []),
    ],
    path,
  });
}

export function generateDeptMetadata(
  dept: DeptSummary & { description?: string },
  path: string,
): Metadata {
  const title = `Épaviste ${dept.name} (${dept.code}) | Enlèvement épave gratuit`;
  const description =
    dept.description ??
    `Épaviste agréé dans le ${dept.name} (${dept.code}). Enlèvement épave gratuit, rachat au meilleur prix, certificat de destruction VHU. Intervention rapide en Île-de-France.`;
  return buildMetadata({
    title,
    description,
    keywords: [
      `épaviste ${dept.name}`,
      `épave ${dept.code}`,
      "enlèvement gratuit",
      "rachat épave",
      "VHU",
      "certificat destruction",
    ],
    path,
  });
}

export function generateCityMetadata(
  city: CitySummary,
  path: string,
): Metadata {
  const title = `Épaviste ${city.name} | Enlèvement & Rachat Épave Gratuit 24h/24 – ${city.dept}`;
  const description = `${city.description} Contactez ${SITE_CONFIG.name} pour un devis et un enlèvement sous 24–48 h.`;
  return buildMetadata({
    title,
    description,
    keywords: [
      `épaviste ${city.name}`,
      `enlèvement épave ${city.name}`,
      `rachat épave ${city.dept}`,
      "VHU",
      "certificat destruction",
    ],
    path,
  });
}

export function generateBlogMetadata(article: ArticleData): Metadata {
  const path = `/blog/${article.slug}`;
  const og =
    article.image.startsWith("http") ? article.image : absoluteUrl(article.image);
  return buildMetadata({
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    path,
    ogImage: og,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}
