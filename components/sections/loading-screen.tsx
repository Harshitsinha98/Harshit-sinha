"use client";
import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative h-20 w-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-blue-500/30 border-t-blue-500"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 font-display text-2xl font-bold"
          >
            HS
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-white/50"
          >
            Initializing experience
          </motion.p>
        </div>

        <div className="relative h-px w-64 overflow-hidden bg-white/10">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}