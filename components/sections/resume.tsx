"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowUpRight, FileText } from "lucide-react";
import { personal } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

const highlights = [
  "Full-stack — end-to-end ownership",
  "Enterprise + startup experience",
  "Automation & AI integration",
];

export function ResumeSection() {
  const initials = personal.name
    .split(" ")
    .map((n: string) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section id="resume" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Resume"
          title="Want the one-pager?"
          description="Everything above — experience, skills, and credentials — packed into a clean PDF."
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-elevated to-surface p-8 md:p-10"
        >
          {/* Accent glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-40 blur-3xl" />

          <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">
            {/* Identity */}
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 blur-sm" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 font-display text-xl font-bold">
                  {initials}
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">{personal.name}</h3>
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

            {/* Actions */}
            <div className="flex flex-col items-stretch gap-3 sm:flex-row md:flex-col">
              <a
                href={personal.resumeUrl}
                download
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 text-sm font-medium shadow-lg shadow-purple-500/20 transition hover:shadow-2xl hover:shadow-purple-500/40"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <Download size={16} className="relative" />
                <span className="relative">Download PDF</span>
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <FileText size={16} />
                View online
              </a>
            </div>
          </div>

          {/* Highlight chips + link back to the detail above */}
          <div className="relative mt-8 flex flex-wrap items-center gap-2 border-t border-white/10 pt-6">
            {highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70"
              >
                {h}
              </span>
            ))}
            <Link
              href="#experience"
              className="group ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition hover:text-white"
            >
              See full experience
              <ArrowUpRight size={12} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
