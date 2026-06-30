"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Phone, Linkedin, Github } from "lucide-react";
import { personal } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,.5), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Let's build something great together"
          description="Got a product idea, a problem to solve, or just want to chat about engineering? My inbox is open."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="space-y-3">
              <a
                href={`mailto:${personal.email}`}
                className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40">Email</p>
                  <p className="text-sm font-medium">{personal.email}</p>
                </div>
              </a>

              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40">WhatsApp</p>
                  <p className="text-sm font-medium">{personal.phone}</p>
                </div>
              </a>

              <a
                href={`tel:${personal.phone}`}
                className="glass glass-hover group flex items-center gap-4 rounded-2xl p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-white/40">Phone</p>
                  <p className="text-sm font-medium">{personal.phone}</p>
                </div>
              </a>

              <div className="flex gap-3 pt-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex-1 rounded-2xl p-4 text-center"
                >
                  <Linkedin size={18} className="mx-auto" />
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass glass-hover flex-1 rounded-2xl p-4 text-center"
                >
                  <Github size={18} className="mx-auto" />
                </a>
              </div>

              <div className="glass mt-4 rounded-2xl p-5">
                <div className="flex items-center gap-2 text-sm text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Available for new projects
                </div>
                <p className="mt-2 text-xs text-white/50">
                  Usually replies within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass space-y-4 rounded-2xl p-8 lg:col-span-3"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-white/60">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-white/60">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-white/60">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="Tell me about your project, timeline, and what you're trying to achieve..."
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-sm font-medium transition hover:shadow-2xl hover:shadow-purple-500/40"
            >
              {sent ? "Opening your mail client..." : "Send Message"}
              <Send size={16} className="transition group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs text-white/40">
              Or email directly at <span className="text-white/70">{personal.email}</span>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
