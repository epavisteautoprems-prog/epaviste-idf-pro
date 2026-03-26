import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  marque: z.string().min(1).max(80),
  annee: z.string().min(4).max(4),
  etat: z.string().min(1).max(80),
  codePostal: z.string().regex(/^[0-9]{5}$/),
  prenom: z.string().min(1).max(80),
  telephone: z.string().min(6).max(30),
});

type Hit = { count: number; reset: number };
const rateBucket = new Map<string, Hit>();
const WINDOW_MS = 60_000;
const MAX_REQ = 8;

function getClientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function sanitize(s: string): string {
  return s.replace(/[<>]/g, "").trim();
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const hit = rateBucket.get(ip);
  if (!hit || now > hit.reset) {
    rateBucket.set(ip, { count: 1, reset: now + WINDOW_MS });
  } else if (hit.count >= MAX_REQ) {
    return NextResponse.json(
      { success: false, message: "Trop de demandes. Réessayez plus tard." },
      { status: 429 },
    );
  } else {
    hit.count += 1;
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Corps de requête invalide." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Données invalides." },
      { status: 400 },
    );
  }

  const data = {
    marque: sanitize(parsed.data.marque),
    annee: sanitize(parsed.data.annee),
    etat: sanitize(parsed.data.etat),
    codePostal: parsed.data.codePostal,
    prenom: sanitize(parsed.data.prenom),
    telephone: sanitize(parsed.data.telephone),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@epaviste-idf.fr";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const subject = `[Épaviste IDF] Devis ${data.prenom} — ${data.marque} (${data.codePostal})`;
  const text = [
    `Prénom: ${data.prenom}`,
    `Téléphone: ${data.telephone}`,
    `Marque: ${data.marque}`,
    `Année: ${data.annee}`,
    `État: ${data.etat}`,
    `Code postal: ${data.codePostal}`,
  ].join("\n");

  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error", res.status, err);
      return NextResponse.json(
        { success: false, message: "Envoi temporairement indisponible." },
        { status: 502 },
      );
    }
  } else {
    console.info("[contact] (dev) pas de RESEND_API_KEY — log console:", data);
  }

  return NextResponse.json({
    success: true,
    message: "Demande enregistrée. Nous vous rappelons sous 30 minutes.",
  });
}
