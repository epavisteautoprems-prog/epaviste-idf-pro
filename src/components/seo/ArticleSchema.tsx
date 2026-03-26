import type { Article } from "@/types";
import { articleSchema } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export function ArticleSchema({ article }: { article: Article }) {
  return <JsonLd data={articleSchema(article)} />;
}
