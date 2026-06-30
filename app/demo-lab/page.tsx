"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Monitor,
  Smartphone,
  Tablet,
  Code2,
  Layers,
  Zap,
} from "lucide-react";
import { projects } from "@/lib/data";

export default function DemoLabPage() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [tab, setTab] = useState<"preview" | "features" | "stack">("preview");

  const project = projects[active];

  const viewWidths = {
    desktop: "max-w-4xl",
    tablet: "max-w-xl",
    mobile: "max-w-[340px]",
  };

  return (
    <div className="relative min-h-screen pt-32">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,.4), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Back */}
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
          className="mt-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            Demo Lab
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Step inside the <span className="text-gradient">products</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            A live showroom of every shipped product. Switch between projects, toggle viewports, and
            explore the features that make them work.
          </p>
        </motion.div>

        {/* Lab */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="glass rounded-2xl p-4">
              <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                Products
              </p>
              <div className="space-y-1">
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActive(i);
                      setTab("preview");
                    }}
                    data-hover
                    className={`group relative w-full overflow-hidden rounded-xl p-3 text-left transition ${
                      active === i ? "bg-white/8" : "hover:bg-white/4"
                    }`}
                  >
                    {active === i && (
                      <motion.div
                        layoutId="demo-active"
                        className="absolute inset-y-2 left-0 w-1 rounded-r bg-gradient-to-b from-blue-400 to-purple-500"
                      />
                    )}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.accent} font-display text-sm font-bold`}
                      >
                        {p.title.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium">{p.title}</p>
                        <p className="truncate text-xs text-white/40">
                          {p.tagline}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="glass mt-4 rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                At a glance
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Status</span>
                  <span className="text-emerald-300">
                    {project.id === "jewelry-ecom" ? "Building" : "Live"}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Stack</span>
                  <span className="text-white/80">
                    {project.stack.length} tech
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Features</span>
                  <span className="text-white/80">
                    {project.features.length}+
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main viewport */}
          <main className="lg:col-span-9">
            <div className="glass overflow-hidden rounded-2xl">
              {/* Top bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
                  <div className="ml-4 rounded-md bg-black/40 px-3 py-1 font-mono text-xs text-white/50">
                    {project.id}.harshit.dev
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-lg bg-white/5 p-1">
                  {[
                    { id: "desktop" as const, Icon: Monitor },
                    { id: "tablet" as const, Icon: Tablet },
                    { id: "mobile" as const, Icon: Smartphone },
                  ].map(({ id, Icon }) => (
                    <button
                      key={id}
                      onClick={() => setView(id)}
                      className={`rounded-md p-1.5 transition ${
                        view === id
                          ? "bg-white/10 text-white"
                          : "text-white/40 hover:text-white"
                      }`}
                    >
                      <Icon size={14} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 border-b border-white/5 px-4 py-2">
                {[
                  { id: "preview" as const, label: "Preview", Icon: Play },
                  { id: "features" as const, label: "Features", Icon: Layers },
                  { id: "stack" as const, label: "Stack", Icon: Code2 },
                ].map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                      tab === id
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    <Icon size={12} />
                    {label}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="relative min-h-[560px] bg-gradient-to-br from-black via-elevated to-black p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active}-${view}-${tab}`}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className={`mx-auto w-full ${viewWidths[view]}`}
                  >
                    {tab === "preview" && (
                      <div
                        className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent} p-1`}
                      >
                        <div className="rounded-lg bg-black/85 p-8 backdrop-blur">
                          {/* Mock app header */}
                          <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                            <div className="flex items-center gap-2">
                              <div
                                className={`h-7 w-7 rounded-lg bg-gradient-to-br ${project.accent}`}
                              />
                              <span className="font-display font-semibold">
                                {project.title}
                              </span>
                            </div>
                            <div className="flex gap-2">
                              <div className="h-7 w-16 rounded-md bg-white/5" />
                              <div className="h-7 w-7 rounded-md bg-white/10" />
                            </div>
                          </div>

                          {/* Mock metrics row */}
                          <div className="mb-6 grid grid-cols-3 gap-3">
                            {["Active", "Today", "Total"].map((s, i) => (
                              <div
                                key={s}
                                className="rounded-lg bg-white/5 p-3"
                              >
                                <p className="text-xs text-white/40">{s}</p>
                                <p className="mt-1 font-display text-xl font-bold text-gradient">
                                  {(i + 1) * 247}
                                </p>
                              </div>
                            ))}
                          </div>

                          {/* Mock list */}
                          <div className="space-y-2">
                            {project.features
                              .slice(0, 4)
                              .map((f, i) => (
                                <motion.div
                                  key={f}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * i }}
                                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                                >
                                  <div
                                    className={`h-8 w-8 rounded-md bg-gradient-to-br ${project.accent} opacity-60`}
                                  />
                                  <div className="flex-1">
                                    <p className="text-sm text-white/85">{f}</p>
                                    <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/5">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${60 + i * 8}%` }}
                                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                                        className={`h-full rounded-full bg-gradient-to-r ${project.accent}`}
                                      />
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {tab === "features" && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.features.map((f, i) => (
                          <motion.div
                            key={f}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="glass rounded-xl p-4"
                          >
                            <div
                              className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${project.accent}`}
                            >
                              <Zap size={14} />
                            </div>
                            <p className="text-sm font-medium text-white/90">
                              {f}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {tab === "stack" && (
                      <div className="space-y-3">
                        {project.stack.map((s, i) => (
                          <motion.div
                            key={s}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.accent} font-mono text-xs font-bold`}
                              >
                                {s.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium">{s}</p>
                                <p className="text-xs text-white/40">
                                  Production
                                </p>
                              </div>
                            </div>
                            <span className="font-mono text-xs text-emerald-300">
                              ✓ active
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="border-t border-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {project.title}
                    </p>
                    <p className="text-xs text-white/40">{project.tagline}</p>
                  </div>
                  <Link
                    href={`/case-studies#case-${project.id}`}
                    className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium transition hover:shadow-lg hover:shadow-purple-500/40"
                  >
                    Read full case study →
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
