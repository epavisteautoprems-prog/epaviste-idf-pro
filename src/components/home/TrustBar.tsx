const items = [
  { icon: "✓", label: "Agréé VHU Préfecture" },
  { icon: "✓", label: "Assurance RC Pro" },
  { icon: "✓", label: "Membre FEDEREC" },
  { icon: "✓", label: "Intervention 7j/7" },
];

export function TrustBar() {
  return (
    <div className="border-b border-neutral-200 bg-neutral-100 py-4">
      <div className="mx-auto max-w-6xl overflow-hidden px-4 md:overflow-visible">
        <div className="hidden items-center justify-center divide-x divide-neutral-300 md:flex">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex flex-1 items-center justify-center gap-2 px-4 text-sm font-medium text-primary"
            >
              <span className="text-accent" aria-hidden>
                {it.icon}
              </span>
              {it.label}
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <div className="flex w-max min-w-full animate-marquee whitespace-nowrap">
            {[...items, ...items].map((it, i) => (
              <span
                key={`${it.label}-${i}`}
                className="inline-flex items-center gap-2 px-6 text-sm font-medium text-primary"
              >
                <span className="text-accent">{it.icon}</span>
                {it.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
