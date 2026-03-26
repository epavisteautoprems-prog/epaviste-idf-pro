import fs from "node:fs";
import path from "node:path";

const reportPath = path.join(process.cwd(), "scripts", "cannibalization-report.json");
const outPath = path.join(process.cwd(), "scripts", "cannibalization-actions.json");

function classifyAction(pair) {
  const { a, b, score, titleScore, keywordScore } = pair;

  // Strong near-duplicate signal.
  if (score >= 0.8) {
    return {
      priority: "high",
      action: "merge_or_301",
      rationale:
        "Very high semantic overlap. Prefer keeping the strongest URL and 301 the weaker one.",
      recommendation: `Compare performance between '${a}' and '${b}' in Search Console. Keep winner, 301 loser.`,
    };
  }

  // Same pattern families likely can coexist with intent differentiation.
  const bothComparatif =
    a.startsWith("enlevement-vs-rachat-") && b.startsWith("enlevement-vs-rachat-");
  const bothDocs = a.startsWith("epave-documents-") && b.startsWith("epave-documents-");
  const bothDeptPattern = /-\d{2}$/.test(a) && /-\d{2}$/.test(b);

  if ((bothComparatif || bothDocs) && bothDeptPattern) {
    return {
      priority: "medium",
      action: "differentiate_intent_copy",
      rationale:
        "Same template family by department. Keep both URLs but strengthen local differentiation.",
      recommendation:
        "Rewrite intro/H2 with unique city references, add distinct FAQs, and unique internal links per department.",
    };
  }

  if (score >= 0.65 || (titleScore >= 0.7 && keywordScore >= 0.55)) {
    return {
      priority: "medium",
      action: "rewrite_title_keywords",
      rationale: "Moderate overlap. Keep both pages but separate query targets more clearly.",
      recommendation:
        "Adjust titles to different long-tail modifiers and reduce shared keyword repetition.",
    };
  }

  return {
    priority: "low",
    action: "monitor_only",
    rationale: "Limited overlap; likely safe to keep both.",
    recommendation: "Monitor impressions/clicks for 30 days before changing.",
  };
}

function main() {
  if (!fs.existsSync(reportPath)) {
    throw new Error(
      "Missing cannibalization-report.json. Run `npm run audit:cannibalization` first.",
    );
  }

  const raw = fs.readFileSync(reportPath, "utf8");
  const report = JSON.parse(raw);
  const pairs = report.potentialCannibalizationPairs ?? [];

  const actions = pairs.map((pair) => ({
    ...pair,
    ...classifyAction(pair),
  }));

  const summary = {
    totalPairs: actions.length,
    high: actions.filter((x) => x.priority === "high").length,
    medium: actions.filter((x) => x.priority === "medium").length,
    low: actions.filter((x) => x.priority === "low").length,
  };

  const payload = {
    generatedAt: new Date().toISOString(),
    basedOnReport: "scripts/cannibalization-report.json",
    summary,
    actions,
  };

  fs.writeFileSync(outPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`report: ${outPath}`);
}

main();

