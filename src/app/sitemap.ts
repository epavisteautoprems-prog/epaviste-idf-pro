import type { MetadataRoute } from "next";
import {
  CITIES,
  DEPARTMENTS,
  DEPT_ROUTE_BY_SLUG,
  SERVICE_PAGES,
  SITE_CONFIG,
} from "@/lib/constants";
import { getPostSlugs } from "@/lib/blog";

const base = SITE_CONFIG.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  const servicePriority: Record<string, number> = {
    "/enlevement-epave-gratuit": 0.95,
    "/rachat-epave": 0.95,
    "/epaviste-agree": 0.9,
    "/vehicule-hors-usage": 0.9,
    "/certificat-destruction": 0.9,
  };

  for (const s of SERVICE_PAGES) {
    entries.push({
      url: `${base}${s.href}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: servicePriority[s.href] ?? 0.9,
    });
  }

  for (const d of DEPARTMENTS) {
    const path = DEPT_ROUTE_BY_SLUG[d.slug];
    if (path) {
      entries.push({
        url: `${base}${path}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }
  }

  for (const c of CITIES) {
    entries.push({
      url: `${base}/epaviste-${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  entries.push({
    url: `${base}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.75,
  });

  for (const slug of getPostSlugs()) {
    entries.push({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    });
  }

  const staticPages: { path: string; priority: number }[] = [
    { path: "/faq", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
    { path: "/a-propos", priority: 0.5 },
    { path: "/mentions-legales", priority: 0.5 },
  ];

  for (const p of staticPages) {
    entries.push({
      url: `${base}${p.path}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: p.priority,
    });
  }

  return entries;
}
