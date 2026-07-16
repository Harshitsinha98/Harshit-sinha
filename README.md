# Harshit Sinha — Portfolio

Personal portfolio site for Harshit Sinha, a full-stack product engineer.
Showcases shipped products, experience, skills, and a way to get in touch.

Live projects featured here include a Lead Management System, BreakIQ,
Saran Tax Solution, Pragat Hanuman Ji, and Shivis Elegance.

## Tech stack

- **Framework:** Next.js (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion, GSAP
- **Smooth scroll:** Lenis
- **Icons:** lucide-react

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command         | Description                     |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the local dev server      |
| `npm run build` | Production build                |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Lint the codebase with ESLint   |

## Project structure

```
app/          Routes and pages (App Router)
  api/        Backend endpoints (testimonials, admin auth)
  admin/      Password-protected admin pages
components/   UI, layout, and page section components
lib/          Shared data, constants, utilities, and the testimonials store
public/       Static assets (images, resume.pdf)
scripts/      One-off scripts (e.g. resume PDF generator)
```

Site content (projects, experience, skills, contact details) lives in
`lib/data.ts`, so most updates are a single-file edit.

## Testimonials system

Visitors can submit a recommendation at `/testimonial`. It publishes to the
homepage automatically — no email, no manual copy-pasting into `data.ts`.
You can hide or permanently delete any entry (fake, spam, or otherwise) from
a private admin page.

**How it works:**
- `POST /api/testimonials` saves a new testimonial to Redis and publishes it
  immediately (unless `REQUIRE_TESTIMONIAL_APPROVAL=true`, see below)
- `GET /api/testimonials` returns published testimonials; the homepage
  fetches this client-side, so new ones show up without a redeploy
- `/admin/login` — log in with `ADMIN_PASSWORD`
- `/admin/testimonials` — see every submission, hide/unhide it, or delete
  it permanently

### One-time setup (required for this to work in production)

1. **Add a Redis database.** In the Vercel dashboard: your project ->
   **Storage** tab -> **Browse Storage** -> **Upstash** -> choose **Redis**
   (there's also a plain "Redis" / Redis Cloud option at the top of that
   list — don't pick that one, it uses a different connection format).
   Connecting it to this project automatically sets either
   `KV_REST_API_URL`/`KV_REST_API_TOKEN` or `UPSTASH_REDIS_REST_URL`/
   `UPSTASH_REDIS_REST_TOKEN` as environment variables (this app accepts
   both pairs) — no code changes needed.
2. **Set an admin password.** Project -> **Settings** -> **Environment
   Variables** -> add `ADMIN_PASSWORD` with a value only you know. This is
   the password for `/admin/login`.
3. **Redeploy** so the new environment variables take effect.
4. *(Optional)* Set `REQUIRE_TESTIMONIAL_APPROVAL=true` if you'd rather
   review each testimonial before it goes live, instead of it publishing
   immediately. Leave it unset/`false` for auto-publish (the default).

For local development, copy `.env.example` to `.env.local` and fill in the
same three values (get the Redis ones from the Vercel Storage tab, or run
`vercel env pull .env.local` if you have the Vercel CLI linked).

## Deployment

Deployed on Vercel. Pushing to the default branch triggers a new build.
