import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  showIcon?: boolean;
};

export function PhoneButton({ className, showIcon = true }: Props) {
  return (
    <a
      href={SITE_CONFIG.phoneHref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-secondary-dark md:text-base",
        className,
      )}
    >
      {showIcon ? <span aria-hidden>📞</span> : null}
      <span>Appeler : {SITE_CONFIG.phone}</span>
    </a>
  );
}
