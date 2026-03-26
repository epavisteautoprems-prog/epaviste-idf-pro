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
import { VehiculeHorsUsageLongForm } from "@/content/seo/ServiceLongForm";
import { FAQ_VHU } from "@/content/seo/serviceFaqs";

const path = "/vehicule-hors-usage";

export const metadata: Metadata = metadataForServicePath(path);

const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "Véhicule hors d’usage", path },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema faqs={FAQ_VHU} />
      <JsonLd
        data={serviceSchema({
          name: "Véhicule hors d’usage",
          description:
            "Diagnostic rapide, orientation vers destruction agréée ou rachat si valorisable, partout en Île-de-France.",
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
            <span className="text-white">Véhicule hors d’usage</span>
          </nav>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Enlèvement Véhicule Hors d’Usage (VHU) en IDF | Service Agréé Gratuit
          </h1>
          <p className="mt-4 text-xl text-white/90">
            Évitez les sanctions et les litiges : faites appel à un professionnel
            agréé.
          </p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-12 prose prose-lg prose-neutral">
        <VehiculeHorsUsageLongForm />
        <ServiceFaqBlock faqs={FAQ_VHU} />
      </article>
      <QuoteForm />
    </>
  );
}
