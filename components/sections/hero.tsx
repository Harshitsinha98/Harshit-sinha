"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download, Sparkles } from "lucide-react";
import { personal } from "@/lib/data";

/* ------------------------------------------------------------------ */
/*  Typewriter hook — cycles through an array of strings              */
/* ------------------------------------------------------------------ */
function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseMs = 2000) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIdx((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */
export function Hero() {
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; rise: number; duration: number }[]
  >([]);
  const [mounted, setMounted] = useState(false);

  // Cursor-reactive spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const spotY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  // Typewriter for rotating roles
  const typedRole = useTypewriter(
    ["Full Stack Engineer", "Product Builder", "System Architect", "Problem Solver"],
    70,
    40,
    2200
  );

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: 1 + Math.random() * 3,
        rise: 60 + Math.random() * 80,
        duration: 4 + Math.random() * 4,
      }))
    );
  }, []);

  // Stagger base delays (after loading screen)
  const D = 3.0;

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      {/* ====== Background Layers ====== */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/0 to-background" />

      {/* Slow-drifting aurora orbs for depth */}
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] animate-float rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,.7), transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-[460px] w-[460px] animate-glow-pulse rounded-full opacity-[0.18] blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,.7), transparent 70%)",
          animationDelay: "1.5s",
        }}
      />

      {/* Primary spotlight — static */}
      <div
        className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,.55), rgba(59,130,246,.25) 45%, transparent 70%)",
        }}
      />

      {/* Secondary cursor-reactive glow */}
      {mounted && (
        <motion.div
          className="pointer-events-none absolute h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
          style={{
            x: spotX,
            y: spotY,
            translateX: "-50%",
            translateY: "-50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,.6), rgba(139,92,246,.3) 50%, transparent 70%)",
          }}
        />
      )}

      {/* Floating particles — more, varied sizes */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: i % 2 === 0 ? "rgba(59,130,246,0.6)" : "rgba(139,92,246,0.5)",
            filter: p.size > 2 ? "blur(0.5px)" : "none",
          }}
          initial={{ x: p.x, y: p.y, opacity: 0 }}
          animate={{
            y: [p.y, p.y - p.rise, p.y],
            x: [p.x, p.x + (i % 2 === 0 ? 20 : -20), p.x],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ====== Main Content ====== */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          {/* ====== Left Column — Text ====== */}
          <div className="text-center lg:text-left">
            {/* Badge — availability */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: D, duration: 0.7 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-xs backdrop-blur-2xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-white/70">Available for new projects</span>
              <span className="text-white/20">·</span>
              <Sparkles size={12} className="text-purple-400" />
              <span className="text-white/70">Software Engineer @ Capgemini</span>
            </motion.div>

            {/* ====== Headline ====== */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.13, delayChildren: D + 0.1 } },
              }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl lg:text-[4.75rem]"
            >
              {["I craft", "scalable software", "that drives growth."].map((line, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    variants={{
                      hidden: { y: "120%", opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                      },
                    }}
                    className={`block ${i === 1 ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent" : ""}`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* ====== Typewriter Role ====== */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: D + 0.6, duration: 0.6 }}
              className="mt-5 flex items-center justify-center gap-2 lg:justify-start"
            >
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-white/20" />
              <p className="font-mono text-sm text-white/50">
                {typedRole}
                <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-blue-400 align-middle" />
              </p>
            </motion.div>

            {/* ====== Subtitle ====== */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: D + 0.7, duration: 0.7 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg lg:mx-0"
            >
              Product-focused engineer shipping high-performance software, automation
              systems, and modern digital products for startups and enterprises.
            </motion.p>

            {/* ====== CTAs ====== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: D + 0.9, duration: 0.7 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
            >
              {/* Primary CTA */}
              <Link
                href="/projects"
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-semibold backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-white/20 hover:bg-white/[0.08] active:scale-[0.98]"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              {/* Tertiary CTA */}
              <Link
                href={personal.resumeUrl}
                className="group flex items-center gap-2 rounded-2xl px-5 py-4 text-sm text-white/60 transition-all duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                Resume
              </Link>
            </motion.div>
          </div>

          {/* ====== Right Column — Photo ====== */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: D + 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
          >
            {/* Ambient glow behind photo */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-transparent blur-2xl" />

            {/* Gradient border frame */}
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-white/5 p-[1.5px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-background">
                <Image
                  src="/images/harshit-hero.jpg"
                  alt="Harshit Sinha — Full Stack Engineer"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 420px"
                  className="object-cover"
                  style={{ objectPosition: "50% 12%" }}
                />
                {/* Bottom fade so it blends into the page */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: D + 1.3, duration: 0.6 }}
              className="glass absolute -bottom-6 -left-6 hidden rounded-2xl px-5 py-4 backdrop-blur-2xl sm:block"
            >
              <p className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-2xl font-bold text-transparent">
                5+
              </p>
              <p className="mt-0.5 text-xs text-white/50">Products Shipped</p>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: D + 1.5, duration: 0.6 }}
              className="glass absolute -right-4 -top-4 hidden items-center gap-2 rounded-2xl px-4 py-3 backdrop-blur-2xl sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs text-white/70">3+ Years Building</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ====== Code Snippet — enhanced ====== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-2xl"
        >
          <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-1 backdrop-blur-xl transition-colors hover:border-white/10">
            {/* Glow on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Title bar */}
            <div className="relative flex items-center gap-2 px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/70 transition-colors hover:bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70 transition-colors hover:bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/70 transition-colors hover:bg-emerald-500" />
              </div>
              <span className="ml-3 font-mono text-[11px] text-white/30">harshit.config.ts</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[10px] text-emerald-400/60">live</span>
              </div>
            </div>

            {/* Code body */}
            <pre className="relative overflow-x-auto rounded-xl bg-black/50 p-6 text-left font-mono text-xs leading-relaxed sm:text-sm">
              <code>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-300">engineer</span>{" "}
                <span className="text-white/40">=</span> {"{"}
                {"\n  "}
                <span className="text-white/40">name</span>
                <span className="text-white/30">:</span>{" "}
                <span className="text-emerald-300">&apos;Harshit Sinha&apos;</span>
                <span className="text-white/30">,</span>
                {"\n  "}
                <span className="text-white/40">role</span>
                <span className="text-white/30">:</span>{" "}
                <span className="text-emerald-300">&apos;Full Stack Engineer&apos;</span>
                <span className="text-white/30">,</span>
                {"\n  "}
                <span className="text-white/40">stack</span>
                <span className="text-white/30">:</span> [
                <span className="text-amber-300">&apos;Next.js&apos;</span>
                <span className="text-white/30">,</span>{" "}
                <span className="text-amber-300">&apos;React&apos;</span>
                <span className="text-white/30">,</span>{" "}
                <span className="text-amber-300">&apos;Node&apos;</span>
                <span className="text-white/30">,</span>{" "}
                <span className="text-amber-300">&apos;TS&apos;</span>]
                <span className="text-white/30">,</span>
                {"\n  "}
                <span className="text-white/40">focus</span>
                <span className="text-white/30">:</span> [
                <span className="text-sky-300">&apos;product&apos;</span>
                <span className="text-white/30">,</span>{" "}
                <span className="text-sky-300">&apos;scale&apos;</span>
                <span className="text-white/30">,</span>{" "}
                <span className="text-sky-300">&apos;business&apos;</span>]
                <span className="text-white/30">,</span>
                {"\n  "}
                <span className="text-white/40">status</span>
                <span className="text-white/30">:</span>{" "}
                <span className="text-emerald-300">&apos;shipping&apos;</span>{" "}
                <span className="text-white/20">{"// always"}</span>
                {"\n}"}
                <span className="text-white/30">;</span>
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      {/* ====== Scroll Indicator ====== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/15 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1 rounded-full bg-white/50"
          />
        </div>
      </motion.div>
    </section>
  );
}