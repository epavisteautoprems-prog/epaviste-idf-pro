import type { Metadata } from "next";
import { metadataForCitySlug } from "@/lib/city-meta";
import { CityRoutePage } from "@/components/geo/CityRoutePage";

const SLUG = "vitry-sur-seine";

export const metadata: Metadata = metadataForCitySlug(SLUG);

export default function Page() {
  return <CityRoutePage slug={SLUG} />;
}
