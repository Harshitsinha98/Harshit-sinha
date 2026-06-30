"use client";
import { motion } from "framer-motion";
import { trustStats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function TrustBar() {
  return (
    <section className="relative border-y border-white/5 bg-elevated/30 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {trustStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-white/40">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
