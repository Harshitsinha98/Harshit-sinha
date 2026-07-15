"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Clock } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Products shipped, problems solved"
          description="Real-world products serving real users — live and in production. Every preview below is the actual site, running right now."
        />

        <div className="mt-20 space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-elevated to-surface p-5 transition-all hover:border-white/15 sm:p-8 md:p-10"
            >
              {/* Accent glow */}
              <div
                className={`absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-10 blur-3xl transition-opacity group-hover:opacity-25`}
              />

              <div className="relative grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="mb-3 flex items-center gap-3 font-mono text-xs text-white/40">
                    <span>
                      0{i + 1} / 0{projects.length}
                    </span>
                    {p.status === "live" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 text-emerald-300">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        </span>
                        LIVE
                      </span>
                    )}
                    {p.status === "in-progress" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-0.5 text-amber-300">
                        <Clock size={11} />
                        IN PROGRESS
                      </span>
                    )}
                    {p.status === "coming-soon" && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-0.5 text-amber-300">
                        <Clock size={11} />
                        COMING SOON
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{p.tagline}</p>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Problem</p>
                      <p className="mt-1 text-sm text-white/70">{p.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Solution</p>
                      <p className="mt-1 text-sm text-white/70">{p.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80">Impact</p>
                      <p className="mt-1 text-sm font-medium text-white/90">{p.impact}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-xs text-white/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-hover
                        className={`group/btn inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${p.accent} px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:brightness-110`}
                      >
                        Visit Live Site
                        <ExternalLink
                          size={14}
                          className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                        />
                      </a>
                    )}
                    <Link
                      href="#demo-lab"
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10"
                    >
                      Open in showroom
                      <ArrowUpRight
                        size={14}
                        className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </Link>
                    <Link
                      href={`/case-studies#case-${p.id}`}
                      className="group/btn inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
                    >
                      Case study
                      <ArrowUpRight
                        size={14}
                        className="transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                      />
                    </Link>
                  </div>
                </div>

                {/* Live preview thumbnail */}
                <div className="lg:col-span-5">
                  <LivePreview project={p} />

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {p.features.slice(0, 4).map((f) => (
                      <div
                        key={f}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-3 text-xs text-white/60"
                      >
                        ✦ {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LivePreview({ project: p }: { project: (typeof projects)[number] }) {
  const boxRef = useRef<HTMLAnchorElement>(null);
  // Measure the container so the 1280px desktop render always scales to fill it
  // exactly — on any screen width, phone included — instead of a fixed crop.
  const [frame, setFrame] = useState({ scale: 0.4, height: 900 });

  useEffect(() => {
    const el = boxRef.current;
    if (!el || !p.liveUrl) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      if (!w || !h) return;
      const scale = w / 1280;
      setFrame({ scale, height: h / scale });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [p.liveUrl]);

  if (!p.liveUrl) {
    // Coming soon — elegant placeholder consistent with live cards
    return (
      <div className="relative h-52 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black to-elevated sm:h-64 lg:h-48">
        <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20`} />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            <Clock size={12} /> Launching Soon
          </span>
          <p className="font-mono text-xs text-white/40">Q3 — beta preview coming</p>
        </div>
      </div>
    );
  }

  return (
    <a
      ref={boxRef}
      href={p.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-hover
      className="group/prev relative block h-52 overflow-hidden rounded-2xl border border-white/10 bg-black sm:h-64 lg:h-48"
    >
      {/* Live desktop render, scaled to fill the box on every screen size */}
      <div className="pointer-events-none absolute inset-0">
        <iframe
          src={p.liveUrl}
          title={`${p.title} live preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden
          className="absolute left-0 top-0 origin-top-left border-0"
          style={{ width: "1280px", height: `${frame.height}px`, transform: `scale(${frame.scale})` }}
        />
      </div>
      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition group-hover/prev:opacity-100">
        <span className="font-mono text-xs text-white/70">{p.displayUrl}</span>
        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
          Open <ExternalLink size={12} />
        </span>
      </div>
      {/* Persistent live badge */}
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-black/60 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> LIVE
      </span>
    </a>
  );
}
