import "server-only";
import { getRedis, TESTIMONIALS_KEY } from "@/lib/redis";
import type { StoredTestimonial, NewTestimonialInput, TestimonialStatus } from "@/lib/testimonial-types";

export type { StoredTestimonial, NewTestimonialInput, TestimonialStatus } from "@/lib/testimonial-types";

// Everything lives in a single Redis list (as JSON strings) — traffic here
// is low (personal portfolio testimonials, not a high-volume app), so one
// list with in-memory sort/filter on read is simpler and cheaper than a
// more elaborate schema, and easy to reason about.

export async function listApprovedTestimonials(): Promise<StoredTestimonial[]> {
  const all = await listAllTestimonials();
  return all.filter((t) => t.status === "approved");
}

export async function listAllTestimonials(): Promise<StoredTestimonial[]> {
  const redis = getRedis();
  const raw = await redis.lrange<StoredTestimonial>(TESTIMONIALS_KEY, 0, -1);
  return raw
    .filter((t): t is StoredTestimonial => !!t && typeof t === "object")
    .sort((a, b) => b.createdAt - a.createdAt);
}

/**
 * Adds a new testimonial. Auto-publishes immediately (status: "approved")
 * unless REQUIRE_TESTIMONIAL_APPROVAL=true is set, in which case it starts
 * "hidden" until an admin flips it to approved from /admin/testimonials.
 */
export async function addTestimonial(input: NewTestimonialInput): Promise<StoredTestimonial> {
  const redis = getRedis();
  const requireApproval = process.env.REQUIRE_TESTIMONIAL_APPROVAL === "true";

  const testimonial: StoredTestimonial = {
    id: crypto.randomUUID(),
    name: input.name.trim().slice(0, 100),
    role: input.role.trim().slice(0, 100),
    company: input.company.trim().slice(0, 100),
    quote: input.quote.trim().slice(0, 1000),
    linkedinUrl: input.linkedinUrl?.trim().slice(0, 300) || undefined,
    rating: Math.min(5, Math.max(1, Math.round(input.rating))),
    status: requireApproval ? "hidden" : "approved",
    createdAt: Date.now(),
  };

  await redis.lpush(TESTIMONIALS_KEY, testimonial);
  return testimonial;
}

export async function deleteTestimonial(id: string): Promise<boolean> {
  const redis = getRedis();
  const all = await redis.lrange<StoredTestimonial>(TESTIMONIALS_KEY, 0, -1);
  const target = all.find((t) => t && typeof t === "object" && t.id === id);
  if (!target) return false;
  // @upstash/redis's lrem removes by exact value match, so we remove the
  // exact object we just found rather than reconstructing it.
  await redis.lrem(TESTIMONIALS_KEY, 1, target);
  return true;
}

export async function setTestimonialStatus(
  id: string,
  status: TestimonialStatus
): Promise<boolean> {
  const redis = getRedis();
  const all = await redis.lrange<StoredTestimonial>(TESTIMONIALS_KEY, 0, -1);
  const index = all.findIndex((t) => t && typeof t === "object" && t.id === id);
  if (index === -1) return false;

  const updated: StoredTestimonial = { ...all[index], status };
  // Upstash Redis list API has no "update at index" by id, so replace by
  // position — lrange above and this write are as close to atomic as the
  // simple list API allows, which is fine at this traffic scale.
  await redis.lset(TESTIMONIALS_KEY, index, updated);
  return true;
}
