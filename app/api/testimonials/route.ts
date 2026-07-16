import { NextRequest, NextResponse } from "next/server";
import { addTestimonial, listApprovedTestimonials } from "@/lib/testimonials-store";

// Public endpoint: anyone can submit a testimonial (POST), and the homepage
// fetches the approved list (GET) client-side so new submissions show up
// without a redeploy.

export async function GET() {
  try {
    const testimonials = await listApprovedTestimonials();
    return NextResponse.json({ testimonials });
  } catch (err) {
    console.error("GET /api/testimonials failed:", err);
    return NextResponse.json({ testimonials: [] }, { status: 200 });
  }
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, role, company, quote, linkedinUrl, rating } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof role !== "string" ||
    typeof company !== "string" ||
    typeof quote !== "string" ||
    !name.trim() ||
    !role.trim() ||
    !company.trim() ||
    !quote.trim()
  ) {
    return NextResponse.json(
      { error: "Name, role, company, and a recommendation are required." },
      { status: 400 }
    );
  }

  if (quote.trim().length < 10) {
    return NextResponse.json(
      { error: "Recommendation is too short." },
      { status: 400 }
    );
  }

  if (typeof linkedinUrl === "string" && linkedinUrl.trim()) {
    try {
      const parsed = new URL(linkedinUrl.trim());
      if (!/linkedin\.com$/i.test(parsed.hostname.replace(/^www\./, ""))) {
        return NextResponse.json(
          { error: "LinkedIn URL must be a linkedin.com link." },
          { status: 400 }
        );
      }
    } catch {
      return NextResponse.json({ error: "LinkedIn URL is not valid." }, { status: 400 });
    }
  }

  try {
    const testimonial = await addTestimonial({
      name,
      role,
      company,
      quote,
      linkedinUrl: typeof linkedinUrl === "string" ? linkedinUrl : undefined,
      rating: typeof rating === "number" ? rating : 5,
    });
    return NextResponse.json({ testimonial }, { status: 201 });
  } catch (err) {
    console.error("POST /api/testimonials failed:", err);
    return NextResponse.json(
      { error: "Could not save your recommendation right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
