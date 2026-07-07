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
import { NameLoader } from "@/components/sections/NameLoader"; // adjust path to wherever you save NameLoader.tsx

const STATUS_MESSAGES = [
  "Initializing experience",
  "Loading assets",
  "Composing layout",
  "Almost ready",
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const EASE_IRIS = [0.76, 0, 0.24, 1] as const;

// How long each status line stays on screen before switching to the next one.
// Kept independent of LOADING_DURATION_MS so it doesn't race ahead on shorter loads.
// Bump this up/down to taste (e.g. 1500 for even slower).
const STATUS_INTERVAL_MS = 1100;

export default function Loading() {
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

  useEffect(() => {
    const id = setInterval(() => {
      setStatusIndex((i) => Math.min(i + 1, STATUS_MESSAGES.length - 1));
    }, STATUS_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ clipPath: "circle(150% at 50% 50%)" }}
      exit={{ clipPath: "circle(0% at 50% 50%)" }}
      transition={{ duration: 0.9, ease: EASE_IRIS }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-background"
    >
      {/* One soft ambient wash — no stacked textures */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(99,102,241,0.10), transparent 60%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          {/* The name itself is now the loading visual: gradient ink draws
              in left-to-right, then shimmers softly for the rest of the load. */}
          <NameLoader text="HARSHIT SINHA" />

          <div className="h-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={statusIndex}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/35"
              >
                {STATUS_MESSAGES[statusIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            Loading {display}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Also export as LoadingScreen for backward compat
export { Loading as LoadingScreen };