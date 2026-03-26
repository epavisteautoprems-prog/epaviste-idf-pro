import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { QuoteForm } from "@/components/home/QuoteForm";

export const metadata: Metadata = {
  title: "Contact épaviste IDF",
  description: `Contactez ${SITE_CONFIG.name} : ${SITE_CONFIG.phone}, 7j/7 de 7h à 22h. Devis gratuit sous 30 minutes.`,
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function Page() {
  return (
    <>
      <div className="bg-primary py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-4xl font-black">Contact</h1>
          <p className="mt-4 text-lg text-white/90">
            <a href={SITE_CONFIG.phoneHref} className="font-bold underline">
              {SITE_CONFIG.phone}
            </a>
            <br />
            <a href={`mailto:${SITE_CONFIG.email}`} className="underline">
              {SITE_CONFIG.email}
            </a>
            <br />
            {SITE_CONFIG.openingHours}
          </p>
        </div>
      </div>
      <QuoteForm />
    </>
  );
}
