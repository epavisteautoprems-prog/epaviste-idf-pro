import type { BreadcrumbItem } from "@/types";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  return <JsonLd data={breadcrumbSchema(items)} />;
}
