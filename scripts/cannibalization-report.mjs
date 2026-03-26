import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "src", "content", "blog");
const outFile = path.join(process.cwd(), "scripts", "cannibalization-report.json");

function tokenize(text) {
  return new Set(
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 2),
  );
}

function overlapScore(a, b) {
  const common = [...a].filter((x) => b.has(x));
  const denom = Math.max(a.size, b.size, 1);
  return common.length / denom;
}

const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
const posts = files.map((file) => {
  const slug = file.replace(/\.mdx$/, "");
  const raw = fs.readFileSync(path.join(blogDir, file), "utf8");
  const { data } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    keywords: (data.keywords ?? []).join(" "),
  };
});

const pairs = [];
for (let i = 0; i < posts.length; i += 1) {
  for (let j = i + 1; j < posts.length; j += 1) {
    const a = posts[i];
    const b = posts[j];
    const titleScore = overlapScore(tokenize(a.title), tokenize(b.title));
    const keywordScore = overlapScore(tokenize(a.keywords), tokenize(b.keywords));
    const score = titleScore * 0.65 + keywordScore * 0.35;
    if (score >= 0.55) {
      pairs.push({
        a: a.slug,
        b: b.slug,
        score: Number(score.toFixed(3)),
        titleScore: Number(titleScore.toFixed(3)),
        keywordScore: Number(keywordScore.toFixed(3)),
      });
    }
  }
}

pairs.sort((x, y) => y.score - x.score);

fs.writeFileSync(
  outFile,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      threshold: 0.55,
      totalPosts: posts.length,
      potentialCannibalizationPairs: pairs,
    },
    null,
    2,
  ),
  "utf8",
);

console.log(`report: ${outFile}`);

