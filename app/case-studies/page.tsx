"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Lightbulb, Code2, TrendingUp } from "lucide-react";
import { projects } from "@/lib/data";

const architectureNotes: Record<string, string[]> = {
  "lead-management": [
    "Next.js App Router with server actions for mutations",
    "PostgreSQL with Prisma for typed, migration-driven schema",
    "Role-based middleware enforced at the route layer",
    "Background jobs for scheduled follow-ups and reminders",
  ],
  "breakiq": [
    "WebSocket layer for live agent status broadcasting",
    "Time-series storage for break analytics and replay",
    "Configurable rules engine for break policies per shift",
    "Optimistic UI updates for sub-100ms perceived latency",
  ],
  "saran-tax": [
    "Static generation for sub-1s LCP on marketing pages",
    "Schema.org structured data for rich search results",
    "Sanity CMS so non-technical team owns content updates",
    "Edge-cached lead form with spam protection",
  ],
  "pragat-hanuman": [
    "Multi-language i18n routing for English and Hindi",
    "Razorpay integration with receipt generation",
    "Cloudinary for optimized devotional imagery",
    "Newsletter automation for event notifications",
  ],
  "jewelry-ecom": [
    "Medusa.js headless commerce backend",
    "Custom storefront with cinematic product pages",
    "Wishlist, cart, and checkout state persisted across sessions",
    "Admin panel for inventory and order operations",
  ],
};

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen pt-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,.4), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            Case Studies
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            The work, <span className="text-gradient">unpacked</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            Real engineering decisions. Real architecture trade-offs. Real business outcomes.
            Here's how each product was built and why.
          </p>
        </motion.div>

        {/* Table of contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass mt-12 rounded-2xl p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
            On this page
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Link
                key={p.id}
                href={`#case-${p.id}`}
                className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                <span className="font-mono text-xs text-white/30">
                  0{i + 1}
                </span>
                <span>{p.title}</span>
                <span className="ml-auto text-xs text-white/30 transition group-hover:text-white/60">
                  →
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Cases */}
        <div className="mt-32 space-y-40">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              id={`case-${p.id}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="scroll-mt-32"
            >
              {/* Title block */}
              <div className="mb-12">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-mono text-sm text-white/30">
                    CASE 0{i + 1}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  <span
                    className={`rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-medium`}
                  >
                    {p.id === "jewelry-ecom" ? "In Progress" : "Shipped"}
                  </span>
                </div>

                <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {p.title}
                </h2>
                <p className="mt-3 text-lg text-white/50">{p.tagline}</p>
              </div>

              {/* Hero visual */}
              <div
                className={`relative mb-12 h-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${p.accent} font-display text-4xl font-bold shadow-2xl`}
                  >
                    {p.title.charAt(0)}
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {/* Challenge */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                      <Target size={16} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">
                      The Challenge
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{p.problem}</p>
                </section>

                {/* Solution */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
                      <Lightbulb size={16} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">
                      The Solution
                    </h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{p.solution}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 text-sm text-white/70"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        {f}
                      </div>
                    ))}
                  </div>
                </section>

                {/* Architecture */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                      <Code2 size={16} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">
                      Architecture & Engineering Decisions
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {(architectureNotes[p.id] || []).map((note) => (
                      <li
                        key={note}
                        className="flex gap-3 text-white/70 leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {note}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/40 mr-2 self-center">
                      Stack
                    </span>
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 font-mono text-xs text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Impact */}
                <section>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                      <TrendingUp size={16} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">
                      Business Impact
                    </h3>
                  </div>
                  <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
                    <p className="font-display text-xl font-medium text-white/95">
                      {p.impact}
                    </p>
                  </div>
                </section>
              </div>

              {/* Divider */}
              {i < projects.length - 1 && (
                <div className="mt-24 flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-white/10" />
                  <div className="h-1 w-1 rounded-full bg-white/30" />
                  <div className="h-1 w-1 rounded-full bg-white/30" />
                  <div className="h-1 w-1 rounded-full bg-white/30" />
                  <div className="h-px w-12 bg-white/10" />
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mt-32 rounded-3xl p-12 text-center"
        >
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            Want this kind of depth on your product?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            I bring the same rigor to every engagement — discovery, architecture, ship, measure.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-medium transition hover:shadow-2xl hover:shadow-purple-500/40"
          >
            Let's talk
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
