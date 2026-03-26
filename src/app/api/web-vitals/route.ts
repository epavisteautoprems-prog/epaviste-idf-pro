import { NextResponse } from "next/server";

type Payload = {
  id?: string;
  name?: string;
  value?: number;
  rating?: string;
  route?: string;
};

export async function POST(req: Request) {
  const body = (await req.json().catch(() => ({}))) as Payload;
  if (!body.name || typeof body.value !== "number") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Temporary storage in server logs.
  // Replace with DB/analytics sink when ready.
  console.log("[web-vitals]", {
    metric: body.name,
    value: body.value,
    rating: body.rating,
    route: body.route,
    id: body.id,
  });

  return NextResponse.json({ ok: true });
}

