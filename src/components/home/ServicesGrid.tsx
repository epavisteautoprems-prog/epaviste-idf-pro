import Link from "next/link";

const services = [
  {
    emoji: "🚗",
    title: "Enlèvement épave gratuit",
    desc: "Déplacement et enlèvement offerts, partout en IDF",
    href: "/enlevement-epave-gratuit",
  },
  {
    emoji: "💶",
    title: "Rachat épave",
    desc: "Estimation immédiate, paiement comptant ou virement",
    href: "/rachat-epave",
  },
  {
    emoji: "📋",
    title: "Certificat de destruction",
    desc: "Document officiel remis sur place, valeur légale",
    href: "/certificat-destruction",
  },
  {
    emoji: "⏰",
    title: "Intervention sous 24h",
    desc: "Disponible 7j/7 de 7h à 22h, y compris week-end",
    href: "/epaviste-agree",
  },
  {
    emoji: "🗺️",
    title: "Toute l’Île-de-France",
    desc: "Couvrons les 8 départements : 75, 77, 78, 91, 92, 93, 94, 95",
    href: "/epaviste-agree",
  },
  {
    emoji: "🏆",
    title: "Agréé Préfecture",
    desc: "Agrément VHU officiel, conformité réglementaire totale",
    href: "/vehicule-hors-usage",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
          Nos services d’épaviste en Île-de-France
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-neutral-600">
          Une prise en charge complète, rapide et 100% gratuite
        </p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-neutral-600">
          Que vous recherchiez un <strong>épaviste Île-de-France</strong> pour un{" "}
          <strong>enlèvement épave gratuit Ile de France</strong> ou une offre
          de <strong>rachat épave Île-de-France</strong>, chaque carte ci-dessous
          renvoie vers une page détaillée : conditions, délais, documents et
          spécificités des <strong>véhicules hors d’usage</strong>. Nous
          intervenons comme <strong>épaviste agréé IDF</strong> sur les huit
          départements — de la capitale aux bassins les plus périphériques — avec
          le même niveau d’explication, que vous soyez à Paris, en petite ou en
          grande couronne.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.href + s.title}
              href={s.href}
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-4xl"
                aria-hidden
              >
                {s.emoji}
              </div>
              <h3 className="mt-4 text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-neutral-600">{s.desc}</p>
              <span className="mt-4 inline-block text-secondary group-hover:underline">
                En savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
