import { NextRequest, NextResponse } from "next/server";

// Edge-level gate for /admin/testimonials (except the login page itself).
// This is a defense-in-depth layer on top of the per-page auth check in
// app/admin/testimonials/page.tsx — the full HMAC signature check lives in
// lib/admin-auth.ts; what this cheaply does is bounce anyone with no
// session cookie at all before the page shell ever loads.
//
// Note: Next.js 16 renamed the middleware.ts convention to proxy.ts (and
// `middleware` -> `proxy` as the exported function name).

export function proxy(req: NextRequest) {
  const hasSessionCookie = req.cookies.has("admin_session");

  if (!hasSessionCookie) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/testimonials"],
};
