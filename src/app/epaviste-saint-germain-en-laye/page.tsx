import type { Metadata } from "next";
import { metadataForCitySlug } from "@/lib/city-meta";
import { CityRoutePage } from "@/components/geo/CityRoutePage";

const SLUG = "saint-germain-en-laye";

export const metadata: Metadata = metadataForCitySlug(SLUG);

export default function Page() {
  return <CityRoutePage slug={SLUG} />;
}
