const steps = [
  {
    n: "01",
    title: "Contactez-nous",
    body: "Appelez ou remplissez le formulaire en ligne. Devis 100% gratuit et sans engagement en moins de 2 minutes.",
    icon: "📞",
  },
  {
    n: "02",
    title: "On se déplace chez vous",
    body: "Notre équipe intervient sous 24h dans tout le département. Déplacement gratuit, nous venons à l’adresse de votre choix.",
    icon: "🚚",
  },
  {
    n: "03",
    title: "On règle tout",
    body: "Certificat de destruction remis sur place. Règlement immédiat si rachat. Votre véhicule est pris en charge légalement.",
    icon: "✅",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-neutral-50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
          Enlèvement de votre épave en 3 étapes simples
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-neutral-600">
          Le processus est identique pour un <strong>enlèvement véhicule hors usage IDF</strong>{" "}
          classique ou lorsque nous combinons passage du plateau et{" "}
          <strong>rachat épave</strong> : vous validez l’accès et les papiers,
          nous confirmons le créneau et le matériel (plateau, treuil si
          nécessaire), puis nous clôturons la mission avec les justificatifs
          attendus par le SIV ou votre assurance.
        </p>

        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-stretch md:justify-between">
          {steps.map((s, i) => (
            <div key={s.n} className="relative flex-1">
              {i < steps.length - 1 ? (
                <div
                  className="absolute left-1/2 top-10 hidden h-0.5 w-full -translate-x-1/2 bg-primary/20 md:block md:left-[60%] md:w-[80%]"
                  aria-hidden
                />
              ) : null}
              <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                  {s.icon}
                </div>
                <span className="mt-4 inline-flex rounded-lg bg-primary/10 px-3 py-1 text-sm font-black text-primary">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
