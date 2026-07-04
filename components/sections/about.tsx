"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Building2, Sparkles, Code2, Rocket, Zap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight";

const facets = [
  {
    id: "engineer",
    label: "The Engineer",
    icon: Code2,
    accent: "from-blue-400 to-cyan-400",
    glow: "rgba(59,130,246,0.18)",
    text: "I started out keeping enterprise infrastructure alive — 150+ distributed nodes, a 99.9% uptime target, root-cause analysis at 2am. That's where I learned systems thinking: clean architecture, typed contracts, and code that survives contact with production.",
  },
  {
    id: "builder",
    label: "The Builder",
    icon: Rocket,
    accent: "from-purple-400 to-pink-400",
    glow: "rgba(168,85,247,0.18)",
    text: "I ship products end-to-end — discovery, design, build, deploy, iterate. Lead platforms, workforce tools, temple sites, tax consultancies. Different domains, same obsession: real people depending on it every single day, not a demo that gathers dust.",
  },
  {
    id: "automator",
    label: "The Automator",
    icon: Zap,
    accent: "from-amber-400 to-orange-400",
    glow: "rgba(251,146,60,0.18)",
    text: "If it can be automated, it will be. Python, RPA, n8n, PowerShell, and AI integrations that cut manual hours at enterprise scale and surface the KPI trends that actually move decisions.",
  },
];

const factList = [
  { icon: MapPin, label: "Based in India", sub: "Remote-first, global clients" },
  { icon: Building2, label: "Capgemini by day", sub: "Building products by night" },
  { icon: Sparkles, label: "Outcomes over output", sub: "Every decision tied to a metric" },
];

export function About() {
  const [active, setActive] = useState(0);
  const facet = facets[active];

  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="About" title="I don't just build software." />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-6 max-w-3xl text-center font-display text-3xl font-light tracking-tight text-white/80 md:text-4xl"
        >
          I build <span className="text-gradient font-medium">business assets</span> — systems that
          generate revenue, save hours, and scale with growth.
        </motion.p>

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {/* Interactive facet switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            {/* Segmented toggle */}
            <div className="inline-flex flex-wrap gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-1.5">
              {facets.map((f, i) => {
                const Icon = f.icon;
                return (
                  <button
                    key={f.id}
                    onClick={() => setActive(i)}
                    data-hover
                    className={`relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                      active === i ? "text-white" : "text-white/45 hover:text-white/70"
                    }`}
                  >
                    {active === i && (
                      <motion.div
                        layoutId="facet-pill"
                        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${f.accent} opacity-20`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <Icon size={15} className="relative z-10" />
                    <span className="relative z-10">{f.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Animated facet body */}
            <div className="relative mt-6 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={facet.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${facet.accent} text-black/80 shadow-lg`}
                  >
                    <facet.icon size={20} />
                  </div>
                  <p className="text-[15px] leading-relaxed text-white/70">{facet.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="mt-2 flex gap-1.5">
              {facets.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActive(i)}
                  aria-label={f.label}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-6 bg-white/70" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* At-a-glance facts with cursor-follow spotlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-3 md:col-span-2"
          >
            {factList.map((f) => {
              const Icon = f.icon;
              return (
                <SpotlightCard
                  key={f.label}
                  spotlightColor={facet.glow}
                  className="flex items-center gap-4 p-4 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/90">{f.label}</p>
                    <p className="text-xs text-white/50">{f.sub}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
