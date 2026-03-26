import type { FAQ } from "@/types";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  return <JsonLd data={faqSchema(faqs)} />;
}
