"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { personal } from "@/lib/data";

export function Hero() {
  const [particles, setParticles] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 6 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }))
    );
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0 to-background" />

      {/* Spotlight */}
      <div
        className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,.6), rgba(59,130,246,.3) 40%, transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-blue-400"
          initial={{ x: p.x, y: p.y }}
          animate={{ y: [p.y, p.y - 100, p.y], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-white/70">Available for new projects</span>
          <span className="text-white/30">·</span>
          <Sparkles size={12} className="text-purple-400" />
          <span className="text-white/70">Software Engineer @ Capgemini</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 3.1 } },
          }}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {["I build", "scalable software", "that moves business."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                variants={{
                  hidden: { y: "110%" },
                  visible: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
                }}
                className={`block ${i === 1 ? "text-gradient" : ""}`}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-base text-white/60 sm:text-lg"
        >
          Product-focused Full Stack Engineer shipping high-performance software, automation systems, and modern
          digital products for startups, businesses, and enterprises.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9, duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="#projects"
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-4 text-sm font-medium transition hover:shadow-2xl hover:shadow-purple-500/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            href="#contact"
            className="glass glass-hover rounded-2xl px-7 py-4 text-sm font-medium"
          >
            Hire Me
          </Link>

          <Link
            href={personal.resumeUrl}
            className="group flex items-center gap-2 rounded-2xl px-5 py-4 text-sm text-white/70 transition hover:text-white"
          >
            <Download size={16} />
            Download Resume
          </Link>
        </motion.div>

        {/* Animated code snippet */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.2, duration: 0.9 }}
          className="mx-auto mt-20 max-w-2xl"
        >
          <div className="glass rounded-2xl p-1">
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/70" />
              <span className="ml-3 font-mono text-xs text-white/40">harshit.ts</span>
            </div>
            <pre className="overflow-x-auto rounded-xl bg-black/40 p-5 text-left font-mono text-xs leading-relaxed sm:text-sm">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">engineer</span> = {"{"}
                {"\n  "}name: <span className="text-emerald-300">'Harshit Sinha'</span>,
                {"\n  "}role: <span className="text-emerald-300">'Full Stack Engineer'</span>,
                {"\n  "}focus: [<span className="text-emerald-300">'product'</span>,{" "}
                <span className="text-emerald-300">'scale'</span>,{" "}
                <span className="text-emerald-300">'business'</span>],
                {"\n  "}status: <span className="text-emerald-300">'shipping'</span>
                {"\n}"};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/20 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}