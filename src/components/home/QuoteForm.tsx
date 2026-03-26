"use client";

import { useState } from "react";

const brands = [
  "Peugeot",
  "Renault",
  "Citroën",
  "VW",
  "BMW",
  "Mercedes",
  "Audi",
  "Toyota",
  "Ford",
  "Fiat",
  "Opel",
  "Nissan",
  "Autre",
];

const years = Array.from({ length: 2024 - 1990 + 1 }, (_, i) =>
  String(2024 - i),
);

const states = [
  "Roulant",
  "En panne",
  "Accidenté",
  "Sans CT",
  "Épave totale",
];

export function QuoteForm({ defaultPostal = "" }: { defaultPostal?: string }) {
  const [marque, setMarque] = useState("");
  const [annee, setAnnee] = useState("");
  const [etat, setEtat] = useState("");
  const [codePostal, setCodePostal] = useState(defaultPostal);
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          marque,
          annee,
          etat,
          codePostal,
          prenom,
          telephone,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.message ?? "Une erreur est survenue.");
        return;
      }
      setSuccess(true);
    } catch {
      setError("Réseau indisponible. Réessayez.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="devis" className="scroll-mt-24 bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
          Obtenez votre{" "}
          <span className="text-secondary underline decoration-secondary decoration-2 underline-offset-4">
            estimation
          </span>{" "}
          en 2 minutes
        </h2>

        {success ? (
          <p className="mt-10 text-center text-xl font-semibold text-accent-light">
            ✅ Parfait ! Nous vous rappelons dans les 30 prochaines minutes.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <label className="text-sm font-medium text-white">
              Marque
              <select
                required
                value={marque}
                onChange={(e) => setMarque(e.target.value)}
                className="mt-1 w-full rounded-lg border-0 bg-white/10 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-secondary"
              >
                <option value="">Choisir…</option>
                {brands.map((b) => (
                  <option key={b} value={b} className="text-neutral-900">
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-white">
              Année
              <select
                required
                value={annee}
                onChange={(e) => setAnnee(e.target.value)}
                className="mt-1 w-full rounded-lg border-0 bg-white/10 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-secondary"
              >
                <option value="">Choisir…</option>
                {years.map((y) => (
                  <option key={y} value={y} className="text-neutral-900">
                    {y}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-white">
              État du véhicule
              <select
                required
                value={etat}
                onChange={(e) => setEtat(e.target.value)}
                className="mt-1 w-full rounded-lg border-0 bg-white/10 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-secondary"
              >
                <option value="">Choisir…</option>
                {states.map((s) => (
                  <option key={s} value={s} className="text-neutral-900">
                    {s}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-medium text-white">
              Code postal
              <input
                required
                pattern="[0-9]{5}"
                placeholder="75001"
                value={codePostal}
                onChange={(e) => setCodePostal(e.target.value)}
                className="mt-1 w-full rounded-lg border-0 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-secondary"
              />
            </label>

            <label className="text-sm font-medium text-white">
              Prénom
              <input
                required
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className="mt-1 w-full rounded-lg border-0 bg-white/10 px-3 py-2 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-secondary"
              />
            </label>

            <label className="text-sm font-medium text-white">
              Téléphone
              <input
                required
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className="mt-1 w-full rounded-lg border-0 bg-white/10 px-3 py-2 text-white ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-secondary"
              />
            </label>

            {error ? (
              <p className="md:col-span-2 text-center text-sm text-red-200">
                {error}
              </p>
            ) : null}

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-secondary py-4 text-xl font-bold text-white shadow-lg transition hover:bg-secondary-dark disabled:opacity-60"
              >
                {loading
                  ? "Envoi…"
                  : "Obtenir mon estimation gratuite →"}
              </button>
              <p className="mt-3 text-center text-sm text-white/80">
                🔒 Données sécurisées · Réponse sous 30 min · Sans engagement
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
