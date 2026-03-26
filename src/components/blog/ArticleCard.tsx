import Link from "next/link";
import type { ArticleData } from "@/types";

export function ArticleCard({ post }: { post: ArticleData }) {
  return (
    <article className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
        {post.category}
      </p>
      <h3 className="mt-2 text-lg font-bold text-primary">
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm text-neutral-600">
        {post.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
        <span>{post.readingTime}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="font-semibold text-secondary hover:underline"
        >
          Lire →
        </Link>
      </div>
    </article>
  );
}
