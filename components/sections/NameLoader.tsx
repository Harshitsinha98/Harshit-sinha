"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// Same family as the Y-O-U loader: blue -> pink -> teal
const GRADIENT =
  "linear-gradient(90deg, #4F6EF7 0%, #EC4899 50%, #2DD4BF 100%)";

interface NameLoaderProps {
  /** Text to reveal. Defaults to the brand name used elsewhere in the loading screen. */
  text?: string;
  /** Tailwind classes for font size / weight — merged onto both layers so they stay pixel-aligned. */
  className?: string;
  /** How long the "draw-in" reveal takes, in ms. */
  revealDurationMs?: number;
}

export function NameLoader({
  text = "HARSHIT SINHA",
  className = "font-display text-xl font-semibold tracking-[0.2em] sm:text-2xl",
  revealDurationMs = 1400,
}: NameLoaderProps) {
  const prefersReducedMotion = useReducedMotion();
  const revealSeconds = revealDurationMs / 1000;

  if (prefersReducedMotion) {
    // No motion: just show the final gradient text, no clip/shimmer/tip.
    return (
      <span
        className={className}
        style={{
          backgroundImage: GRADIENT,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {text}
      </span>
    );
  }

  return (
    <div className="relative inline-block">
      {/* Ghost layer: reserves layout size and shows a faint outline of the
          name before the "ink" reaches it, like an unwritten pencil guide. */}
      <span
        aria-hidden
        className={`${className} select-none text-transparent`}
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
      >
        {text}
      </span>

      {/* Gradient layer: revealed left-to-right via clip-path, then a slow
          infinite shimmer keeps it alive for the rest of the load. */}
      <motion.span
        aria-hidden={false}
        className={`${className} absolute inset-0`}
        style={{
          backgroundImage: GRADIENT,
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        initial={{ clipPath: "inset(0 100% 0 0)", backgroundPositionX: "0%" }}
        animate={{
          clipPath: "inset(0 0% 0 0)",
          backgroundPositionX: ["0%", "100%", "0%"],
        }}
        transition={{
          clipPath: { duration: revealSeconds, ease: EASE_OUT },
          backgroundPositionX: {
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            delay: revealSeconds,
          },
        }}
      >
        {text}
      </motion.span>

      {/* Drawing tip: a soft glowing bar that races across as the ink reveals,
          then fades out once the name is fully written. */}
      <motion.span
        className="pointer-events-none absolute top-0 h-full w-[3px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #4F6EF7, #EC4899 55%, #2DD4BF)",
          boxShadow: "0 0 14px 3px rgba(236,72,153,0.55)",
        }}
        initial={{ left: "0%", opacity: 1 }}
        animate={{ left: "100%", opacity: [1, 1, 0] }}
        transition={{
          left: { duration: revealSeconds, ease: EASE_OUT },
          opacity: { duration: revealSeconds, times: [0, 0.85, 1], ease: "linear" },
        }}
      />
    </div>
  );
}
