"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Case Studies"
          title="How the work gets done"
          description="Engineering decisions, architecture choices, and business outcomes behind each product."
        />

        <div className="mt-20 space-y-32">
          {projects.slice(0, 3).map((p, i) => (
            <motion.div
              key={p.id}
              id={`case-${p.id}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-mono text-sm text-white/30">CASE 0{i + 1}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <h3 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                {p.title}
              </h3>

              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300/80">
                    Challenge
                  </h4>
                  <p className="mt-3 text-white/70">{p.problem}</p>

                  <h4 className="mt-8 text-xs font-semibold uppercase tracking-wider text-purple-300/80">
                    Solution
                  </h4>
                  <p className="mt-3 text-white/70">{p.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    Architecture & Decisions
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 text-sm text-white/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                      Business Impact
                    </h4>
                    <p className="mt-2 text-sm font-medium text-white/90">{p.impact}</p>
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