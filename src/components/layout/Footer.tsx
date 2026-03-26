import Link from "next/link";
import {
  CITIES,
  DEPARTMENTS,
  DEPT_ROUTE_BY_SLUG,
  SERVICE_PAGES,
  SITE_CONFIG,
} from "@/lib/constants";
const cityLinks = CITIES.slice(0, 8).map((c) => ({
  href: `/epaviste-${c.slug}`,
  label: c.name,
}));

export function Footer() {
  return (
    <footer className="bg-gray-900 text-neutral-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-white">{SITE_CONFIG.name}</p>
          <p className="mt-3 text-sm text-neutral-300">{SITE_CONFIG.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-400">
            <li>✓ Agréé VHU Préfecture</li>
            <li>✓ Assurance RC Pro</li>
            <li>✓ Intervention 7j/7</li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-white">Nos services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICE_PAGES.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-secondary">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-white">Zones IDF</p>
          <ul className="mt-4 space-y-2 text-sm">
            {DEPARTMENTS.map((d) => (
              <li key={d.slug}>
                <Link
                  href={DEPT_ROUTE_BY_SLUG[d.slug] ?? `/epaviste-${d.slug}`}
                  className="hover:text-secondary"
                >
                  {d.name} ({d.code})
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-bold text-white">Grandes villes</p>
          <ul className="mt-2 space-y-2 text-sm">
            {cityLinks.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="hover:text-secondary">
                  Épaviste {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-bold text-white">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={SITE_CONFIG.phoneHref} className="hover:text-secondary">
                {SITE_CONFIG.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-secondary"
              >
                {SITE_CONFIG.email}
              </a>
            </li>
            <li>{SITE_CONFIG.openingHours}</li>
            <li>{SITE_CONFIG.address}</li>
          </ul>
          <p className="mt-6 text-sm text-neutral-400">
            Suivez-nous :{" "}
            <span className="text-neutral-500">Facebook · Google Business</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-neutral-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/mentions-legales" className="hover:text-white">
              Mentions légales
            </Link>
            <Link href="/a-propos" className="hover:text-white">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
