"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DEPARTMENTS,
  DEPT_ROUTE_BY_SLUG,
  SERVICE_PAGES,
  SITE_CONFIG,
} from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const deptLinks = DEPARTMENTS.map((d) => ({
    label: `${d.name} (${d.code})`,
    href: DEPT_ROUTE_BY_SLUG[d.slug] ?? `/epaviste-${d.slug}`,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-2xl font-bold text-primary">{SITE_CONFIG.name}</span>
          <span className="text-xs font-medium text-secondary">Île-de-France</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principale">
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center gap-1 font-medium text-neutral-800 hover:text-primary"
            >
              Services
              <span className="text-xs" aria-hidden>
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-full z-20 mt-2 min-w-[240px] rounded-xl border border-neutral-200 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {SERVICE_PAGES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block px-4 py-2 text-sm hover:bg-neutral-50"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center gap-1 font-medium text-neutral-800 hover:text-primary"
            >
              Zones IDF
              <span className="text-xs" aria-hidden>
                ▾
              </span>
            </button>
            <div className="invisible absolute left-0 top-full z-20 mt-2 max-h-80 min-w-[260px] overflow-auto rounded-xl border border-neutral-200 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {deptLinks.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="block px-4 py-2 text-sm hover:bg-neutral-50"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blog" className="font-medium hover:text-primary">
            Blog
          </Link>
          <Link href="/faq" className="font-medium hover:text-primary">
            FAQ
          </Link>
          <Link href="/contact" className="font-medium hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <a
            href={SITE_CONFIG.phoneHref}
            className="rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white shadow hover:bg-secondary-dark"
          >
            📞 Appeler
          </a>
        </div>

        <button
          type="button"
          className="inline-flex flex-col gap-1.5 rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          onClick={() => setOpen(true)}
        >
          <span className="h-0.5 w-7 bg-primary" />
          <span className="h-0.5 w-7 bg-primary" />
          <span className="h-0.5 w-7 bg-primary" />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[70] bg-black/40 transition md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[80] w-[min(100%,320px)] transform bg-white shadow-2xl transition md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <span className="font-bold text-primary">Menu</span>
          <button
            type="button"
            className="text-2xl leading-none"
            aria-label="Fermer"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="flex max-h-[calc(100vh-56px)] flex-col gap-1 overflow-y-auto p-4">
          <p className="text-xs font-bold uppercase text-neutral-500">Services</p>
          {SERVICE_PAGES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-lg px-2 py-2 hover:bg-neutral-50"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <p className="mt-2 text-xs font-bold uppercase text-neutral-500">
            Départements
          </p>
          {deptLinks.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="rounded-lg px-2 py-2 hover:bg-neutral-50"
              onClick={() => setOpen(false)}
            >
              {d.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="mt-2 rounded-lg px-2 py-2 font-medium hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/faq"
            className="rounded-lg px-2 py-2 font-medium hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-2 py-2 font-medium hover:bg-neutral-50"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <a
            href={SITE_CONFIG.phoneHref}
            className="mt-4 rounded-full bg-secondary py-3 text-center font-bold text-white"
            onClick={() => setOpen(false)}
          >
            📞 Appeler
          </a>
        </nav>
      </div>
    </header>
  );
}
