"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
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
import { SectionHeading } from "@/components/shared/section-heading";

const inquiryTypes = [
  "Full-time role",
  "Contract role",
  "Freelance project",
  "Just connecting",
  "Other",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: inquiryTypes[0],
    message: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines = [
      `👋 Hi, I'm *${form.name}*`,
      form.company ? `🏢 Company: ${form.company}` : "",
      `📧 Email: ${form.email}`,
      `📌 Regarding: ${form.type}`,
      ``,
      `📝 *Details:*`,
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(lines);

    const waBase = personal.whatsapp.includes("?")
      ? personal.whatsapp + "&text=" + encoded
      : personal.whatsapp + "?text=" + encoded;

    window.open(waBase, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const quickActions = [
    {
      href: `mailto:${personal.email}`,
      icon: Mail,
      label: "Email",
      sub: personal.email,
      color: "bg-blue-500/15 text-blue-300 group-hover:bg-blue-500/25",
      external: false,
    },
    {
      href: personal.linkedin,
      icon: Linkedin,
      label: "LinkedIn",
      sub: "Best for recruiters",
      color: "bg-sky-500/15 text-sky-300 group-hover:bg-sky-500/25",
      external: true,
    },
    {
      href: personal.whatsapp,
      icon: MessageCircle,
      label: "WhatsApp",
      sub: "Fastest response ⚡",
      color: "bg-emerald-500/15 text-emerald-300 group-hover:bg-emerald-500/25",
      external: true,
    },
  ];

  const nextSteps = [
    {
      icon: MessageCircle,
      title: "I review your message",
      desc: "Same day in most cases.",
      color: "text-emerald-300",
    },
    {
      icon: Calendar,
      title: "We hop on a quick call",
      desc: "15–30 min to understand the role and see if it's a fit.",
      color: "text-blue-300",
    },
    {
      icon: CheckCircle2,
      title: "We take it forward",
      desc: "Interviews, a task, or next steps — whatever your process is.",
      color: "text-purple-300",
    },
  ];

  const socialLinks = [
    { href: personal.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: personal.github, Icon: Github, label: "GitHub" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div
        className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Open to full-time software engineering roles — and select freelance projects. Tell me about the opportunity and I'll get back within 24 hours."
        />

        {/* Quick actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {quickActions.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-purple-500/5"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div
                  className={`relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${item.color}`}
                >
                  <Icon size={20} />
                </div>
                <p className="relative font-medium">{item.label}</p>
                <p className="relative mt-1 text-xs text-white/50">{item.sub}</p>
              </a>
            );
          })}
        </motion.div>

        {/* Form + sidebar */}
        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 lg:col-span-3"
          >
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-[200px] w-[200px] rounded-full opacity-10 blur-[80px]"
              style={{
                background: "radial-gradient(circle, rgba(139,92,246,.6), transparent 70%)",
              }}
            />

            <div className="relative space-y-5">
              <h3 className="font-display text-2xl font-semibold">
                Reach out
              </h3>
              <p className="text-xs text-white/40">
                Fill in the details and it&apos;ll open WhatsApp with your message pre-filled
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-white/60">Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
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
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                  placeholder="Optional"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-white/60">What&apos;s this about?</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                >
                  {inquiryTypes.map((t) => (
                    <option key={t} value={t} className="bg-elevated">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-white/60">
                  Details *
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                  placeholder="Tell me about the role or opportunity — the team, the stack, and what you're looking for."
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-sm font-medium shadow-lg shadow-emerald-500/20 transition-all hover:shadow-2xl hover:shadow-emerald-500/40 disabled:opacity-60"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <MessageCircle size={18} className="relative" />
                <span className="relative">
                  {sent ? "Opening WhatsApp..." : "Send via WhatsApp"}
                </span>
                <Send size={14} className="relative transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-white/40">
                Clicking send opens WhatsApp with your message pre-filled — no data stored.
              </p>
            </div>
          </motion.form>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
                  <p className="text-xs text-white/50">Usually within 24 hours</p>
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
                {nextSteps.map((s, i) => {
                  const StepIcon = s.icon;
                  return (
                    <div key={s.title} className="flex gap-3">
                      <div className="relative flex flex-col items-center">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">
                          <StepIcon size={14} className={s.color} />
                        </div>
                        {i < nextSteps.length - 1 && (
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
                  );
                })}
              </div>
            </div>

            {/* Social */}
            <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
              <h3 className="font-display font-semibold">Or find me here</h3>
              <div className="mt-4 flex gap-2">
                {socialLinks.map((s) => {
                  const SocialIcon = s.Icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-center transition-all hover:border-white/20 hover:bg-white/[0.05]"
                    >
                      <SocialIcon
                        size={18}
                        className="mx-auto transition-transform group-hover:scale-110"
                      />
                      <p className="mt-1 text-xs text-white/60">{s.label}</p>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* WhatsApp highlight */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent p-6">
              <div className="pointer-events-none absolute -right-10 -top-10 h-[100px] w-[100px] rounded-full bg-emerald-500/10 blur-[40px]" />
              <div className="relative flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-emerald-400" />
                <p className="text-sm leading-relaxed text-white/80">
                  <span className="font-semibold text-emerald-300">Prefer WhatsApp? </span>
                  The form above sends your message straight to WhatsApp — or{" "}
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
    </section>
  );
}
