"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Target,
  Lightbulb,
  Code2,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/data";

const architectureNotes: Record<string, string[]> = {
  "lead-management": [
    "Next.js App Router with server actions for mutations",
    "PostgreSQL with Prisma for typed, migration-driven schema",
    "Role-based middleware enforced at the route layer",
    "Background jobs for scheduled follow-ups and reminders",
  ],
  breakiq: [
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
    "Next.js storefront with a separate Node/Express + PostgreSQL backend",
    "OTP-based customer login and self-serve order tracking",
    "Razorpay + Stripe payments, with Shiprocket for auto AWB generation",
    "Dedicated admin dashboard for inventory, orders, customers, and revenue",
  ],
};

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen pt-32">
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,.4), transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 top-[50%] h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft
            size={14}
            className="transition group-hover:-translate-x-1"
          />
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
            The work,{" "}
            <span className="text-gradient">unpacked</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Real engineering decisions. Real architecture trade-offs. Real
            business outcomes. Here's how each product was built and why.
          </p>
        </motion.div>

        {/* Table of contents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass mt-12 overflow-hidden rounded-2xl"
        >
          <div className="border-b border-white/5 px-6 py-4">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              <Sparkles size={12} />
              On this page
            </p>
          </div>
          <div className="grid gap-1 p-3 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Link
                key={p.id}
                href={`#case-${p.id}`}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 transition-all hover:bg-white/5 hover:text-white"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.accent} font-mono text-xs font-bold ring-1 ring-white/10 transition-transform group-hover:scale-110`}
                >
                  0{i + 1}
                </span>
                <span className="flex-1 truncate">{p.title}</span>
                <ArrowUpRight
                  size={12}
                  className="shrink-0 text-white/20 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/50"
                />
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
                    className={`rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-medium shadow-lg`}
                  >
                    {p.id === "jewelry-ecom" ? "In Progress" : "Shipped"}
                  </span>
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-display text-4xl font-bold tracking-tight md:text-5xl"
                >
                  {p.title}
                </motion.h2>
                <p className="mt-3 text-lg text-white/50">{p.tagline}</p>
              </div>

              {/* Hero visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`group relative mb-12 h-72 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${p.accent} shadow-2xl shadow-black/30`}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 grid-bg opacity-20" />

                {/* Floating decorative elements */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute left-[15%] top-[25%] h-20 w-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute right-[20%] bottom-[20%] h-14 w-14 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${p.accent} font-display text-4xl font-bold shadow-2xl ring-2 ring-white/20`}
                  >
                    {p.title.charAt(0)}
                  </motion.div>
                </div>
              </motion.div>

              {/* Sections with timeline connector */}
              <div className="relative space-y-12 pl-8 md:pl-12">
                {/* Vertical timeline line */}
                <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-emerald-500/30 md:left-[23px]" />

                {/* Challenge */}
                <motion.section
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 ring-4 ring-black md:-left-12">
                    <Target size={16} />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-display text-2xl font-semibold">
                      The Challenge
                    </h3>
                  </div>
                  <p className="leading-relaxed text-white/70">{p.problem}</p>
                </motion.section>

                {/* Solution */}
                <motion.section
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300 ring-4 ring-black md:-left-12">
                    <Lightbulb size={16} />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-display text-2xl font-semibold">
                      The Solution
                    </h3>
                  </div>
                  <p className="leading-relaxed text-white/70">{p.solution}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.features.map((f, fi) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.05 }}
                        className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-sm text-white/70 transition-all hover:border-white/15 hover:bg-white/[0.04]"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        {f}
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Architecture */}
                <motion.section
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 ring-4 ring-black md:-left-12">
                    <Code2 size={16} />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-display text-2xl font-semibold">
                      Architecture & Engineering Decisions
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {(architectureNotes[p.id] || []).map((note, ni) => (
                      <motion.li
                        key={note}
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: ni * 0.08 }}
                        className="flex gap-3 leading-relaxed text-white/70"
                      >
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {note}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="mr-2 self-center text-xs font-semibold uppercase tracking-wider text-white/40">
                      Stack
                    </span>
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-black/30 px-3 py-1 font-mono text-xs text-white/70 transition-colors hover:border-white/20 hover:text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.section>

                {/* Impact */}
                <motion.section
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-8 top-0 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 ring-4 ring-black md:-left-12">
                    <TrendingUp size={16} />
                  </div>
                  <div className="mb-2">
                    <h3 className="font-display text-2xl font-semibold">
                      Business Impact
                    </h3>
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6 shadow-lg shadow-emerald-500/5">
                    <p className="font-display text-xl font-medium leading-relaxed text-white/95">
                      {p.impact}
                    </p>
                  </div>
                </motion.section>
              </div>

              {/* Divider */}
              {i < projects.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  className="mt-24 flex items-center justify-center gap-3"
                >
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/15" />
                  <div className="flex gap-1.5">
                    <div className="h-1 w-1 rounded-full bg-white/30" />
                    <div className="h-1 w-1 rounded-full bg-white/20" />
                    <div className="h-1 w-1 rounded-full bg-white/10" />
                  </div>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/15" />
                </motion.div>
              )}
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-32 overflow-hidden rounded-3xl border border-white/10 p-12 text-center"
        >
          {/* CTA background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,.4), transparent 70%)",
            }}
          />

          <div className="relative">
            <h3 className="font-display text-3xl font-bold md:text-4xl">
              Want this kind of depth on your product?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              I bring the same rigor to every engagement — discovery,
              architecture, ship, measure.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-medium shadow-lg shadow-purple-500/20 transition hover:shadow-2xl hover:shadow-purple-500/40"
            >
              Let's talk
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
