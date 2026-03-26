import Link from "next/link";
import { getAllPostsSorted } from "@/lib/blog";
import { ArticleCard } from "@/components/blog/ArticleCard";

export async function BlogPreview() {
  const posts = getAllPostsSorted().slice(0, 3);

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold text-primary md:text-4xl">
          Guides & actualités épaviste
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-neutral-600">
          Conseils pratiques pour vendre, faire enlever ou détruire légalement
          votre véhicule en Île-de-France.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white"
          >
            Voir tout le blog
          </Link>
        </div>
      </div>
    </section>
  );
}
