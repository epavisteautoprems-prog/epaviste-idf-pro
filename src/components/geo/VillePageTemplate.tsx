import Link from "next/link";
import type { GeoCityData } from "@/types";
import { CITIES, SITE_CONFIG, SERVICE_PAGES } from "@/lib/constants";
import { getCityPageSeo } from "@/lib/city-page-seo";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { QuoteForm } from "@/components/home/QuoteForm";

function buildCityCases(city: GeoCityData) {
  const n1 = city.neighborhoods[0] ?? "centre-ville";
  const n2 = city.neighborhoods[1] ?? "quartier residentiel";
  const n3 = city.neighborhoods[2] ?? "zone d'activite";
  const r1 = city.roads[0] ?? "axes principaux";
  const r2 = city.roads[1] ?? "rocade locale";

  return [
    {
      title: `Stationnement bloque en residence a ${n1}`,
      context:
        "Vehicule immobilise depuis plusieurs semaines, sortie parking partiellement bloquee.",
      solution:
        "Verification des acces en amont, passage plateau sur creneau court et retrait du vehicule sans second rendez-vous.",
      result:
        "Place liberee rapidement et dossier VHU engage avec justificatifs remis.",
    },
    {
      title: `Vehicule non roulant en sous-sol vers ${n2}`,
      context:
        "Voiture en panne sans batterie, acces rampe et hauteur a controler avant intervention.",
      solution:
        "Validation photo + dimensions, materiel adapte au chargement en environnement contraint.",
      result:
        "Enlevement realise dans le creneau confirme, sans blocage de la copropriete.",
    },
    {
      title: `Epave accidentee proche de ${r1} / ${r2}`,
      context:
        "Vehicule endommage apres sinistre, besoin d'un retrait rapide pour securiser la zone.",
      solution:
        "Priorisation de la demande, estimation claire rachat vs enlèvement gratuit selon l'etat reel.",
      result:
        "Prise en charge rapide et parcours administratif clarifie jusqu'au certificat.",
    },
    {
      title: `Utilitaire en fin de vie sur ${n3}`,
      context:
        "Vehicule d'activite inutilisable, besoin d'un retrait planifie sans impacter l'exploitation.",
      solution:
        "Organisation d'un passage adapte aux horaires du site avec verification des points d'acces.",
      result:
        "Intervention propre, delai respecte et suivi documentaire complet.",
    },
  ];
}

function buildDocumentsLinks(city: GeoCityData) {
  return [
    {
      title: "Certificat de non-gage (CSA)",
      description:
        `Generez le certificat de situation administrative pour un vehicule immatricule a ${city.name}.`,
      href: "https://siv.interieur.gouv.fr/map-usg-ui/do/csa_retour_dem_certificat",
      cta: "Generer le non-gage",
    },
    {
      title: "Historique officiel du vehicule (HistoVec)",
      description:
        "Consultez l'historique administratif officiel avant cession ou mise en destruction.",
      href: "https://histovec.interieur.gouv.fr/histovec/accueil",
      cta: "Acceder a HistoVec",
    },
    {
      title: "Aide officielle documents VHU",
      description:
        "Consultez les formalites administratives officielles pour la cession et la destruction d'un vehicule.",
      href: "https://www.service-public.fr/particuliers/vosdroits/F1468",
      cta: "Voir la fiche officielle",
    },
  ];
}

