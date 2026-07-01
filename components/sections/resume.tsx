"use client";
import { motion } from "framer-motion";
import { Download, Briefcase, CheckCircle2, BookOpen, Award } from "lucide-react";
import { personal, skills, experience, education, certifications } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function ResumeSection() {
  const initials = personal.name
    .split(" ")
    .map((n: string) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const allSkills = Object.values(skills).flat();
  const shownSkills = allSkills.slice(0, 18);
  const remaining = allSkills.length - shownSkills.length;

  const stats = [
    { value: "5+", label: "Products shipped" },
    { value: "3", label: "Active engagements" },
    { value: "3+", label: "Years of experience" },
  ];

  return (
    <section id="resume" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Resume"
          title="The credentials"
          description="A snapshot of experience, skills, and what I bring to the table."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 glass rounded-3xl p-8 md:p-12"
        >
          {/* Header */}
          <div className="flex flex-col items-start justify-between gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 blur-sm" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 font-display text-lg font-bold">
                  {initials}
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">{personal.name}</h3>
                <p className="mt-1 text-sm text-white/60">
                  {personal.role} · {personal.company}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-xs text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Open to new roles &amp; projects
                </div>
              </div>
            </div>

            <a
              href={personal.resumeUrl}
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-medium transition hover:shadow-lg hover:shadow-purple-500/40"
            >
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Download size={16} className="relative" />
              <span className="relative">Download PDF</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-center transition hover:border-white/15 hover:bg-white/[0.04]"
              >
                <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-xs text-white/50">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {/* Experience column */}
            <div>
              <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                <Briefcase size={12} />
                Experience
              </h4>
              <div className="mt-4 space-y-5 border-l border-white/10 pl-5">
                {experience.map((e) => (
                  <div key={e.company} className="relative">
                    <div className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-gradient-to-br from-blue-500 to-purple-600" />
                    <p className="font-medium leading-snug">{e.role}</p>
                    <p className="text-sm text-white/60">{e.company}</p>
                    <p className="mt-0.5 text-xs text-white/40">{e.period}</p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <h4 className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-300">
                <BookOpen size={12} />
                Education
              </h4>
              <div className="mt-4 space-y-3 border-l border-white/10 pl-5">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative">
                    <div className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-gradient-to-br from-blue-500 to-purple-600" />
                    <p className="font-medium text-sm leading-snug">{edu.degree}</p>
                    <p className="text-xs text-white/50">{edu.school} · {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills + Highlights column */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                Core Skills
              </h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {shownSkills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:border-purple-500/40 hover:text-white"
                  >
                    {s}
                  </span>
                ))}
                {remaining > 0 && (
                  <span className="rounded-lg border border-dashed border-white/15 px-3 py-1 text-xs text-white/40">
                    +{remaining} more
                  </span>
                )}
              </div>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                Highlights
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                  5+ production products shipped end-to-end
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                  3 active client engagements
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                  Enterprise engineering at Capgemini
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                  Automation & AI integration (Python, RPA, LangChain)
                </li>
              </ul>

              <h4 className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-300">
                <Award size={12} />
                Certifications
              </h4>
              <ul className="mt-3 space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-2 text-xs text-white/60">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-purple-400" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}