import type { Metadata } from "next";
import { FaqSection } from "@/components/home/FaqSection";
import { SITE_CONFIG } from "@/lib/constants";
import { QuoteForm } from "@/components/home/QuoteForm";

export const metadata: Metadata = {
  title: "FAQ enlèvement épave & VHU",
  description:
    "Réponses sur enlèvement gratuit, documents, délais, certificat de destruction et rachat d’épave en Île-de-France.",
  alternates: { canonical: `${SITE_CONFIG.url}/faq` },
};

export default function Page() {
  return (
    <>
      <div className="bg-primary py-12 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-black">Questions fréquentes</h1>
          <p className="mt-3 text-white/90">
            Tout savoir sur l’enlèvement d’épave en IDF avant de nous appeler.
          </p>
        </div>
      </div>
      <FaqSection />
      <QuoteForm />
    </>
  );
}
