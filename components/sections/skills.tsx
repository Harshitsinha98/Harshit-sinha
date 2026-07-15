"use client";
import { motion } from "framer-motion";
import { Code2, Terminal, Cloud, Database, Cpu, Sparkles } from "lucide-react";
import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

const accentCycle = [
  "from-blue-400 to-purple-500",
  "from-purple-400 to-pink-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-cyan-400 to-blue-500",
  "from-rose-400 to-red-500",
];

const iconCycle = [Code2, Terminal, Cloud, Database, Cpu, Sparkles];

export function Skills() {
  const entries = Object.entries(skills);
  return (
    <section id="skills" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Toolbox"
          title="What I build with"
          description="The tools and technologies I use to design, build, and ship products — AI-assisted, and getting more hands-on every day."
        />

        <div className="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {entries.map(([cat, items], i) => {
            const accent = accentCycle[i % accentCycle.length];
            const Icon = iconCycle[i % iconCycle.length];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon
                  size={48}
                  className="pointer-events-none absolute -bottom-3 -right-3 text-white/[0.04] transition-colors duration-500 group-hover:text-white/[0.07]"
                />

                <div className="relative mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${accent}`} />
                    <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
                      {cat}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-white/30">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}