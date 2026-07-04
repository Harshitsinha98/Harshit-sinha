"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { LOADING_DURATION_MS } from "@/lib/constants";

const STATUS_MESSAGES = [
  "Initializing experience",
  "Loading assets",
  "Composing layout",
  "Almost ready",
];

export default function Loading() {
  // Real progress driven counter, synced to the actual loading duration.
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    const controls = animate(count, 100, {
      duration: LOADING_DURATION_MS / 1000,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => {
      unsub();
      controls.stop();
    };
  }, [count, rounded]);

  // Cycle the status message across the loading window.
  useEffect(() => {
    const step = LOADING_DURATION_MS / STATUS_MESSAGES.length;
    const id = setInterval(() => {
      setStatusIndex((i) => Math.min(i + 1, STATUS_MESSAGES.length - 1));
    }, step);
    return () => clearInterval(id);
  }, []);

  // Progress bar width bound to the same counter.
  const barWidth = useTransform(count, (v) => `${v}%`);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(12px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* === Ambient Background Effects === */}

      {/* Animated grid backdrop */}
      <motion.div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 72%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "48px 48px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Drifting aurora blobs */}
      <motion.div
        className="absolute h-[45vw] w-[45vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.16), transparent 65%)",
          filter: "blur(40px)",
          top: "10%",
          left: "12%",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[40vw] w-[40vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.14), transparent 65%)",
          filter: "blur(48px)",
          bottom: "8%",
          right: "10%",
        }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${3 + (i % 3) * 2.5}px`,
            height: `${3 + (i % 3) * 2.5}px`,
            left: `${8 + i * 9}%`,
            top: `${15 + (i % 5) * 16}%`,
            background:
              i % 2 === 0
                ? "rgba(59, 130, 246, 0.45)"
                : "rgba(139, 92, 246, 0.4)",
            filter: "blur(0.5px)",
            boxShadow:
              i % 2 === 0
                ? "0 0 8px rgba(59,130,246,0.6)"
                : "0 0 8px rgba(139,92,246,0.5)",
          }}
          animate={{
            y: [0, -34, 0],
            x: [0, i % 2 === 0 ? 18 : -18, 0],
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.55))]" />

      {/* === Main Content === */}
      <div className="relative flex flex-col items-center gap-11">
        {/* Logo Container */}
        <div className="relative h-28 w-28">
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-4 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(139,92,246,0.35), rgba(59,130,246,0.05), rgba(139,92,246,0.35), rgba(59,130,246,0.35))",
              filter: "blur(10px)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting dots */}
          <motion.div
            className="absolute -inset-3"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
            <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(139,92,246,0.9)]" />
          </motion.div>

          {/* Progress ring (SVG, driven by counter) */}
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength={1}
              style={{
                pathLength: useTransform(count, (v) => v / 100),
                filter: "drop-shadow(0 0 4px rgba(59,130,246,0.7))",
              }}
            />
          </svg>

          {/* Counter-rotating inner accent ring */}
          <motion.div
            className="absolute inset-2 rounded-full border-2 border-transparent border-t-purple-400/60 border-l-blue-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Logo circle with gradient */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-[14px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg shadow-blue-500/30"
          >
            {/* Sheen sweep */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.25) 50%, transparent 70%)",
              }}
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.6,
              }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/5 to-white/10" />
            <span className="relative font-display text-2xl font-extrabold text-white drop-shadow-md">
              HS
            </span>
          </motion.div>

          {/* Pulse ring */}
          <motion.div
            className="absolute -inset-2 rounded-full border border-blue-500/30"
            animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-5">
          <div className="h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={statusIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs font-medium uppercase tracking-[0.4em] text-white/55"
              >
                {STATUS_MESSAGES[statusIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Animated dots row */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="block h-1 w-1 rounded-full"
                style={{
                  background:
                    i % 2 === 0 ? "rgb(59, 130, 246)" : "rgb(139, 92, 246)",
                }}
                animate={{ opacity: [0.15, 1, 0.15], scale: [0.8, 1.3, 0.8] }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress Bar + Percentage */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="flex w-64 flex-col items-center gap-3"
        >
          <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
            {/* Determinate fill tied to counter */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                width: barWidth,
                background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 0 12px rgba(59,130,246,0.5)",
              }}
            />
            {/* Shimmer sweep on top */}
            <motion.div
              className="absolute inset-y-0 left-0 w-1/3 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
              }}
              animate={{ x: ["-120%", "350%"] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 0.2,
              }}
            />
          </div>

          {/* Numeric percentage */}
          <div className="flex w-full items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            <span>Loading</span>
            <span className="tabular-nums text-white/70">
              {String(display).padStart(3, "0")}%
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Also export as LoadingScreen for backward compat
export { Loading as LoadingScreen };
