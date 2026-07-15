"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { valueProps } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyHire() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why work with me"
          title="Built for outcomes"
          description="Six reasons I'd add value to your team from day one."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((v, i) => {
            const Icon =
              (Icons as unknown as Record<string, LucideIcon>)[v.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                {/* Ghost index number */}
                <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-7xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-white/[0.06]">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Hover glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 ring-1 ring-white/[0.06] transition-all duration-500 group-hover:scale-110 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                    <Icon size={20} />
                  </div>

                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}