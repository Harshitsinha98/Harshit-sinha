"use client";
import { motion } from "framer-motion";
import { trustStats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-elevated/30 py-16">
      {/* subtle center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139,92,246,.6), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
          {trustStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`relative text-center ${
                i !== 0 ? "md:border-l md:border-white/[0.06]" : ""
              }`}
            >
              <div className="font-display text-4xl font-bold text-gradient transition-transform duration-500 hover:scale-105 md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}