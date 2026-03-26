import { SITE_CONFIG } from "@/lib/constants";

const reviews = [
  {
    name: "Michel D.",
    city: "Paris 15e",
    date: "14 janv. 2025",
    text: "Enlèvement rapide, équipe professionnelle. Le certificat a été remis sans attente, je recommande vivement.",
  },
  {
    name: "Fatima K.",
    city: "Créteil",
    date: "9 déc. 2024",
    text: "Rachat correct pour ma vieille Clio en panne. Explications claires et déplacement gratuit comme promis.",
  },
  {
    name: "Jean-Pierre M.",
    city: "Boulogne",
    date: "6 janv. 2025",
    text: "Certificat remis le jour même, impeccable. Très bon contact au téléphone avant l’intervention.",
  },
  {
    name: "Nadia B.",
    city: "Saint-Denis",
    date: "22 déc. 2024",
    text: "J’ai appelé le matin, ils étaient là l’après-midi. Service efficace dans une cour difficile d’accès.",
  },
  {
    name: "Thomas R.",
    city: "Versailles",
    date: "10 janv. 2025",
    text: "Prix honnête, déplacement gratuit confirmé. Process simple pour la paperasse.",
  },
  {
    name: "Amina S.",
    city: "Montreuil",
    date: "4 mars 2025",
    text: "Très bonne expérience, je recommande. Équipe ponctuelle et respectueuse avec les voisins.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
          Ce que disent nos clients en IDF
        </h2>
        <p className="mx-auto mt-4 max-w-xl rounded-full bg-secondary/10 px-4 py-2 text-center text-sm font-semibold text-primary">
          ⭐⭐⭐⭐⭐ {SITE_CONFIG.rating}/5 · {SITE_CONFIG.reviewCount} avis Google
          vérifiés
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <blockquote
              key={r.name + r.date}
              className="rounded-r-xl border-l-4 border-secondary bg-neutral-50 p-6"
            >
              <p className="text-secondary" aria-hidden>
                ★★★★★
              </p>
              <p className="mt-3 italic text-neutral-700">“{r.text}”</p>
              <footer className="mt-4 text-sm font-medium text-neutral-500">
                {r.name} — {r.city} — {r.date}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
