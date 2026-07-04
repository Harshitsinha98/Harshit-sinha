"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Filter, Sparkles, Clock } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

const categories = ["All", "SaaS", "Business", "Ecommerce", "Website"];

const categoryMap: Record<string, string> = {
  "lead-management": "SaaS",
  breakiq: "SaaS",
  "saran-tax": "Website",
  "pragat-hanuman": "Website",
  "jewelry-ecom": "Ecommerce",
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => categoryMap[p.id] === filter);

  return (
    <div className="relative min-h-screen pt-32">
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-25 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,.5), transparent 70%)",
        }}
      />
      <div
        className="absolute right-0 top-[40%] h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.6), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-2 font-mono text-xs text-white/40"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span className="text-white/70">Projects</span>
        </motion.div>

        <SectionHeading
          align="left"
          eyebrow="Portfolio"
          title="Every product, shipped."
          description="A complete index of work — production systems, client products, and ongoing builds."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 text-xs text-white/40">
            <Filter size={14} />
            <span className="font-mono uppercase tracking-wider">Filter</span>
          </div>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="relative"
            >
              {filter === c && (
                <motion.div
                  layoutId="filter-active"
                  className="absolute inset-0 rounded-full border border-purple-500/50 bg-purple-500/10"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span
                className={`relative z-10 block rounded-full px-4 py-1.5 text-sm transition ${
                  filter === c
                    ? "text-white"
                    : "border border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white"
                }`}
              >
                {c}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Project count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 font-mono text-xs text-white/30"
        >
          Showing {filtered.length} project{filtered.length !== 1 && "s"}
        </motion.p>

        {/* Grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-elevated to-surface transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/5"
              >
                {/* Animated border glow on hover */}
                <div
                  className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-20`}
                />

                {/* Preview */}
                <div className="relative h-52 overflow-hidden bg-black">
                  {p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-hover
                      className="group/prev absolute inset-0 block"
                    >
                      {/* Real live site, scaled as a thumbnail */}
                      <div className="pointer-events-none absolute inset-0">
                        <iframe
                          src={p.liveUrl}
                          title={`${p.title} live preview`}
                          loading="lazy"
                          tabIndex={-1}
                          aria-hidden
                          className="absolute left-0 top-0 origin-top-left border-0"
                          style={{ width: "1280px", height: "860px", transform: "scale(0.42)" }}
                        />
                      </div>
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition group-hover/prev:opacity-100">
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                          Open live <ExternalLink size={12} />
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-15`} />
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} font-display text-2xl font-bold shadow-2xl ring-1 ring-white/10`}
                        >
                          {p.title.charAt(0)}
                        </div>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-amber-300/80">
                          <Clock size={10} /> launching soon
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Category + status badges */}
                  <div className="absolute right-3 top-3 flex gap-1.5">
                    <span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70 backdrop-blur-md ring-1 ring-white/10">
                      {categoryMap[p.id] || "Project"}
                    </span>
                    {p.status === "live" ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-300 backdrop-blur-md ring-1 ring-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-amber-300 backdrop-blur-md ring-1 ring-amber-500/20">
                        <Clock size={9} /> Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">{p.tagline}</p>

                  <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-white/60">
                    {p.solution}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[0.08] bg-black/40 px-2 py-0.5 font-mono text-[10px] text-white/50 transition-colors group-hover:border-white/15 group-hover:text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                    {p.stack.length > 4 && (
                      <span className="rounded-md border border-white/[0.06] bg-black/30 px-2 py-0.5 font-mono text-[10px] text-white/30">
                        +{p.stack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <Link
                      href={`/case-studies#case-${p.id}`}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-white/80 transition hover:text-white"
                    >
                      Case study
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </Link>
                    <Link
                      href={`/demo-lab#${p.id}`}
                      className="flex items-center gap-1 text-xs text-white/40 transition hover:text-white"
                    >
                      <span className="hidden sm:inline">Demo</span>
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 text-center"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
              <Sparkles size={24} className="text-white/30" />
            </div>
            <p className="text-white/40">No projects in this category yet.</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-24 overflow-hidden rounded-3xl border border-white/10 p-10 text-center md:p-14"
        >
          {/* CTA background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div
            className="absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,.4), transparent 70%)",
            }}
          />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new projects
            </div>
            <h3 className="font-display text-3xl font-bold md:text-4xl">
              Have a project in mind?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-white/60">
              From early-stage MVPs to scaled production systems — let's talk
              about what you're building.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3.5 text-sm font-medium shadow-lg shadow-purple-500/20 transition hover:shadow-2xl hover:shadow-purple-500/40"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
