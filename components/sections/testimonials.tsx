"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const testimonials = [
  {
    quote: "Be the first to share your experience working with Harshit.",
    author: "Your Name",
    role: "Future Client",
    placeholder: true,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from the work"
          description="Trusted by founders, teams, and businesses across multiple industries."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <Quote size={24} className="text-purple-400/60" />
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {i === 1
                  ? "Reserved for client #1 — your testimonial here."
                  : i === 2
                  ? "Reserved for client #2 — your testimonial here."
                  : "Reserved for client #3 — your testimonial here."}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30" />
                <div>
                  <p className="text-sm font-medium">Future Client</p>
                  <p className="text-xs text-white/40">Awaiting review</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
