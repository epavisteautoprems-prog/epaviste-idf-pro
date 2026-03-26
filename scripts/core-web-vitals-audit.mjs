import fs from "node:fs";
import path from "node:path";

const BASE_URL = process.env.SEO_AUDIT_BASE_URL ?? "https://www.epaviste-idf-pro.fr";
const PSI_API_KEY = process.env.PSI_API_KEY ?? "";
const outputFile = path.join(process.cwd(), "scripts", "core-web-vitals-report.json");

const targetPaths = [
  "/",
  "/blog",
  "/faq",
  "/rachat-epave",
  "/enlevement-epave-gratuit",
  "/epaviste-paris-75",
  "/epaviste-hauts-de-seine-92",
  "/epaviste-val-de-marne-94",
];

async function runPsi(url) {
  const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    url,
  )}&strategy=mobile&category=performance${PSI_API_KEY ? `&key=${PSI_API_KEY}` : ""}`;
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`PSI failed for ${url}: ${res.status}`);
  }
  const data = await res.json();
  const audits = data?.lighthouseResult?.audits ?? {};
  const categories = data?.lighthouseResult?.categories ?? {};
  return {
    url,
    performanceScore: categories?.performance?.score ?? null,
    fcp: audits["first-contentful-paint"]?.displayValue ?? null,
    lcp: audits["largest-contentful-paint"]?.displayValue ?? null,
    cls: audits["cumulative-layout-shift"]?.displayValue ?? null,
    tbt: audits["total-blocking-time"]?.displayValue ?? null,
    si: audits["speed-index"]?.displayValue ?? null,
  };
}

async function main() {
  const rows = [];
  for (const p of targetPaths) {
    const url = `${BASE_URL.replace(/\/$/, "")}${p}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      const row = await runPsi(url);
      rows.push(row);
      console.log(`ok: ${p}`);
    } catch (err) {
      rows.push({ url, error: String(err) });
      console.log(`fail: ${p}`);
    }
    // Avoid 429 with public (no-key) PSI quotas.
    // eslint-disable-next-line no-await-in-loop
    await new Promise((r) => setTimeout(r, 1400));
  }

  fs.writeFileSync(
    outputFile,
    JSON.stringify(
      {
        auditedAt: new Date().toISOString(),
        baseUrl: BASE_URL,
        pages: rows,
      },
      null,
      2,
    ),
    "utf8",
  );
  console.log(`report: ${outputFile}`);
}

main();

