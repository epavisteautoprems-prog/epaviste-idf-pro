import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-mt-28 text-2xl font-bold text-primary first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold text-primary" {...props} />
  ),
  p: (props) => <p className="mt-4 leading-relaxed text-neutral-700" {...props} />,
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-6 text-neutral-700" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-neutral-700" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-4 border-secondary bg-neutral-50 p-4 italic text-neutral-800"
      {...props}
    />
  ),
  a: ({ href, ...props }) => {
    const isExt = href?.startsWith("http");
    if (isExt) {
      return (
        <a
          href={href}
          className="font-semibold text-secondary underline-offset-2 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="font-semibold text-secondary underline-offset-2 hover:underline"
        {...props}
      />
    );
  },
  img: (props) => {
    const { src, alt, width, height } = props as {
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    if (!src) return null;
    const w = width ?? 800;
    const h = height ?? 450;
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={w}
        height={h}
        className="my-8 rounded-xl border border-neutral-200"
        loading="lazy"
      />
    );
  },
};
