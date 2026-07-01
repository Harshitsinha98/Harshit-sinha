"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products shipped, problems solved"
          description="Real-world products serving real users. Each one started as a business problem, ended as a working system."
        />

        <div className="mt-20 space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-elevated to-surface p-8 transition-all hover:border-white/15 md:p-10"
            >
              {/* Accent glow */}
              <div
                className={`absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`}
              />

              <div className="relative grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="mb-3 flex items-center gap-2 font-mono text-xs text-white/40">
                    <span>0{i + 1}</span>
                    <span>/</span>
                    <span>0{projects.length}</span>
                  </div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{p.tagline}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Problem</p>
                      <p className="mt-1 text-sm text-white/70">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Solution</p>
                      <p className="mt-1 text-sm text-white/70">{p.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80">Impact</p>
                      <p className="mt-1 text-sm font-medium text-white/90">{p.impact}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-xs text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <Link
                      href={`#case-${p.id}`}
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10"
                    >
                      Read case study
                      <ArrowUpRight
                        size={14}
                        className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>

                {/* Preview + features */}
                <div className="lg:col-span-5">
                  <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black to-elevated lg:h-48">
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20`} />
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className={`mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${p.accent} font-display text-xl font-bold`}
                        >
                          {p.title.charAt(0)}
                        </div>
                        <p className="font-mono text-xs text-white/50">PREVIEW</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {p.features.slice(0, 4).map((f) => (
                      <div
                        key={f}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-3 text-xs text-white/60"
                      >
                        ✦ {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}