"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* === Ambient Background Effects === */}

      {/* Primary radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />

      {/* Secondary purple glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.08),transparent_50%)]" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            left: `${15 + i * 13}%`,
            top: `${20 + (i % 4) * 18}%`,
            background:
              i % 2 === 0
                ? "rgba(59, 130, 246, 0.4)"
                : "rgba(139, 92, 246, 0.35)",
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (i % 2 === 0 ? 15 : -15), 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* === Main Content === */}
      <div className="relative flex flex-col items-center gap-10">
        {/* Logo Container */}
        <div className="relative h-24 w-24">
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-3 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(59,130,246,0.05), rgba(139,92,246,0.3), rgba(59,130,246,0.3))",
              filter: "blur(8px)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Spinning outer ring */}
          <motion.div
            className="absolute -inset-1 rounded-full border-2 border-transparent"
            style={{
              borderImage:
                "linear-gradient(135deg, rgba(59,130,246,0.6), transparent 40%, rgba(139,92,246,0.6)) 1",
              borderRadius: "9999px",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-full w-full rounded-full border-2 border-blue-500/20 border-t-blue-500/80 border-r-purple-500/60" />
          </motion.div>

          {/* Counter-rotating inner ring */}
          <motion.div
            className="absolute inset-1 rounded-full border-2 border-transparent border-t-purple-400/70 border-l-blue-400/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Logo circle with gradient */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
          >
            {/* Inner glow overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/5 to-white/10" />
            <span className="relative font-display text-2xl font-extrabold text-white drop-shadow-md">
              HS
            </span>
          </motion.div>

          {/* Pulse ring */}
          <motion.div
            className="absolute -inset-2 rounded-full border border-blue-500/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-4">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs font-medium uppercase tracking-[0.4em] text-white/50"
            >
              Initializing experience
            </motion.p>
          </div>

          {/* Animated dots row */}
          <div className="flex items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                className="block h-1 w-1 rounded-full"
                style={{
                  background:
                    i % 2 === 0
                      ? "rgb(59, 130, 246)"
                      : "rgb(139, 92, 246)",
                }}
                animate={{
                  opacity: [0.15, 1, 0.15],
                  scale: [0.8, 1.3, 0.8],
                }}
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

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="relative h-[2px] w-56 overflow-hidden rounded-full bg-white/[0.06]"
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-y-0 left-0 w-2/5 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(59,130,246,0.8), rgba(139,92,246,0.6), transparent)",
              boxShadow: "0 0 12px rgba(59,130,246,0.4)",
            }}
            animate={{ x: ["-120%", "350%"] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.3,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Also export as LoadingScreen for backward compat
export { Loading as LoadingScreen };
