"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Send, Star, Linkedin, CheckCircle2 } from "lucide-react";

export default function TestimonialPage() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    linkedinUrl: "",
    rating: 5,
    quote: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSent(true);
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-[140px]"
        style={{
          background: "radial-gradient(ellipse, rgba(139,92,246,.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white"
        >
          <ArrowLeft size={14} className="transition group-hover:-translate-x-1" />
          Back to home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
            <Star size={12} className="text-purple-400" />
            Leave a recommendation
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            Worked with Harshit? <span className="text-gradient">Say a few words.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-white/60">
            If you&apos;re a manager, teammate, or client, a short honest note
            about working together goes a long way. It publishes to the site
            right away — Harshit can still remove anything later if needed.
          </p>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.06] p-10 text-center"
          >
            <CheckCircle2 size={36} className="text-emerald-400" />
            <div>
              <p className="font-medium text-white">Thanks — it&apos;s live!</p>
              <p className="mt-1 text-sm text-white/60">
                Your recommendation is now on the homepage. Really appreciate it.
              </p>
            </div>
            <Link
              href="/#testimonials"
              className="mt-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              See it on the site
            </Link>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8"
          >
            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-white/60">Your name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-white/60">Your role *</label>
                  <input
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                    placeholder="Engineering Manager"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-white/60">Company *</label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                    placeholder="Capgemini"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-white/60">
                    LinkedIn profile (optional)
                  </label>
                  <input
                    value={form.linkedinUrl}
                    onChange={(e) => setForm({ ...form, linkedinUrl: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                    placeholder="linkedin.com/in/you"
                  />
                  <p className="mt-1.5 flex items-center gap-1 text-[11px] text-white/35">
                    <Linkedin size={11} />
                    Lets visitors verify it&apos;s really you
                  </p>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-white/60">Rating</label>
                <div className="mt-2 flex gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setForm({ ...form, rating: n })}
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                      className="transition hover:scale-110"
                    >
                      <Star
                        size={24}
                        className={n <= form.rating ? "fill-purple-400 text-purple-400" : "text-white/15"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-white/60">Your recommendation *</label>
                <textarea
                  required
                  rows={6}
                  minLength={10}
                  value={form.quote}
                  onChange={(e) => setForm({ ...form, quote: e.target.value })}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm transition-all placeholder:text-white/30 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 hover:border-white/20"
                  placeholder="What was it like working with Harshit? What did he actually deliver?"
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4 text-sm font-medium shadow-lg shadow-purple-500/20 transition-all hover:shadow-2xl hover:shadow-purple-500/40 disabled:opacity-60"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">
                  {submitting ? "Publishing..." : "Publish Recommendation"}
                </span>
                <Send size={14} className="relative transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-white/40">
                This goes live on the homepage right away. Nothing else is
                shared or emailed — Harshit can remove any entry later from
                his side if needed.
              </p>
            </div>
          </motion.form>
        )}
      </div>
    </div>
  );
}
