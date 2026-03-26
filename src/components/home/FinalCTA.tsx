import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-white md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-black md:text-4xl">
          Prêt à faire enlever votre épave ?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Un conseiller vous rappelle sous 30 minutes, 7j/7 de 7h à 22h.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE_CONFIG.phoneHref}
            className="inline-flex w-full max-w-sm items-center justify-center rounded-xl bg-secondary px-8 py-4 text-lg font-bold shadow-lg transition hover:scale-105 hover:bg-secondary-dark sm:w-auto"
          >
            📞 {SITE_CONFIG.phone}
          </a>
          <Link
            href="#devis"
            className="inline-flex w-full max-w-sm items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold hover:bg-white/10 sm:w-auto"
          >
            Formulaire en ligne
          </Link>
        </div>
      </div>
    </section>
  );
}
