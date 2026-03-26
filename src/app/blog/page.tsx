import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsSorted } from "@/lib/blog";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SITE_CONFIG } from "@/lib/constants";

const deptSilos = [
  { label: "Paris (75)", href: "/blog/epave-sous-sol-75" },
  { label: "Seine-et-Marne (77)", href: "/blog/epave-sans-carte-grise-77" },
  { label: "Yvelines (78)", href: "/blog/epave-weekend-78" },
  { label: "Essonne (91)", href: "/blog/epave-utilitaire-91" },
  { label: "Hauts-de-Seine (92)", href: "/blog/epave-sous-sol-92" },
  { label: "Seine-Saint-Denis (93)", href: "/blog/epave-accidentee-93" },
  { label: "Val-de-Marne (94)", href: "/blog/epave-sans-cle-94" },
  { label: "Val-d'Oise (95)", href: "/blog/epave-sans-batterie-95" },
];

const intentSilos = [
  { label: "Info documents 75", href: "/blog/epave-documents-75" },
  { label: "Comparatif 75", href: "/blog/enlevement-vs-rachat-75" },
  { label: "Info documents 77", href: "/blog/epave-documents-77" },
  { label: "Comparatif 77", href: "/blog/enlevement-vs-rachat-77" },
  { label: "Info documents 78", href: "/blog/epave-documents-78" },
  { label: "Comparatif 78", href: "/blog/enlevement-vs-rachat-78" },
  { label: "Info documents 91", href: "/blog/epave-documents-91" },
  { label: "Comparatif 91", href: "/blog/enlevement-vs-rachat-91" },
  { label: "Info documents 92", href: "/blog/epave-documents-92" },
  { label: "Comparatif 92", href: "/blog/enlevement-vs-rachat-92" },
  { label: "Info documents 93", href: "/blog/epave-documents-93" },
  { label: "Comparatif 93", href: "/blog/enlevement-vs-rachat-93" },
  { label: "Info documents 94", href: "/blog/epave-documents-94" },
  { label: "Comparatif 94", href: "/blog/enlevement-vs-rachat-94" },
  { label: "Info documents 95", href: "/blog/epave-documents-95" },
  { label: "Comparatif 95", href: "/blog/enlevement-vs-rachat-95" },
];

export const metadata: Metadata = {
  title: "Blog épaviste — guides VHU & enlèvement IDF",
  description:
    "Articles pratiques : enlèvement gratuit, rachat d’épave, certificat de destruction, démarches en Île-de-France.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
};

export default function BlogIndexPage() {
  const posts = getAllPostsSorted();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-black text-primary">Blog épaviste IDF</h1>
      <p className="mt-4 max-w-2xl text-lg text-neutral-600">
        Guides rédigés par nos experts pour vendre, faire enlever ou détruire
        légalement votre véhicule hors d’usage.
      </p>
      <section className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
        <h2 className="text-xl font-bold text-primary">Silo SEO par département</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Requêtes longue traîne locales : un guide dédié par département pour capter des recherches moins concurrentielles.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {deptSilos.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:border-secondary hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
      <section className="mt-6 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-xl font-bold text-primary">Silo SEO par intention</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Guides informationnels et comparatifs pour capter des recherches longue traine a faible concurrence.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {intentSilos.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-primary transition hover:border-secondary hover:bg-neutral-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <ArticleCard key={p.slug} post={p} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/#devis"
          className="inline-flex rounded-full bg-secondary px-6 py-3 font-bold text-white hover:bg-secondary-dark"
        >
          Devis gratuit en 2 minutes
        </Link>
      </div>
    </div>
  );
}
