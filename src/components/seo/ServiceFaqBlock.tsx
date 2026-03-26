import type { FAQ } from "@/types";

/** FAQ en HTML visible (complète FAQPage JSON-LD sur la même page). */
export function ServiceFaqBlock({
  id = "faq-service",
  title = "Questions fréquentes",
  faqs,
}: {
  id?: string;
  title?: string;
  faqs: FAQ[];
}) {
  return (
    <section
      className="not-prose mt-14 border-t border-neutral-200 pt-12"
      aria-labelledby={id}
    >
      <h2 id={id} className="text-2xl font-bold text-primary">
        {title}
      </h2>
      <dl className="mt-8 space-y-8">
        {faqs.map((f) => (
          <div key={f.question}>
            <dt className="text-lg font-semibold text-neutral-900">
              {f.question}
            </dt>
            <dd className="mt-2 leading-relaxed text-neutral-600">{f.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
