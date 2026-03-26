"use client";

import { useReportWebVitals } from "next/web-vitals";

type WebVitalsBody = {
  id: string;
  name: string;
  value: number;
  rating?: string;
  route?: string;
};

export function WebVitalsTracker() {
  useReportWebVitals((metric) => {
    const body: WebVitalsBody = {
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: "rating" in metric ? metric.rating : undefined,
      route: window.location.pathname,
    };

    // Keepalive sends data even when user navigates away.
    void fetch("/api/web-vitals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {
      // Silent on purpose: vitals collection must never break UX.
    });
  });

  return null;
}

