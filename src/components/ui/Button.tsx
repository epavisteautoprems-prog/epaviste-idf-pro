import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  href?: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit";
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  onClick,
  type = "button",
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";
  const styles = {
    primary: "bg-secondary text-white shadow-lg hover:scale-105 hover:bg-secondary-dark",
    outline:
      "border-2 border-white text-white hover:bg-white/10",
    ghost: "text-primary hover:bg-primary/5",
  }[variant];

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, styles, className)}
    >
      {children}
    </button>
  );
}
