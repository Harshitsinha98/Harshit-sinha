"use client";
import { motion } from "framer-motion";
import { experience, education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { GraduationCap, Award, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Experience"
          title="The journey so far"
          description="3+ years across enterprise environments, infrastructure engineering, and independent product development."
        />

        {/* Timeline */}
        <div className="mt-20 space-y-6">
          {experience.map((e, i) => (
            <motion.div
              key={`${e.company}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-elevated to-surface p-8 transition-all hover:border-white/15 md:p-10"
            >
              {/* Accent glow on hover */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative grid gap-6 md:grid-cols-12">
                {/* Left: Role info */}
                <div className="md:col-span-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <div className={`h-3 w-3 rounded-full bg-gradient-to-br ${
                        i === 0
                          ? "from-emerald-400 to-teal-400"
                          : i === 1
                          ? "from-blue-400 to-purple-500"
                          : "from-amber-400 to-orange-500"
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold leading-tight">{e.role}</h3>
                      <p className={`mt-1 text-sm font-medium ${
                        i === 0 ? "text-emerald-300" : i === 1 ? "text-blue-300" : "text-amber-300"
                      }`}>
                        {e.company}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/60">
                          {e.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-white/40">
                          <MapPin size={10} />
                          {e.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Bullets */}
                <div className="md:col-span-8">
                  <ul className="space-y-3">
                    {e.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + j * 0.05, duration: 0.5 }}
                        className="flex gap-3 text-sm text-white/70"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education + Certs row */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7"
          >
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
              <GraduationCap size={14} />
              Education
            </div>
            {education.map((edu) => (
              <div key={edu.degree}>
                <p className="font-display text-lg font-semibold leading-snug">{edu.degree}</p>
                <p className="mt-1.5 text-sm text-white/60">{edu.school}</p>
                <span className="mt-2 inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50">
                  Class of {edu.year}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-7"
          >
            <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300">
              <Award size={14} />
              Certifications
            </div>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert} className="flex gap-2.5 text-sm text-white/70">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                  {cert}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}