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
components/   UI, layout, and page section components
lib/          Shared data, constants, and utilities
public/       Static assets (images, resume.pdf)
```

Site content (projects, experience, skills, contact details) lives in
`lib/data.ts`, so most updates are a single-file edit.

## Deployment

Deployed on Vercel. Pushing to the default branch triggers a new build.
