import { siteWideGraphSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * Graphe Organization + LocalBusiness + WebSite (identique au layout).
 * N’utiliser que si une page ne passe pas par RootLayout — sinon doublon JSON-LD.
 */
export function LocalBusinessSchema() {
  return <JsonLd data={siteWideGraphSchema()} />;
}
