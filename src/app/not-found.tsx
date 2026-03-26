import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n’existe pas.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-sm font-semibold text-secondary">Erreur 404</p>
      <h1 className="mt-2 text-3xl font-black text-primary">
        Page introuvable
      </h1>
      <p className="mt-4 text-neutral-600">
        Le lien est peut-être obsolète. Revenez à l’accueil ou contactez-nous
        pour un enlèvement d’épave en Île-de-France.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-xl bg-secondary px-6 py-3 font-bold text-white hover:bg-secondary-dark"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
