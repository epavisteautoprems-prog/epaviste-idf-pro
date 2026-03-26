import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getPostSlugs, getAllPostsSorted, toArticleUrl } from "@/lib/blog";
import { generateBlogMetadata } from "@/lib/seo";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { mdxComponents } from "@/lib/mdx-components";
import { extractTocFromMdx } from "@/lib/mdx-toc";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { ServiceFaqBlock } from "@/components/seo/ServiceFaqBlock";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { getRouteAwareBlogFaqs } from "@/lib/blog-taxonomy";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return generateBlogMetadata(post);
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const recent = getAllPostsSorted();
  const toc = extractTocFromMdx(post.content);
  const articleUrl = toArticleUrl(slug);

  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ];

  const article = { ...post, url: articleUrl };
  const routeFaqs = getRouteAwareBlogFaqs(post);

  const content = await MDXRemote({
    source: post.content,
    components: mdxComponents,
  });

  return (
    <>
      <BreadcrumbSchema items={crumbs} />
      <ArticleSchema article={article} />
      <FAQSchema faqs={routeFaqs} />
      <ArticleLayout post={post} recent={recent} toc={toc}>
        {content}
        <ServiceFaqBlock
          id="faq-article-context"
          title="FAQ specifique a ce guide"
          faqs={routeFaqs}
        />
      </ArticleLayout>
    </>
  );
}