export function VillePageTemplate({ city }: { city: GeoCityData }) {
  const citySeo = getCityPageSeo(city.slug);
  const pageH1 =
    citySeo?.pageH1 ??
    `Épaviste ${city.name} (${city.deptCode}) — gratuit & agréé`;
  const villeTestimonials = city.testimonials.slice(0, 2);
  const nearbyCities = CITIES.filter(
    (c) => c.dept === city.deptCode && c.slug !== city.slug,
  )
    .sort((a, b) => b.population - a.population)
    .slice(0, 8);
  const topSearchedCities = [...CITIES]
    .sort((a, b) => b.population - a.population)
    .slice(0, 12);
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: city.deptName, path: city.deptRoutePath },
    { name: city.name, path: `/epaviste-${city.slug}` },
  ];
  const cityCases = buildCityCases(city).slice(0, 3);
  const documentLinks = buildDocumentsLinks(city);

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema faqs={city.specificFAQs} />

      <section className="min-h-[55vh] bg-primary py-16 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href={city.deptRoutePath} className="hover:text-white">
              {city.deptName}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{city.name}</span>
          </nav>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">{pageH1}</h1>
          <p className="mt-4 max-w-3xl text-xl text-white/90">{city.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-lg font-bold shadow-lg hover:bg-secondary-dark"
            >
              📞 {SITE_CONFIG.phone}
            </a>
            <Link
              href="#devis"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold hover:bg-white/10"
            >
              Estimation 2 min →
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-white/85">
            Ligne directe locale :{" "}
            <a href={SITE_CONFIG.phoneHref} className="font-bold underline">
              {SITE_CONFIG.phone}
            </a>{" "}
            pour un enlèvement rapide dans {city.name} et secteurs voisins.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Enlèvement d’épave à {city.name}
          </h2>
          <div className="prose prose-lg prose-neutral mt-6 max-w-none text-neutral-700">
            <p>{city.longDescription}</p>
            <p>
              Quartiers et secteurs souvent couverts :{" "}
              <strong>{city.neighborhoods.join(", ")}</strong>. Axes et accès
              fréquents : <strong>{city.roads.join(", ")}</strong>.
            </p>
            <p>
              Population approximative :{" "}
              <strong>{city.population.toLocaleString("fr-FR")}</strong>{" "}
              habitants — forte densité de circulation : un enlèvement rapide
              limite la gêne et libère votre stationnement.
            </p>
          </div>
          <Link
            href={city.deptRoutePath}
            className="mt-6 inline-block text-sm font-semibold text-secondary hover:underline"
          >
            ← Voir tout le département {city.deptName}
          </Link>
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Services à {city.name}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PAGES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md"
              >
                <h3 className="font-bold text-primary">{s.label}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Intervention locale à {city.name} et alentours, sous 24–48 h.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Villes voisines où nous intervenons aussi
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-600">
            Maillage local renforcé dans le {city.deptName} : intervention rapide
            sur les communes proches avec la même qualité de service.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {nearbyCities.map((c) => (
              <Link
                key={c.slug}
                href={`/epaviste-${c.slug}`}
                className="rounded-lg border border-neutral-200 px-4 py-3 text-sm font-semibold text-primary transition hover:border-secondary hover:bg-neutral-50"
              >
                Épaviste {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Villes les plus recherchées en Île-de-France
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {topSearchedCities.map((c) => (
              <Link
                key={`top-${c.slug}`}
                href={`/epaviste-${c.slug}`}
                className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:border-secondary hover:bg-neutral-50"
              >
                Épaviste {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm defaultPostal={city.defaultPostal} />

      <section className="bg-primary py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-black">Besoin d’un épaviste à {city.name} ?</h2>
            <p className="mt-2 text-white/90">
              Appel immédiat, estimation gratuite et intervention 24–48 h.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={SITE_CONFIG.phoneHref}
              className="rounded-xl bg-secondary px-6 py-3 font-bold text-white hover:bg-secondary-dark"
            >
              📞 Appeler {SITE_CONFIG.phone}
            </a>
            <Link
              href="#devis"
              className="rounded-xl border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              Devis immédiat
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-10 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-xl font-black">
              Urgence enlèvement épave à {city.name} ?
            </h2>
            <p className="mt-2 text-white/90">
              Appelle maintenant, on te confirme un créneau rapide selon ton
              secteur et l’accès du véhicule.
            </p>
          </div>
          <a
            href={SITE_CONFIG.phoneHref}
            className="rounded-xl bg-white px-6 py-3 font-black text-secondary hover:bg-neutral-100"
          >
            📞 Urgence : {SITE_CONFIG.phone}
          </a>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Avis clients — {city.name}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {villeTestimonials.map((t) => (
              <blockquote
                key={t.author + t.date}
                className="rounded-xl border-l-4 border-secondary bg-neutral-50 p-6"
              >
                <p className="italic text-neutral-700">“{t.text}”</p>
                <footer className="mt-4 text-sm text-neutral-500">
                  {t.author} — {t.city} — {t.date}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            FAQ — {city.name}
          </h2>
          <dl className="mt-8 space-y-6">
            {city.specificFAQs.map((f) => (
              <div key={f.question}>
                <dt className="font-semibold text-primary">{f.question}</dt>
                <dd className="mt-2 text-neutral-600">{f.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Documents utiles avant enlèvement a {city.name}
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-600">
            Liens externes officiels pour preparer votre dossier (non-gage,
            historique, formalites administratives).
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {documentLinks.map((doc) => (
              <article
                key={doc.title}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-primary">{doc.title}</h3>
                <p className="mt-3 text-sm text-neutral-700">{doc.description}</p>
                <a
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-white hover:bg-secondary-dark"
                >
                  {doc.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Cas frequents a {city.name}
          </h2>
          <p className="mt-3 max-w-3xl text-neutral-600">
            Exemples concrets de situations traitees localement pour aider a
            estimer le type d&apos;intervention selon votre acces et l&apos;etat du
            vehicule.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {cityCases.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-6"
              >
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Contexte: </span>
                  {item.context}
                </p>
                <p className="mt-2 text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Solution: </span>
                  {item.solution}
                </p>
                <p className="mt-2 text-sm text-neutral-700">
                  <span className="font-semibold text-neutral-900">Resultat: </span>
                  {item.result}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
