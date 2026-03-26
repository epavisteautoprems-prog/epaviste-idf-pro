import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { metadataForServicePath } from "@/lib/service-page-meta";
import { QuoteForm } from "@/components/home/QuoteForm";
import { serviceSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { ServiceFaqBlock } from "@/components/seo/ServiceFaqBlock";
import { EpavisteAgreeLongForm } from "@/content/seo/ServiceLongForm";
import { FAQ_EPAVISTE_AGREE } from "@/content/seo/serviceFaqs";

const path = "/epaviste-agree";

export const metadata: Metadata = metadataForServicePath(path);

const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "Épaviste agréé", path },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema faqs={FAQ_EPAVISTE_AGREE} />
      <JsonLd
        data={serviceSchema({
          name: "Épaviste agréé VHU",
          description:
            "Agrément officiel, traçabilité de la filière destruction, conformité environnementale et administrative pour vos VHU en Île-de-France.",
          url: `${SITE_CONFIG.url}${path}`,
        })}
      />
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Épaviste agréé</span>
          </nav>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Épaviste Agréé Île-de-France | Agrément VHU Préfecture Officiel
          </h1>
          <p className="mt-4 text-xl text-white/90">
            Un agrément VHU garantit une prise en charge légale et le bon
            circuit jusqu’à destruction/recyclage.
          </p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-12 prose prose-lg prose-neutral">
        <EpavisteAgreeLongForm />
        <ServiceFaqBlock faqs={FAQ_EPAVISTE_AGREE} />
      </article>
      <QuoteForm />
    </>
  );
}
