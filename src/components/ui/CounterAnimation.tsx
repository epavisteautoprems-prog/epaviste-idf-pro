"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  decimals?: number;
};

export function CounterAnimation({
  end,
  suffix = "",
  prefix = "",
  durationMs = 2000,
  decimals = 0,
}: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(end * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.25 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [durationMs, end]);

  const display =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("fr-FR");

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
