"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import {
  ArrowLeft,
  Play,
  Monitor,
  Smartphone,
  Tablet,
  Code2,
  Layers,
  Zap,
  Globe,
  ChevronRight,
  ExternalLink,
  Clock,
  RotateCw,
} from "lucide-react";
import { projects } from "@/lib/data";

export default function DemoLabPage() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [tab, setTab] = useState<"preview" | "features" | "stack">("preview");
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const project = projects[active];

  // Reset the loading shimmer whenever the live preview target changes.
  useEffect(() => {
    if (project.liveUrl && tab === "preview") setLoading(true);
  }, [active, view, tab, reloadKey, project.liveUrl]);

  const viewWidths = {
    desktop: "max-w-4xl",
    tablet: "max-w-xl",
    mobile: "max-w-[340px]",
  };

  return (
    <div className="relative min-h-screen pt-32">
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,.4), transparent 70%)",
        }}
      />
      <div
        className="absolute left-0 top-[60%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,.6), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Back */}
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
          className="mt-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-white/60">
            <span className="h-1 w-1 rounded-full bg-purple-400" />
            Demo Lab
          </div>
          <h1 className="font-display text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Step inside the{" "}
            <span className="text-gradient">products</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/60">
            A live showroom of every shipped product. Switch between projects,
            toggle viewports, and explore the features that make them work.
          </p>
        </motion.div>

        {/* Lab */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-4"
            >
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
                    className={`group relative w-full overflow-hidden rounded-xl p-3 text-left transition-all duration-300 ${
                      active === i
                        ? "bg-white/[0.08] shadow-lg shadow-purple-500/5"
                        : "hover:bg-white/[0.04]"
                    }`}
                  >
                    {active === i && (
                      <motion.div
                        layoutId="demo-active"
                        className="absolute inset-y-2 left-0 w-1 rounded-r bg-gradient-to-b from-blue-400 to-purple-500"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.5,
                        }}
                      />
                    )}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${p.accent} font-display text-sm font-bold ring-1 ring-white/10 transition-transform duration-300 ${
                          active === i ? "scale-110" : "group-hover:scale-105"
                        }`}
                      >
                        {p.title.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`truncate text-sm font-medium transition-colors ${
                            active === i ? "text-white" : "text-white/80"
                          }`}
                        >
                          {p.title}
                        </p>
                        <p className="truncate text-xs text-white/40">
                          {p.tagline}
                        </p>
                      </div>
                      {active === i && (
                        <ChevronRight
                          size={14}
                          className="ml-auto shrink-0 text-white/40"
                        />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="glass mt-4 rounded-2xl p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                At a glance
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Status</span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.id === "jewelry-ecom"
                          ? "bg-amber-400"
                          : "bg-emerald-400"
                      }`}
                    />
                    <span
                      className={
                        project.id === "jewelry-ecom"
                          ? "text-amber-300"
                          : "text-emerald-300"
                      }
                    >
                      {project.id === "jewelry-ecom" ? "Building" : "Live"}
                    </span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Stack</span>
                  <span className="font-mono text-white/80">
                    {project.stack.length} tech
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/60">Features</span>
                  <span className="font-mono text-white/80">
                    {project.features.length}+
                  </span>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Main viewport */}
          <main className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass overflow-hidden rounded-2xl ring-1 ring-white/[0.05]"
            >
              {/* Browser chrome */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70 transition hover:bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70 transition hover:bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/70 transition hover:bg-emerald-500" />
                  <div className="ml-4 flex items-center gap-2 rounded-lg bg-black/40 px-3 py-1.5 ring-1 ring-white/[0.06]">
                    {project.liveUrl ? (
                      <span className="text-[10px] text-emerald-400/70">🔒</span>
                    ) : (
                      <Globe size={10} className="text-white/30" />
                    )}
                    <span className="font-mono text-xs text-white/50">
                      {project.displayUrl}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && tab === "preview" && (
                    <button
                      onClick={() => setReloadKey((k) => k + 1)}
                      title="Reload preview"
                      className="rounded-md p-1.5 text-white/40 transition hover:text-white"
                    >
                      <RotateCw size={14} />
                    </button>
                  )}
                  <div className="flex items-center gap-1 rounded-lg bg-white/[0.04] p-1 ring-1 ring-white/[0.06]">
                    {[
                      { id: "desktop" as const, Icon: Monitor },
                      { id: "tablet" as const, Icon: Tablet },
                      { id: "mobile" as const, Icon: Smartphone },
                    ].map(({ id, Icon }) => (
                      <button
                        key={id}
                        onClick={() => setView(id)}
                        className="relative rounded-md p-1.5 transition"
                      >
                        {view === id && (
                          <motion.div
                            layoutId="viewport-active"
                            className="absolute inset-0 rounded-md bg-white/10"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.4,
                            }}
                          />
                        )}
                        <Icon
                          size={14}
                          className={`relative z-10 transition ${
                            view === id ? "text-white" : "text-white/40"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open full site in new tab"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1.5 text-xs font-medium transition hover:bg-white/20"
                    >
                      Open <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 border-b border-white/5 bg-white/[0.01] px-4 py-2">
                {[
                  { id: "preview" as const, label: "Preview", Icon: Play },
                  { id: "features" as const, label: "Features", Icon: Layers },
                  { id: "stack" as const, label: "Stack", Icon: Code2 },
                ].map(({ id, label, Icon }) => (
                  <button
                    key={id}
                    onClick={() => setTab(id)}
                    className="relative flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition"
                  >
                    {tab === id && (
                      <motion.div
                        layoutId="tab-active"
                        className="absolute inset-0 rounded-lg bg-white/10"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.4,
                        }}
                      />
                    )}
                    <Icon
                      size={12}
                      className={`relative z-10 ${
                        tab === id ? "text-white" : "text-white/50"
                      }`}
                    />
                    <span
                      className={`relative z-10 ${
                        tab === id ? "text-white" : "text-white/50"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="relative min-h-[560px] bg-gradient-to-br from-black via-elevated to-black p-8">
                {/* Subtle grid in viewport */}
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active}-${view}-${tab}`}
                    initial={{ opacity: 0, scale: 0.97, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`relative mx-auto w-full ${viewWidths[view]} transition-all duration-500`}
                  >
                    {tab === "preview" &&
                      (project.liveUrl ? (
                        <div
                          className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${project.accent} p-[1px] shadow-2xl shadow-black/40`}
                        >
                          <div className="overflow-hidden rounded-[11px] bg-black">
                            <div
                              className={`relative w-full ${
                                view === "mobile"
                                  ? "h-[660px]"
                                  : view === "tablet"
                                  ? "h-[640px]"
                                  : "h-[560px]"
                              }`}
                            >
                              {loading && (
                                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/85">
                                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-transparent" />
                                  <p className="font-mono text-xs text-white/40">
                                    Loading {project.displayUrl}…
                                  </p>
                                </div>
                              )}
                              <iframe
                                key={`${project.id}-${view}-${reloadKey}`}
                                src={project.liveUrl}
                                title={`${project.title} — live`}
                                loading="lazy"
                                onLoad={() => setLoading(false)}
                                className="h-full w-full border-0 bg-white"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                                referrerPolicy="no-referrer-when-downgrade"
                              />
                            </div>
                          </div>
                          <p className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] text-white/50 backdrop-blur">
                            Interactive live preview — click & scroll inside
                          </p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-black/40 py-20 text-center">
                          <div
                            className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent}`}
                          >
                            <Clock size={26} className="text-white" />
                          </div>
                          <h4 className="font-display text-2xl font-semibold">
                            {project.title}
                          </h4>
                          <p className="max-w-md text-sm text-white/50">
                            {project.solution}
                          </p>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300">
                            Launching Soon · Beta planned Q3
                          </span>
                        </div>
                      ))}

                    {tab === "features" && (
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.features.map((f, i) => (
                          <motion.div
                            key={f}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group glass rounded-xl p-4 transition-all hover:bg-white/[0.06]"
                          >
                            <div
                              className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${project.accent} ring-1 ring-white/10 transition-transform group-hover:scale-110`}
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
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.06 }}
                            className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-white/20 hover:bg-white/[0.04]"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${project.accent} font-mono text-xs font-bold ring-1 ring-white/10 transition-transform group-hover:scale-110`}
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
                            <span className="flex items-center gap-1.5 font-mono text-xs text-emerald-300">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              active
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="border-t border-white/5 bg-white/[0.01] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-semibold">
                      {project.title}
                    </p>
                    <p className="text-xs text-white/40">{project.tagline}</p>
                  </div>
                  <Link
                    href={`/case-studies#case-${project.id}`}
                    className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-medium shadow-lg shadow-purple-500/20 transition hover:shadow-xl hover:shadow-purple-500/40"
                  >
                    Read full case study →
                  </Link>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
