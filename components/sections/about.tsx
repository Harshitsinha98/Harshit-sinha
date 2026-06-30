"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="About" title="I don't just build software." />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-3xl text-center font-display text-3xl font-light tracking-tight text-white/80 md:text-4xl"
        >
          I build <span className="text-gradient font-medium">business assets</span> — systems that
          generate revenue, save hours, and scale with growth.
        </motion.p>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Problem Solving",
              text: "Every line of code starts with a real business problem. I dig into the why before touching the how.",
            },
            {
              title: "Architecture",
              text: "Clean separation of concerns, typed contracts, and systems built to evolve — not just ship.",
            },
            {
              title: "Business Value",
              text: "Engineering decisions tied to revenue, retention, or efficiency. Outcomes over output.",
            },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="glass glass-hover rounded-2xl p-7"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 font-mono text-sm text-blue-300">
                0{i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
