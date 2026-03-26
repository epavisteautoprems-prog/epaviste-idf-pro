import { notFound } from "next/navigation";
import { getGeoCity } from "@/lib/geo-data";
import { VillePageTemplate } from "@/components/geo/VillePageTemplate";

export function CityRoutePage({ slug }: { slug: string }) {
  const city = getGeoCity(slug);
  if (!city) notFound();
  return <VillePageTemplate city={city} />;
}
