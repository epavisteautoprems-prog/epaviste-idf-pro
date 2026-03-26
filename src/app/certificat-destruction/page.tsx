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
import { CertificatDestructionLongForm } from "@/content/seo/ServiceLongForm";
import { FAQ_CERTIFICAT_DESTRUCTION } from "@/content/seo/serviceFaqs";

const path = "/certificat-destruction";

export const metadata: Metadata = metadataForServicePath(path);

const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "Certificat de destruction", path },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema faqs={FAQ_CERTIFICAT_DESTRUCTION} />
      <JsonLd
        data={serviceSchema({
          name: "Certificat de destruction VHU",
          description:
            "Document officiel remis après prise en charge par un épaviste agréé, pour radiation au SIV et lever de responsabilité.",
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
            <span className="text-white">Certificat de destruction</span>
          </nav>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Certificat de Destruction VHU | Remis Immédiatement en Île-de-France
          </h1>
          <p className="mt-4 text-xl text-white/90">
            Indispensable pour radier votre véhicule et clôturer votre dossier.
          </p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-12 prose prose-lg prose-neutral">
        <CertificatDestructionLongForm />
        <ServiceFaqBlock faqs={FAQ_CERTIFICAT_DESTRUCTION} />
      </article>
      <QuoteForm />
    </>
  );
}
