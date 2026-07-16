import { NextRequest, NextResponse } from "next/server";
import { checkPassword, createSession } from "@/lib/admin-auth";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const password = typeof body === "object" && body !== null
    ? (body as Record<string, unknown>).password
    : undefined;

  if (typeof password !== "string" || !password) {
    return NextResponse.json({ error: "Password is required." }, { status: 400 });
  }

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Admin login isn't configured yet (ADMIN_PASSWORD env var is missing)." },
      { status: 500 }
    );
  }

  if (!checkPassword(password)) {
    // Deliberately generic — don't hint whether the password format was close.
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  await createSession();
  return NextResponse.json({ ok: true });
}
