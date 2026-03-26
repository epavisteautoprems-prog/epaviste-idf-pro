"use client";

import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";

const STORAGE_KEY = "epaviste-idf-hide-topbar";

export function StickyTopBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    try {
      setVisible(localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky top-0 z-[60] relative bg-primary py-2 text-center text-xs text-white sm:text-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 sm:flex-row sm:flex-wrap sm:gap-4">
        <a
          href={SITE_CONFIG.phoneHref}
          className="font-semibold underline-offset-2 hover:underline"
        >
          📞 {SITE_CONFIG.phone}
        </a>
        <span className="hidden sm:inline">|</span>
        <span>⚡ Réponse sous 30 min</span>
        <span className="hidden sm:inline">|</span>
        <span>🕐 7j/7 de 7h à 22h</span>
        <button
          type="button"
          aria-label="Fermer la barre"
          className="absolute right-2 top-2 rounded bg-white/10 px-2 py-0.5 text-lg leading-none hover:bg-white/20 sm:right-4 sm:top-1/2 sm:-translate-y-1/2"
          onClick={() => {
            try {
              localStorage.setItem(STORAGE_KEY, "1");
            } catch {
              /* ignore */
            }
            setVisible(false);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}
