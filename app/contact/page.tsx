"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MessageCircle,
  Phone,
  Linkedin,
  Github,
  Send,
  Clock,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { personal } from "@/lib/data";

const projectTypes = [
  "New product / MVP",
  "Existing product help",
  "Automation system",
  "Website / Landing page",
  "Consulting",
  "Other",
];

const budgets = [
  "< ₹50K",
  "₹50K – ₹2L",
  "₹2L – ₹5L",
  "₹5L+",
  "Let's discuss",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: projectTypes[0],
    budget: budgets[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[${form.type}] Project inquiry from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nType: ${form.type}\nBudget: ${form.budget}\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="relative min-h-screen pt-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 rounded-full opacity-25 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
          Back to home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Accepting new projects
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Let's build something <span className="text-gradient">great</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Whether it's an MVP, a scale-up, or a legacy modernization — share what
            you're working on and I'll get back within 24 hours.
          </p>
        </motion.div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          <a
            href={`mailto:${personal.email}`}
            className="glass glass-hover group rounded-2xl p-6 text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300 transition group-hover:bg-blue-500/25">
              <Mail size={20} />
            </div>
            <p className="font-medium">Email</p>
            <p className="mt-1 text-xs text-white/50">{personal.email}</p>
          </a>

          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-hover group rounded-2xl p-6 text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 transition group-hover:bg-emerald-500/25">
              <MessageCircle size={20} />
            </div>
            <p className="font-medium">WhatsApp</p>
            <p className="mt-1 text-xs text-white/50">Fastest response</p>
          </a>

          <a
            href={`tel:${personal.phone}`}
            className="glass glass-hover group rounded-2xl p-6 text-center"
          >
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300 transition group-hover:bg-purple-500/25">
              <Phone size={20} />
            </div>
            <p className="font-medium">Call</p>
            <p className="mt-1 text-xs text-white/50">{personal.phone}</p>
          </a>
        </motion.div>

        {/* Form + sidebar */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass space-y-5 rounded-2xl p-8 lg:col-span-3"
          >
            <h2 className="font-display text-2xl font-semibold">
              Tell me about your project
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-white/60">Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-white/60">Email *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-white/60">
                Company / Organization
              </label>
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="Optional"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-white/60">
                  Project type
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                >
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-elevated">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-white/60">
                  Estimated budget
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                >
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-elevated">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-white/60">
                Project details *
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                placeholder="What are you building? What's the timeline? What problem are you solving?"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-sm font-medium transition hover:shadow-2xl hover:shadow-purple-500/40"
            >
              {sent ? "Opening your mail client..." : "Send inquiry"}
              <Send size={16} className="transition group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs text-white/40">
              By submitting, your email client opens with the message pre-filled.
            </p>
          </motion.form>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4 lg:col-span-2"
          >
            {/* Response time */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-medium">Quick response</p>
                  <p className="text-xs text-white/50">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold">What happens next</h3>
              <div className="mt-4 space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "I review your inquiry",
                    desc: "Same day in most cases.",
                  },
                  {
                    icon: Calendar,
                    title: "We hop on a call",
                    desc: "30 min to align on scope, timeline, and fit.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "I send a proposal",
                    desc: "Clear scope, milestones, and pricing.",
                  },
                ].map((s, i) => (
                  <div key={s.title} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/70">
                      <s.icon size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        {i + 1}. {s.title}
                      </p>
                      <p className="text-xs text-white/50">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold">Or find me here</h3>
              <div className="mt-4 flex gap-2">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover flex-1 rounded-xl border border-white/10 p-3 text-center"
                >
                  <Linkedin size={18} className="mx-auto" />
                  <p className="mt-1 text-xs text-white/60">LinkedIn</p>
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-hover flex-1 rounded-xl border border-white/10 p-3 text-center"
                >
                  <Github size={18} className="mx-auto" />
                  <p className="mt-1 text-xs text-white/60">GitHub</p>
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-6">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-purple-300">PS — </span>
                If your project is urgent or you'd rather chat directly, WhatsApp
                is the fastest path.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
