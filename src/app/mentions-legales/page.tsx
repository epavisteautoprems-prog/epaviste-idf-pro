import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Épaviste IDF.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_CONFIG.url}/mentions-legales` },
};

export default function Page() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 prose prose-neutral">
      <h1>Mentions légales</h1>
      <p>
        <strong>Éditeur du site :</strong> {SITE_CONFIG.name}
        <br />
        Contact : {SITE_CONFIG.email} — {SITE_CONFIG.phone}
        <br />
        Adresse : {SITE_CONFIG.address}
      </p>
      <p>
        <strong>Hébergement :</strong> Vercel Inc. (si déployé sur Vercel) —
        adapter selon votre hébergeur effectif.
      </p>
      <p>
        Les informations fournies sur ce site le sont à titre indicatif et ne
        remplacent pas la réglementation applicable ni les conseils des
        autorités administratives.
      </p>
    </article>
  );
}
