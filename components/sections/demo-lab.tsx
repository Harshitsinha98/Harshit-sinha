"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Code2, ExternalLink, Clock, RotateCw } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function DemoLab() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [loading, setLoading] = useState(true);
  const [reloadKey, setReloadKey] = useState(0);

  const current = projects[active];

  // Show the loading shimmer whenever we switch project, viewport, or reload.
  useEffect(() => {
    if (current.liveUrl) setLoading(true);
  }, [active, view, reloadKey, current.liveUrl]);

  return (
    <section id="demo-lab" className="relative overflow-hidden py-32">
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[150px]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(139,92,246,.5), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Live Showroom"
          title="Step inside the products"
          description="These aren't mockups — each panel below is the real, production site running live. Switch projects, toggle desktop or mobile, and click straight through."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Project switcher */}
          <div className="lg:col-span-3">
            <div className="space-y-2">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  data-hover
                  className={`group relative w-full overflow-hidden rounded-xl p-4 text-left transition ${
                    active === i ? "bg-white/[0.08]" : "hover:bg-white/[0.04]"
                  }`}
                >
                  {active === i && (
                    <motion.div
                      layoutId="active-demo"
                      className="absolute inset-y-0 left-0 w-1 rounded-r bg-gradient-to-b from-blue-400 to-purple-500"
                    />
                  )}
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium">{p.title}</p>
                    {p.liveUrl ? (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    ) : (
                      <Clock size={12} className="shrink-0 text-amber-300/70" />
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-white/40">{p.tagline}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Viewport */}
          <div className="lg:col-span-9">
            <div className="glass overflow-hidden rounded-2xl">
              {/* Browser chrome */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 px-3 py-3 sm:px-4">
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <div className="hidden h-3 w-3 shrink-0 rounded-full bg-red-500/70 sm:block" />
                  <div className="hidden h-3 w-3 shrink-0 rounded-full bg-yellow-500/70 sm:block" />
                  <div className="hidden h-3 w-3 shrink-0 rounded-full bg-emerald-500/70 sm:block" />
                  <div className="flex min-w-0 items-center gap-2 rounded-md bg-black/40 px-3 py-1 font-mono text-xs text-white/50 sm:ml-2">
                    <span className="shrink-0 text-emerald-400/70">🔒</span>
                    <span className="truncate">{current.displayUrl}</span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  {current.liveUrl && (
                    <button
                      onClick={() => setReloadKey((k) => k + 1)}
                      title="Reload preview"
                      className="hidden rounded-md p-1.5 text-white/40 transition hover:text-white sm:block"
                    >
                      <RotateCw size={14} />
                    </button>
                  )}
                  <button
                    onClick={() => setView("desktop")}
                    title="Desktop view"
                    className={`rounded-md p-1.5 transition ${
                      view === "desktop" ? "bg-white/10" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <Monitor size={14} />
                  </button>
                  <button
                    onClick={() => setView("mobile")}
                    title="Mobile view"
                    className={`rounded-md p-1.5 transition ${
                      view === "mobile" ? "bg-white/10" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <Smartphone size={14} />
                  </button>
                  {current.liveUrl && (
                    <a
                      href={current.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open full site in new tab"
                      className="ml-1 inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium transition hover:bg-white/20"
                    >
                      Open <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>

              {/* Live demo area */}
              <div className="relative flex min-h-[520px] items-center justify-center bg-gradient-to-br from-black via-elevated to-black p-3 sm:p-4 md:p-6">
                {current.liveUrl ? (
                  <div
                    className={`relative mx-auto w-full transition-all duration-500 ${
                      view === "mobile" ? "max-w-[390px]" : "max-w-full"
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl shadow-black/50 ${
                        view === "mobile" ? "h-[640px]" : "h-[520px]"
                      }`}
                    >
                      {/* Loading shimmer */}
                      {loading && (
                        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-black/80">
                          <div
                            className={`h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-transparent bg-gradient-to-r ${current.accent} bg-clip-border`}
                            style={{ borderTopColor: "transparent" }}
                          />
                          <p className="font-mono text-xs text-white/40">Loading {current.displayUrl}…</p>
                        </div>
                      )}
                      <iframe
                        key={`${current.id}-${view}-${reloadKey}`}
                        src={current.liveUrl}
                        title={`${current.title} — live`}
                        loading="lazy"
                        onLoad={() => setLoading(false)}
                        className="h-full w-full border-0 bg-white"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <p className="mt-3 text-center font-mono text-[11px] text-white/30">
                      Interactive live preview · click and scroll inside the frame
                    </p>
                  </div>
                ) : (
                  /* Coming-soon placeholder */
                  <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 py-16 text-center">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${current.accent} opacity-90`}
                    >
                      <Clock size={26} className="text-white" />
                    </div>
                    <h4 className="font-display text-2xl font-semibold">{current.title}</h4>
                    <p className="text-sm text-white/50">{current.solution}</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300">
                      Launching Soon · Beta planned Q3
                    </span>
                  </div>
                )}
              </div>

              {/* Footer bar */}
              <div className="border-t border-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Code2 size={14} />
                    <span className="font-mono">{current.stack.join(" · ")}</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {current.impact.split(".")[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
