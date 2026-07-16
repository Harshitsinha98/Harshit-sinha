"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Quote, ArrowUpRight, Star, Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import type { StoredTestimonial } from "@/lib/testimonial-types";

function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-elevated to-surface p-10 text-center md:p-14"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500/15 to-blue-500/10 blur-3xl" />

      <div className="relative">
        <Quote size={40} className="mx-auto text-purple-400/50" />

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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/testimonial"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3.5 text-sm font-medium shadow-lg shadow-purple-500/20 transition hover:shadow-2xl hover:shadow-purple-500/40"
          >
            Leave a recommendation
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  // Fetched client-side (not from lib/data.ts) so new submissions show up
  // immediately without needing a rebuild/redeploy.
  const [testimonials, setTestimonials] = useState<StoredTestimonial[] | null>(null);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data.testimonials ?? []))
      .catch(() => setTestimonials([]));
  }, []);

  const hasTestimonials = !!testimonials && testimonials.length > 0;

  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="References"
          title={hasTestimonials ? "What people say" : "References on request"}
          description={
            hasTestimonials
              ? "Real words from people I've worked with — submitted directly, published as-is."
              : "The products are live and the impact is real. Detailed references from managers and collaborators are available on request."
          }
        />

        {hasTestimonials ? (
          <>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {testimonials!.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7"
                >
                  <Quote size={28} className="text-purple-400/40" />
                  <p className="mt-4 text-white/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-white/50">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    {t.linkedinUrl && (
                      <a
                        href={t.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.name} on LinkedIn`}
                        className="rounded-lg border border-white/10 p-2 text-white/50 transition hover:border-white/20 hover:text-white"
                      >
                        <Linkedin size={14} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/testimonial"
                className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
              >
                Add your own recommendation
                <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
