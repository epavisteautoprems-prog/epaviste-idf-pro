import type { Metadata } from "next";
import { DEPARTMENTS } from "@/lib/constants";
import { getGeoDepartmentByRoute } from "@/lib/geo-data";
import { getDeptPageSeo } from "@/lib/dept-page-seo";
import { buildMetadata, generateDeptMetadata } from "@/lib/seo";

export function metadataForDeptRoute(route: string): Metadata {
  const geo = getGeoDepartmentByRoute(route);
  if (!geo) return { title: "Département" };
  const d = DEPARTMENTS.find((x) => x.code === geo.code);
  if (!d) return { title: geo.name };
  const seo = getDeptPageSeo(geo.code);
  if (seo) {
    return buildMetadata({
      title: seo.metaTitle,
      description: seo.metaDescription,
      path: geo.routePath,
      keywords: [
        `épaviste ${geo.name}`,
        `épave ${geo.code}`,
        "enlèvement épave gratuit",
        "rachat épave IDF",
        "VHU",
        "certificat destruction",
      ],
    });
  }
  return generateDeptMetadata(
    { ...d, description: geo.description },
    geo.routePath,
  );
}
