export type TocItem = { id: string; title: string };

function slugifyHeading(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractTocFromMdx(source: string): TocItem[] {
  const lines = source.split(/\r?\n/);
  const items: TocItem[] = [];
  for (const line of lines) {
    const m = /^##\s+(.+)$/.exec(line.trim());
    if (!m) continue;
    const title = m[1].replace(/\s+#+\s*$/, "").trim();
    items.push({ id: slugifyHeading(title), title });
  }
  return items;
}
