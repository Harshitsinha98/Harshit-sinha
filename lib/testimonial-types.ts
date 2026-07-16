// Shared types with no server-only imports, so client components can import
// them directly without pulling in the Redis/server code from
// lib/testimonials-store.ts.

export type TestimonialStatus = "approved" | "hidden";

export type StoredTestimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  linkedinUrl?: string;
  rating: number;
  status: TestimonialStatus;
  createdAt: number; // epoch ms
};

export type NewTestimonialInput = {
  name: string;
  role: string;
  company: string;
  quote: string;
  linkedinUrl?: string;
  rating: number;
};
