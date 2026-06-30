"use client";
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { personal } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function GithubSection() {
  const [mounted, setMounted] = useState(false);

  // Colors ko server-side par random mat rakho, 
  // isse hydration error aayega.
  const boxes = useMemo(() => {
    return Array.from({ length: 140 }).map(() => Math.random());
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Open Source"
          title="Code in the wild"
          description="My GitHub — where the experiments, libraries, and tools live."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 glass overflow-hidden rounded-2xl"
        >
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-8">
              <div className="flex items-center gap-3">
                <Github size={28} />
                <div>
                  <p className="font-display text-lg font-semibold">@Harshitsinha98</p>
                  <p className="text-xs text-white/40">github.com/Harshitsinha98</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Repos", value: "20+" },
                  { label: "Stars", value: "★" },
                  { label: "Active", value: "Daily" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/5 p-4 text-center">
                    <div className="font-display text-xl font-bold text-gradient">{s.value}</div>
                    <p className="mt-1 text-xs text-white/50">{s.label}</p>
                  </div>
                ))}
              </div>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-medium transition hover:shadow-lg hover:shadow-purple-500/40"
              >
                <Github size={16} />
                Visit GitHub
              </a>
            </div>
            <div className="border-t border-white/5 bg-black/40 p-8 md:border-l md:border-t-0">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Contribution Activity</p>
              <div className="mt-4 grid grid-cols-[repeat(20,1fr)] gap-1">
                {boxes.map((intensity, i) => {
                  const bg = !mounted
                    ? "bg-white/5" // Default color jab tak mount nahi hota
                    : intensity > 0.75
                    ? "bg-purple-500/80"
                    : intensity > 0.5
                    ? "bg-purple-500/50"
                    : intensity > 0.25
                    ? "bg-purple-500/25"
                    : "bg-white/5";
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.005, duration: 0.3 }}
                      className={`aspect-square rounded-sm ${bg}`}
                    />
                  );
                })}
              </div>
              <p className="mt-4 text-xs text-white/40">A snapshot of recent activity.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}