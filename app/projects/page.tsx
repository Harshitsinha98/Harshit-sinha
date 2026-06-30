"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Filter } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

const categories = ["All", "SaaS", "Business", "Ecommerce", "Website"];

const categoryMap: Record<string, string> = {
  "lead-management": "SaaS",
  "breakiq": "SaaS",
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
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-2 font-mono text-xs text-white/40"
        >
          <Link href="/" className="hover:text-white">Home</Link>
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
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === c
                  ? "border-purple-500/50 bg-purple-500/10 text-white"
                  : "border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-elevated to-surface transition-all hover:border-white/15"
              >
                {/* Preview */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-black to-elevated">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20 transition-opacity group-hover:opacity-40`}
                  />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} font-display text-2xl font-bold shadow-2xl transition-transform group-hover:scale-110`}
                    >
                      {p.title.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute right-3 top-3">
                    <span className="rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70 backdrop-blur">
                      {categoryMap[p.id] || "Project"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/40">{p.tagline}</p>

                  <p className="mt-4 line-clamp-2 text-sm text-white/60">
                    {p.solution}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-black/30 px-2 py-0.5 font-mono text-[10px] text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <Link
                      href={`/case-studies#case-${p.id}`}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-medium text-white/80 transition hover:text-white"
                    >
                      Case study
                      <ArrowUpRight size={12} className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                    <Link
                      href={`/demo-lab#${p.id}`}
                      className="text-xs text-white/40 hover:text-white"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-20 text-center text-white/40">
            No projects in this category yet.
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass overflow-hidden rounded-3xl p-10 text-center"
        >
          <h3 className="font-display text-3xl font-bold md:text-4xl">
            Have a project in mind?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            From early-stage MVPs to scaled production systems — let's talk about what you're building.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-medium transition hover:shadow-2xl hover:shadow-purple-500/40"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
