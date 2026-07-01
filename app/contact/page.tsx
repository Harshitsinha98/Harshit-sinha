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
  ArrowUpRight,
  Sparkles,
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

    // Build a clean WhatsApp message from form data
    const lines = [
      `👋 Hi, I'm *${form.name}*`,
      form.company ? `🏢 Company: ${form.company}` : "",
      `📧 Email: ${form.email}`,
      `📌 Project type: ${form.type}`,
      `💰 Budget: ${form.budget}`,
      ``,
      `📝 *Project details:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);

    // personal.whatsapp should be like "https://wa.me/91XXXXXXXXXX"
    // We append the pre-filled text to it
    const waBase = personal.whatsapp.includes("?")
      ? personal.whatsapp + "&text=" + encoded
      : personal.whatsapp + "?text=" + encoded;

    window.open(waBase, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="relative min-h-screen pt-32">
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-25 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,.5), transparent 70%)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
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
            Let's build something{" "}
            <span className="text-gradient">great</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Whether it's an MVP, a scale-up, or a legacy modernization — share
            what you're working on and I'll get back within 24 hours.
          </p>
        </motion.div>

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              href: `mailto:${personal.email}`,
              icon: Mail,
              label: "Email",
              sub: personal.email,
              color: "bg-blue-500/15 text-blue-300 group-hover:bg-blue-500/25",
              external: false,
            },
            {
              href: personal.whatsapp,
              icon: MessageCircle,
              label: "WhatsApp",
              sub: "Fastest response ⚡",
              color:
                "bg-emerald-500/15 text-emerald-300 group-hover:bg-emerald-500/25",
              external: true,
            },
            {
              href: `tel:${personal.phone}`,
              icon: Phone,
              label: "Call",
              sub: personal.phone,
              color:
                "bg-purple-500/15 text-purple-300 group-hover:bg-purple-500/25",
              external: false,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/5"
            >
              {/* Subtle glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div
                className={`relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${item.color}`}
              >
                <item.icon size={20} />
              </div>
              <p className="relative font-medium">{item.label}</p>
              <p className="relative mt-1 text-xs text-white/50">{item.sub}</p>
            </a>
          ))}
        </motion.div>

        {/* Form + sidebar */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 lg:col-span-3"
          >
            {/* Form glow */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full opacity-10 blur-[80px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,.6), transparent 70%)",
              }}
            />

            <div className="relative space-y-5">
              <h2 className="font-display text-2xl font-semibold">
                Tell me about your project
              </h2>
              <p className="text-xs text-white/40">
                Fill in the details and it'll open WhatsApp with your message
                pre-filled
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-white/60">
                    Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-white/60">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
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
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
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
                    onChange={(e) =>
                      setForm({ ...form, type: e.target.value })
                    }
                    className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
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
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                    className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
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
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                  placeholder="What are you building? What's the timeline? What problem are you solving?"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-sm font-medium shadow-lg shadow-emerald-500/20 transition-all hover:shadow-2xl hover:shadow-emerald-500/40 disabled:opacity-60"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <MessageCircle size={18} className="relative" />
                <span className="relative">
                  {sent
                    ? "Opening WhatsApp..."
                    : "Send via WhatsApp"}
                </span>
                <Send
                  size={14}
                  className="relative transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs text-white/40">
                Clicking send opens WhatsApp with your message pre-filled — no
                data stored.
              </p>
            </div>
          </motion.form>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4 lg:col-span-2"
          >
            {/* Response time */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="font-medium">Quick response</p>
                  <p className="text-xs text-white/50">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="flex items-center gap-2 font-display font-semibold">
                <Sparkles size={14} className="text-purple-400" />
                What happens next
              </h3>
              <div className="mt-4 space-y-4">
                {[
                  {
                    icon: MessageCircle,
                    title: "I review your message",
                    desc: "Same day in most cases.",
                    color: "text-emerald-300",
                  },
                  {
                    icon: Calendar,
                    title: "We hop on a call",
                    desc: "30 min to align on scope, timeline, and fit.",
                    color: "text-blue-300",
                  },
                  {
                    icon: CheckCircle2,
                    title: "I send a proposal",
                    desc: "Clear scope, milestones, and pricing.",
                    color: "text-purple-300",
                  },
                ].map((s, i) => (
                  <div key={s.title} className="flex gap-3">
                    <div className="relative flex flex-col items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                        <s.icon size={14} className={s.color} />
                      </div>
                      {i < 2 && (
                        <div className="mt-1 h-full w-px bg-gradient-to-b from-white/10 to-transparent" />
                      )}
                    </div>
                    <div className="pb-2">
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
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-display font-semibold">Or find me here</h3>
              <div className="mt-4 flex gap-2">
                {[
                  {
                    href: personal.linkedin,
                    Icon: Linkedin,
                    label: "LinkedIn",
                  },
                  { href: personal.github, Icon: Github, label: "GitHub" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center transition-all hover:border-white/20 hover:bg-white/[0.05]"
                  >
                    <s.Icon
                      size={18}
                      className="mx-auto transition-transform group-hover:scale-110"
                    />
                    <p className="mt-1 text-xs text-white/60">{s.label}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp highlight */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
              <div className="pointer-events-none absolute -right-10 -top-10 h-[100px] w-[100px] rounded-full bg-emerald-500/10 blur-[40px]" />
              <div className="relative flex items-start gap-3">
                <MessageCircle
                  size={18}
                  className="mt-0.5 shrink-0 text-emerald-400"
                />
                <p className="text-sm leading-relaxed text-white/80">
                  <span className="font-semibold text-emerald-300">
                    Prefer WhatsApp?{" "}
                  </span>
                  The form above sends your inquiry straight to WhatsApp — or{" "}
                  <a
                    href={personal.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-emerald-300 underline decoration-emerald-500/30 underline-offset-2 transition hover:text-emerald-200 hover:decoration-emerald-400/50"
                  >
                    message me directly
                    <ArrowUpRight size={12} />
                  </a>
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
}
