"use client";

import { CounterAnimation } from "@/components/ui/CounterAnimation";

const checks = [
  "Agrément préfectoral officiel",
  "Enlèvement 100% gratuit, aucun frais caché",
  "Règlement immédiat sur place",
  "Certificat de destruction officiel remis",
  "Disponible 7j/7 de 7h à 22h",
];

export function StatsSection() {
  return (
    <section className="bg-primary py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Le numéro 1 de l’épaviste en Île-de-France
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <p className="text-4xl font-black text-secondary md:text-5xl">
              <CounterAnimation end={2350} suffix="+" />
            </p>
            <p className="mt-2 text-sm text-white/80">Véhicules traités</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-secondary md:text-5xl">
              <CounterAnimation end={98} suffix="%" decimals={0} />
            </p>
            <p className="mt-2 text-sm text-white/80">Clients satisfaits</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-secondary md:text-5xl">
              <CounterAnimation end={24} suffix="h" />
            </p>
            <p className="mt-2 text-sm text-white/80">Délai d’intervention</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-secondary md:text-5xl">
              <CounterAnimation end={8} />
            </p>
            <p className="mt-2 text-sm text-white/80">Départements IDF</p>
          </div>
        </div>

        <ul className="mx-auto mt-12 max-w-3xl space-y-3 text-sm md:text-base">
          {checks.map((c) => (
            <li key={c} className="flex gap-2">
              <span className="text-accent-light">✓</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
