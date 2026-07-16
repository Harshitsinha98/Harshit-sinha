import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/admin-auth";
import { deleteTestimonial, listAllTestimonials, setTestimonialStatus } from "@/lib/testimonials-store";

async function requireAuth() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const authError = await requireAuth();
  if (authError) return authError;

  try {
    const testimonials = await listAllTestimonials();
    return NextResponse.json({ testimonials });
  } catch (err) {
    console.error("GET /api/admin/testimonials failed:", err);
    return NextResponse.json({ error: "Could not load testimonials." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const authError = await requireAuth();
  if (authError) return authError;

  const id = req.nextUrl.searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing id." }, { status: 400 });
  }

  try {
    const removed = await deleteTestimonial(id);
    if (!removed) {
      return NextResponse.json({ error: "Testimonial not found." }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("DELETE /api/admin/testimonials failed:", err);
    return NextResponse.json({ error: "Could not delete testimonial." }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const authError = await requireAuth();
  if (authError) return authError;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { id, status } = (body ?? {}) as Record<string, unknown>;
  if (typeof id !== "string" || (status !== "approved" && status !== "hidden")) {
    return NextResponse.json({ error: "Invalid id or status." }, { status: 400 });
  }

  try {
    const updated = await setTestimonialStatus(id, status);
    if (!updated) {
      return NextResponse.json({ error: "Testimonial not found." }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("PATCH /api/admin/testimonials failed:", err);
    return NextResponse.json({ error: "Could not update testimonial." }, { status: 500 });
  }
}
