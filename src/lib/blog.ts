import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { ArticleData, ArticleFrontmatter } from "@/types";
import { SITE_CONFIG } from "@/lib/constants";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): ArticleData | null {
  const file = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const fm = data as ArticleFrontmatter;
  const rt = readingTime(content);
  return {
    slug,
    content,
    title: fm.title,
    description: fm.description,
    keywords: fm.keywords ?? [],
    publishedAt: fm.publishedAt,
    updatedAt: fm.updatedAt,
    author: fm.author,
    authorRole: fm.authorRole,
    readingTime: fm.readingTime ?? `${Math.max(1, Math.round(rt.minutes))} min`,
    category: fm.category,
    image: fm.image,
    imageAlt: fm.imageAlt,
  };
}

export function getAllPostsSorted(): ArticleData[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is ArticleData => Boolean(p))
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

export function toArticleUrl(slug: string): string {
  return `${SITE_CONFIG.url.replace(/\/$/, "")}/blog/${slug}`;
}
