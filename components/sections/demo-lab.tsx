"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Monitor, Smartphone, Code2 } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function DemoLab() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"desktop" | "mobile">("desktop");

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
          eyebrow="Product Demo Lab"
          title="A live showroom"
          description="Step inside the products. Explore the features and architecture behind each build."
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
                  <p className="text-sm font-medium">{p.title}</p>
                  <p className="mt-0.5 text-xs text-white/40">{p.tagline}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Viewport */}
          <div className="lg:col-span-9">
            <div className="glass overflow-hidden rounded-2xl">
              {/* Browser chrome */}
              <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
                  <div className="ml-4 rounded-md bg-black/40 px-3 py-1 font-mono text-xs text-white/50">
                    {projects[active].id}.harshit.dev
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setView("desktop")}
                    className={`rounded-md p-1.5 transition ${
                      view === "desktop" ? "bg-white/10" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <Monitor size={14} />
                  </button>
                  <button
                    onClick={() => setView("mobile")}
                    className={`rounded-md p-1.5 transition ${
                      view === "mobile" ? "bg-white/10" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <Smartphone size={14} />
                  </button>
                </div>
              </div>

              {/* Demo area */}
              <div className="relative flex min-h-[480px] items-center justify-center bg-gradient-to-br from-black via-elevated to-black p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${active}-${view}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`w-full ${view === "mobile" ? "max-w-[320px]" : "max-w-3xl"}`}
                  >
                    <div
                      className={`relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${projects[active].accent} p-1`}
                    >
                      <div className="rounded-lg bg-black/80 p-8 backdrop-blur">
                        <div className="mb-6 flex items-center justify-between">
                          <div>
                            <p className="text-xs text-white/40">{projects[active].tagline}</p>
                            <h4 className="mt-1 font-display text-2xl font-semibold">
                              {projects[active].title}
                            </h4>
                          </div>
                          <Play size={20} className="text-white/60" />
                        </div>

                        <div className="space-y-3">
                          {projects[active].features.slice(0, 3).map((f, i) => (
                            <motion.div
                              key={f}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i }}
                              className="flex items-center gap-3 rounded-lg bg-white/5 p-3 text-sm"
                            >
                              <div
                                className={`h-2 w-2 rounded-full bg-gradient-to-r ${projects[active].accent}`}
                              />
                              <span className="text-white/80">{f}</span>
                            </motion.div>
                          ))}
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                          {["Active", "Live", "Stable"].map((s) => (
                            <div key={s} className="rounded-lg bg-white/5 p-3 text-center">
                              <div className="font-display text-lg font-bold text-emerald-300">●</div>
                              <p className="mt-1 text-xs text-white/50">{s}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer bar */}
              <div className="border-t border-white/5 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Code2 size={14} />
                    <span className="font-mono">{projects[active].stack.join(" · ")}</span>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                    {projects[active].impact.split(".")[0]}
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