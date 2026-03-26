import type { Metadata } from "next";
import { CITIES } from "@/lib/constants";
import { getGeoCity } from "@/lib/geo-data";
import { getCityPageSeo } from "@/lib/city-page-seo";
import { buildMetadata, generateCityMetadata } from "@/lib/seo";

export function metadataForCitySlug(slug: string): Metadata {
  const city = CITIES.find((c) => c.slug === slug);
  const geo = getGeoCity(slug);
  if (!city || !geo) return { title: "Ville" };
  const seo = getCityPageSeo(slug);
  if (seo) {
    return buildMetadata({
      title: seo.metaTitle,
      description: seo.metaDescription,
      path: `/epaviste-${slug}`,
      keywords: [
        `épaviste ${city.name}`,
        `enlèvement épave ${city.name}`,
        `rachat épave ${city.dept}`,
        "VHU",
        "certificat destruction",
      ],
    });
  }
  return generateCityMetadata(city, `/epaviste-${slug}`);
}
