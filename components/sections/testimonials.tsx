"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Quote, ArrowUpRight, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="References"
          title="References on request"
          description="The products are live and the impact is real. Detailed references from managers and collaborators are available on request."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-elevated to-surface p-10 text-center md:p-14"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500/15 to-blue-500/10 blur-3xl" />

          <div className="relative">
            <Quote size={40} className="mx-auto text-purple-400/50" />

            {/* Empty star row */}
            <div className="mt-6 flex justify-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="text-white/15" />
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-xl font-display text-xl font-light leading-relaxed text-white/70 md:text-2xl">
              &ldquo;Happy to connect you with managers and teammates I&apos;ve shipped
              production work with.&rdquo;
            </p>
            <p className="mt-4 text-sm text-white/40">— just ask</p>

            <Link
              href="#contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 text-sm font-medium shadow-lg shadow-purple-500/20 transition hover:shadow-2xl hover:shadow-purple-500/40"
            >
              Get in touch
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
