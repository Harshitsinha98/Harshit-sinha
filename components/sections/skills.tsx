"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function Skills() {
  const entries = Object.entries(skills);
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Stack"
          title="Full-spectrum craft"
          description="From pixel-perfect frontends to production backends, cloud infrastructure, and AI automation."
        />

        <div className="mt-16 grid auto-rows-fr gap-4 md:grid-cols-3 lg:grid-cols-6">
          {entries.map(([cat, items], i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className={`glass glass-hover rounded-2xl p-6 ${
                i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
                  {cat}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition hover:border-purple-500/40 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
