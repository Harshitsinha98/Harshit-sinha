import { Redis } from "@upstash/redis";

// Lazily create the client so builds without env vars set (e.g. a fresh
// clone before the Vercel Redis integration is connected) don't crash at
// import time — only requests that actually touch storage will fail, with
// a clear error, instead of the whole app failing to build.
let client: Redis | null = null;

export function getRedis(): Redis {
  if (client) return client;

  // Upstash's Vercel integration names these differently depending on how
  // the store was connected (new Upstash account vs. an existing one
  // linked in) — support both so setup doesn't depend on which flow was used.
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    throw new Error(
      "Redis is not configured. Add an Upstash Redis store from the Vercel " +
        "Marketplace to this project (Storage tab -> Upstash -> Redis) — it sets " +
        "KV_REST_API_URL/KV_REST_API_TOKEN or UPSTASH_REDIS_REST_URL/" +
        "UPSTASH_REDIS_REST_TOKEN automatically. See README.md for the full setup steps."
    );
  }

  client = new Redis({ url, token });
  return client;
}

export const TESTIMONIALS_KEY = "testimonials:list";
