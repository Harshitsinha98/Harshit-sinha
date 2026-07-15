"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
} from "lucide-react";
import { personal, experience, skills, projects, education } from "@/lib/data";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen pt-32">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Top bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition group-hover:-translate-x-1"
            />
            Back to home
          </Link>

          <div className="flex gap-2">
            <button
              onClick={() => window.print()}
              className="glass glass-hover rounded-xl px-4 py-2 text-sm"
            >
              Print
            </button>
            <a
              href={personal.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium transition hover:shadow-lg hover:shadow-purple-500/40"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>
        </div>

        {/* Document */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass overflow-hidden rounded-3xl"
        >
          {/* Header */}
          <div className="relative overflow-hidden border-b border-white/5 p-10">
            <div
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,.8), transparent)",
              }}
            />

            <div className="relative grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {personal.name}
                </h1>
                <p className="mt-2 text-lg text-gradient">
                  {personal.role} · {personal.company}
                </p>
                <p className="mt-4 max-w-xl text-sm text-white/60">
                  Product builder and automation specialist. I ship web products
                  end-to-end using AI-assisted development, with a background in
                  technical operations (150+ tower sites, 99.9% uptime).
                  Currently deepening my software engineering fundamentals.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Mail size={14} className="text-blue-300" />
                  {personal.email}
                </a>
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Phone size={14} className="text-purple-300" />
                  {personal.phone}
                </a>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin size={14} className="text-emerald-300" />
                  India · Remote-ready
                </div>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Github size={14} />
                  Harshitsinha98
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Linkedin size={14} />
                  harshit-sinha98
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-10 p-10 md:grid-cols-3">
            {/* Left column */}
            <div className="md:col-span-2 space-y-10">
              {/* Experience */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                    <Briefcase size={16} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">
                    Experience
                  </h2>
                </div>

                <div className="space-y-6">
                  {experience.map((e) => (
                    <div
                      key={e.company + e.period}
                      className="relative border-l-2 border-white/10 pl-5"
                    >
                      <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-semibold">{e.role}</h3>
                        <span className="text-xs text-white/40">{e.period}</span>
                      </div>
                      <p className="text-sm text-blue-300">{e.company}</p>
                      <p className="text-xs text-white/40">{e.location}</p>
                      <ul className="mt-3 space-y-1.5">
                        {e.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-2 text-sm text-white/70"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Selected projects */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500/15 text-purple-300">
                    <Code2 size={16} />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">
                    Selected Projects
                  </h2>
                </div>

                <div className="space-y-4">
                  {projects.slice(0, 4).map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl border border-white/8 bg-white/[0.02] p-4"
                    >
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-semibold">{p.title}</h3>
                        <span className="text-xs text-white/40">
                          {p.stack.slice(0, 3).join(" · ")}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-white/60">{p.tagline}</p>
                      <p className="mt-2 text-xs text-emerald-300">{p.impact}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right column */}
            <div className="space-y-10">
              {/* Skills */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                    <Award size={16} />
                  </div>
                  <h2 className="font-display text-xl font-semibold">Skills</h2>
                </div>

                <div className="space-y-5">
                  {Object.entries(skills).map(([cat, items]) => (
                    <div key={cat}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                        {cat}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {items.map((s) => (
                          <span
                            key={s}
                            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/70"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
                    <GraduationCap size={16} />
                  </div>
                  <h2 className="font-display text-xl font-semibold">
                    Education
                  </h2>
                </div>
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                  >
                    <h3 className="font-semibold leading-snug">{edu.degree}</h3>
                    <p className="mt-1 text-sm text-white/60">{edu.school}</p>
                    <p className="mt-1 text-xs text-white/40">Class of {edu.year}</p>
                  </div>
                ))}
              </section>

              {/* Highlights */}
              <section>
                <h2 className="font-display text-xl font-semibold">
                  Highlights
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    5+ products built & deployed end-to-end
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    99.9% uptime across 150+ tower sites (Indus)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    Enterprise experience at Capgemini
                  </li>
                  <li className="flex gap-2">
                    <span className="text-emerald-400">✓</span>
                    End-to-end product ownership
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-medium transition hover:shadow-2xl hover:shadow-purple-500/40"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; color: black !important; }
          header, footer, nav { display: none !important; }
          .glass {
            background: white !important;
            backdrop-filter: none !important;
            border-color: #e5e7eb !important;
          }
          a { color: black !important; }
        }
      `}</style>
    </div>
  );
}
