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
import { EnlevementEpaveGratuitLongForm } from "@/content/seo/ServiceLongForm";
import { FAQ_ENLEVEMENT_EPAVE } from "@/content/seo/serviceFaqs";

const path = "/enlevement-epave-gratuit";

export const metadata: Metadata = metadataForServicePath(path);

const crumbs = [
  { name: "Accueil", path: "/" },
  { name: "Enlèvement épave gratuit", path },
];

export default function Page() {
  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema faqs={FAQ_ENLEVEMENT_EPAVE} />
      <JsonLd
        data={serviceSchema({
          name: "Enlèvement épave gratuit",
          description:
            "Déplacement et prise en charge sans frais pour le particulier dans le cadre réglementaire VHU agréé, sur tout le territoire d’Île-de-France.",
          url: `${SITE_CONFIG.url}${path}`,
          areaServed: "Île-de-France",
        })}
      />
      <div className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-4xl px-4">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Enlèvement épave gratuit</span>
          </nav>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">
            Enlèvement Épave Gratuit en Île-de-France | Intervention 24h/24
          </h1>
          <p className="mt-4 text-xl text-white/90">
            Déplacement offert, prise en charge par épaviste agréé VHU,
            certificat de destruction remis pour votre tranquillité
            administrative.
          </p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-12 prose prose-lg prose-neutral">
        <EnlevementEpaveGratuitLongForm />
        <ServiceFaqBlock faqs={FAQ_ENLEVEMENT_EPAVE} />
      </article>
      <QuoteForm />
    </>
  );
}
