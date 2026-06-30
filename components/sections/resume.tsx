"use client";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { personal, skills, experience } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function ResumeSection() {
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
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold">{personal.name}</h3>
              <p className="mt-1 text-white/60">{personal.role} · {personal.company}</p>
            </div>
            <a
              href={personal.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 text-sm font-medium transition hover:shadow-lg hover:shadow-purple-500/40"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300">Experience</h4>
              <div className="mt-4 space-y-5">
                {experience.map((e) => (
                  <div key={e.company} className="border-l-2 border-white/10 pl-4">
                    <p className="font-medium">{e.role}</p>
                    <p className="text-sm text-white/60">{e.company} · {e.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-300">Core Skills</h4>
              <div className="mt-4 flex flex-wrap gap-2">
                {Object.values(skills).flat().slice(0, 16).map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-emerald-300">Highlights</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><FileText size={14} className="mt-0.5 text-emerald-400" /> 5+ production products shipped</li>
                <li className="flex gap-2"><FileText size={14} className="mt-0.5 text-emerald-400" /> 3 active client engagements</li>
                <li className="flex gap-2"><FileText size={14} className="mt-0.5 text-emerald-400" /> Enterprise experience at Capgemini</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
