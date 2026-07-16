import "server-only";
import { cookies } from "next/headers";

// Deliberately simple: one shared admin password (ADMIN_PASSWORD env var),
// a signed session cookie (HMAC over an expiry timestamp), no user accounts,
// no database. This is a single-owner portfolio site with one admin — a
// full auth system would be overkill here.

export const SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error(
      "ADMIN_PASSWORD (and optionally ADMIN_SESSION_SECRET) must be set to use the admin panel."
    );
  }
  return secret;
}

async function sign(value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(value));
  return Buffer.from(sig).toString("base64url");
}

async function makeSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_TTL_MS;
  const payload = String(expires);
  const signature = await sign(payload);
  return `${payload}.${signature}`;
}

async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = await sign(payload);
  if (expected !== signature) return false;

  const expires = Number(payload);
  if (!Number.isFinite(expires) || expires < Date.now()) return false;

  return true;
}

export function checkPassword(candidate: string): boolean {
  const real = process.env.ADMIN_PASSWORD;
  if (!real) return false;
  // Lengths differ often enough that a simple === leaks little here (this
  // isn't a high-value target), but a constant-time compare costs nothing.
  if (candidate.length !== real.length) return false;
  let mismatch = 0;
  for (let i = 0; i < real.length; i++) {
    mismatch |= candidate.charCodeAt(i) ^ real.charCodeAt(i);
  }
  return mismatch === 0;
}

export async function createSession(): Promise<void> {
  const token = await makeSessionToken();
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  });
}

export async function destroySession(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return isValidSessionToken(store.get(SESSION_COOKIE)?.value);
}
