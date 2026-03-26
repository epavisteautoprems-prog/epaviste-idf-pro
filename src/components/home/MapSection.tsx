export function MapSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-primary">
          Intervention dans toute l’Île-de-France
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
          Paris et les 7 départements de grande couronne : un seul numéro, une
          équipe dédiée.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
          <iframe
            title="Carte Île-de-France"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.8%2C48.3%2C3.2%2C49.1&layer=mapnik"
            className="h-[320px] w-full md:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
