"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { valueProps } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function WhyHire() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why work with me"
          title="Built for outcomes"
          description="Six reasons clients and teams keep coming back."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((v, i) => {
            const Icon = (Icons as any)[v.icon] || Icons.Sparkles;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="group glass glass-hover relative overflow-hidden rounded-2xl p-7"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300 transition group-hover:from-blue-500/30 group-hover:to-purple-500/30">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
