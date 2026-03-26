import type { ReactNode } from "react";
import Link from "next/link";
import type { ArticleData } from "@/types";
import type { TocItem } from "@/lib/mdx-toc";
import { SITE_CONFIG } from "@/lib/constants";
import { PhoneButton } from "@/components/ui/PhoneButton";
import { getContextualArticles } from "@/lib/blog-taxonomy";

export function ArticleLayout({
  post,
  children,
  recent,
  toc = [],
}: {
  post: ArticleData;
  children: ReactNode;
  recent: ArticleData[];
  toc?: TocItem[];
}) {
  const others = recent.filter((r) => r.slug !== post.slug).slice(0, 4);
  const postKeywordSet = new Set(post.keywords.map((k) => k.toLowerCase().trim()));
  const related = recent
    .filter((r) => r.slug !== post.slug)
    .map((r) => {
      let score = 0;
      if (r.category === post.category) score += 3;
      const overlap = r.keywords.reduce((acc, kw) => {
        return postKeywordSet.has(kw.toLowerCase().trim()) ? acc + 1 : acc;
      }, 0);
      score += overlap * 2;
      if (r.title.toLowerCase().includes("idf") && post.title.toLowerCase().includes("idf")) {
        score += 1;
      }
      return { article: r, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((entry) => entry.article);
  const contextual = getContextualArticles(recent, post, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article>
          <header className="border-b border-neutral-200 pb-8">
            <p className="text-sm font-semibold text-secondary">{post.category}</p>
            <h1 className="mt-2 text-4xl font-black text-primary">{post.title}</h1>
            <p className="mt-4 text-lg text-neutral-600">{post.description}</p>
            <p className="mt-4 text-sm text-neutral-500">
              Par {post.author} · {post.authorRole} · Mis à jour le{" "}
              {new Date(post.updatedAt).toLocaleDateString("fr-FR")} ·{" "}
              {post.readingTime}
            </p>
          </header>
          <div className="prose prose-lg prose-neutral max-w-none py-10 prose-headings:text-primary prose-a:text-secondary">
            {children}
          </div>
        </article>

        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
          {toc.length ? (
            <nav
              className="rounded-2xl border border-neutral-200 p-6"
              aria-label="Sommaire"
            >
              <p className="font-bold text-primary">Sommaire</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-neutral-700">
                {toc.map((item) => (
                  <li key={item.id}>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ol>
            </nav>
          ) : null}

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <p className="font-bold text-primary">Besoin d’un enlèvement ?</p>
            <p className="mt-2 text-sm text-neutral-600">
              Devis gratuit sous 30 minutes, 7j/7 en Île-de-France.
            </p>
            <div className="mt-4">
              <PhoneButton className="w-full" />
            </div>
            <Link
              href="/#devis"
              className="mt-3 block text-center text-sm font-semibold text-secondary hover:underline"
            >
              Formulaire en ligne →
            </Link>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <p className="font-bold text-primary">Articles récents</p>
            <ul className="mt-4 space-y-3 text-sm">
              {others.map((r) => (
                <li key={r.slug}>
                  <Link href={`/blog/${r.slug}`} className="hover:text-secondary">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-6">
            <p className="font-bold text-primary">Articles liés</p>
            <ul className="mt-4 space-y-3 text-sm">
              {related.map((r) => (
                <li key={`related-${r.slug}`}>
                  <Link href={`/blog/${r.slug}`} className="hover:text-secondary">
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {contextual.sameDept.length ? (
            <div className="rounded-2xl border border-neutral-200 p-6">
              <p className="font-bold text-primary">Meme departement</p>
              <ul className="mt-4 space-y-3 text-sm">
                {contextual.sameDept.map((r) => (
                  <li key={`dept-${r.slug}`}>
                    <Link href={`/blog/${r.slug}`} className="hover:text-secondary">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {contextual.sameIntent.length ? (
            <div className="rounded-2xl border border-neutral-200 p-6">
              <p className="font-bold text-primary">Meme intention de recherche</p>
              <ul className="mt-4 space-y-3 text-sm">
                {contextual.sameIntent.map((r) => (
                  <li key={`intent-${r.slug}`}>
                    <Link href={`/blog/${r.slug}`} className="hover:text-secondary">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <div className="rounded-2xl border border-neutral-200 p-6 text-sm text-neutral-600">
            <p className="font-semibold text-primary">{SITE_CONFIG.name}</p>
            <p className="mt-2">{SITE_CONFIG.tagline}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
