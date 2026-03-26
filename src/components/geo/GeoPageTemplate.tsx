import Link from "next/link";
import type { ReactNode } from "react";
import type { GeoDeptData } from "@/types";
import { SITE_CONFIG, SERVICE_PAGES } from "@/lib/constants";
import { getDeptPageSeo } from "@/lib/dept-page-seo";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { QuoteForm } from "@/components/home/QuoteForm";

function InlineRichText({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  const re = /\*\*([\s\S]+?)\*\*/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    nodes.push(<strong key={m.index}>{m[1]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function CommunesRichBlock({ markdown }: { markdown: string }) {
  const paras = markdown.trim().split(/\n\n+/);
  return (
    <div className="prose prose-lg prose-neutral mt-8 max-w-none text-neutral-700">
      {paras.map((p, i) => (
        <p key={i} className="leading-relaxed">
          <InlineRichText text={p.trim()} />
        </p>
      ))}
    </div>
  );
}

export function GeoPageTemplate({ dept }: { dept: GeoDeptData }) {
  const deptSeo = getDeptPageSeo(dept.code);
  const pageH1 =
    deptSeo?.pageH1 ??
    `Épaviste ${dept.name} (${dept.code}) | Enlèvement épave gratuit`;
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Épaviste IDF", path: "/" },
    { name: `${dept.name} (${dept.code})`, path: dept.routePath },
  ];

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <FAQSchema faqs={dept.specificFAQs} />

      <section className="relative min-h-[60vh] bg-primary py-20 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <nav className="text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">
              {dept.name} ({dept.code})
            </span>
          </nav>
          <h1 className="mt-6 text-4xl font-black md:text-5xl">{pageH1}</h1>
          <p className="mt-4 max-w-3xl text-xl text-white/90">{dept.description}</p>
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
              Devis gratuit →
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-sm text-white/85">
            Besoin d’un passage prioritaire ? Appel immédiat au{" "}
            <a href={SITE_CONFIG.phoneHref} className="font-bold underline">
              {SITE_CONFIG.phone}
            </a>{" "}
            pour bloquage parking, fuite ou véhicule dangereux.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Épaviste agréé dans le {dept.name}
          </h2>
          <div className="prose prose-lg prose-neutral mt-6 max-w-none whitespace-pre-line text-neutral-700">
            {dept.longDescription}
          </div>
          {deptSeo?.communesRichText ? (
            <>
              <CommunesRichBlock markdown={deptSeo.communesRichText} />
              {dept.code === "75" ? (
                <p className="mt-6 text-neutral-700">
                  <Link
                    href="/rachat-epave"
                    className="font-semibold text-secondary hover:underline"
                  >
                    Rachat d’épave en Île-de-France
                  </Link>
                  {" — "}
                  <Link
                    href="/enlevement-epave-gratuit"
                    className="font-semibold text-secondary hover:underline"
                  >
                    Enlèvement épave gratuit
                  </Link>
                  {" : deux parcours expliqués en détail pour choisir la meilleure option selon votre véhicule."}
                </p>
              ) : null}
            </>
          ) : null}
          <p className="mt-6 text-sm text-neutral-500">
            Repères locaux : {dept.landmarks.join(", ")}.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-primary">
            Nos services dans le {dept.name}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
            Même qualité d’intervention partout en {dept.name} : agrément VHU,
            déplacement offert, certificat officiel.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICE_PAGES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-primary">{s.label}</h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Disponible dans tout le département {dept.code}, délais 24–48 h
                  en règle générale.
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-secondary">
                  En savoir plus →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Villes couvertes — {dept.name}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dept.citySlugs.length
              ? dept.citySlugs.map((slug) => {
                  const label = slug
                    .split("-")
                    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(" ");
                  return (
                    <Link
                      key={slug}
                      href={`/epaviste-${slug}`}
                      className="rounded-xl border border-neutral-200 p-4 text-center font-semibold text-primary transition hover:border-secondary hover:bg-neutral-50"
                    >
                      Épaviste {label}
                    </Link>
                  );
                })
              : dept.cities.map((city) => (
                  <div
                    key={city}
                    className="rounded-xl border border-neutral-100 bg-neutral-50 p-4 text-center text-sm text-neutral-700"
                  >
                    {city}
                  </div>
                ))}
          </div>
        </div>
      </section>

      <QuoteForm defaultPostal={dept.defaultPostal} />

      <section className="bg-primary py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-black">Intervention urgente dans le {dept.name}</h2>
            <p className="mt-2 text-white/90">
              Épaviste local, créneaux rapides, devis immédiat et prise en charge 7j/7.
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
              Recevoir un devis
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            Témoignages — {dept.name}
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {dept.testimonials.map((t) => (
              <blockquote
                key={t.author + t.date}
                className="rounded-xl border-l-4 border-secondary bg-white p-6 shadow-sm"
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

      <section className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary">
            FAQ — épave & VHU dans le {dept.name}
          </h2>
          <dl className="mt-8 space-y-6">
            {dept.specificFAQs.map((f) => (
              <div key={f.question}>
                <dt className="font-semibold text-primary">{f.question}</dt>
                <dd className="mt-2 text-neutral-600">{f.answer}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="text-secondary hover:underline">
              ← Accueil
            </Link>
            <Link href="/enlevement-epave-gratuit" className="text-secondary hover:underline">
              Enlèvement gratuit
            </Link>
            <Link href="/rachat-epave" className="text-secondary hover:underline">
              Rachat épave
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
