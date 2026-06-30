"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function Experience() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="Experience" title="The journey so far" />

        <div className="mt-16 relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent md:left-1/2" />

          {experience.map((e, i) => (
            <motion.div
              key={e.company + i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative mb-12 pl-12 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              }`}
            >
              <div className="absolute left-2 top-4 h-5 w-5 rounded-full border-2 border-background bg-gradient-to-br from-blue-500 to-purple-600 md:left-auto md:right-auto md:translate-x-0">
                <div className={`absolute ${i % 2 === 0 ? "md:-right-[calc(50%+1.5rem)]" : "md:-left-[calc(50%+1.5rem)]"}`} />
              </div>

              <div className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                    <p className="mt-1 text-sm text-blue-300">{e.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
