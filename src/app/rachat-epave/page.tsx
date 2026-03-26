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
import { RachatEpaveLongForm } from "@/content/seo/ServiceLongForm";
import { FAQ_RACHAT_EPAVE } from "@/content/seo/serviceFaqs";

const path = "/rachat-epave";

export const metadata: Metadata = metadataForServicePath(path);

const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "Rachat épave", path },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema faqs={FAQ_RACHAT_EPAVE} />
      <JsonLd
        data={serviceSchema({
          name: "Rachat d’épave",
          description:
            "Estimation par téléphone, rachat comptant ou virement le jour de l’enlèvement, selon l’état du véhicule et la valorisation des pièces et métaux.",
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
            <span className="text-white">Rachat épave</span>
          </nav>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Rachat Épave Île-de-France | Estimation Gratuite &amp; Paiement
            Immédiat
          </h1>
          <p className="mt-4 text-xl text-white/90">
            Estimation transparente avant déplacement, règlement immédiat si
            accord.
          </p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-12 prose prose-lg prose-neutral">
        <RachatEpaveLongForm />
        <ServiceFaqBlock faqs={FAQ_RACHAT_EPAVE} />
      </article>
      <QuoteForm />
    </>
  );
}
