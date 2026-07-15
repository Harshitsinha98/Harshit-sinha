"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const shouldReduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
          onClick={toTop}
          aria-label="Scroll back to top"
          className="group fixed bottom-6 right-6 z-[150] flex h-11 w-11 items-center justify-center rounded-full glass shadow-lg shadow-black/30 ring-1 ring-white/10 transition-colors hover:ring-purple-400/40 focus-visible:outline-none md:bottom-8 md:right-8"
        >
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <ArrowUp
            size={18}
            className="relative text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-white"
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
