"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,.5), transparent 70%)",
        }}
      />

      <div className="relative text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-display text-[10rem] font-bold leading-none text-gradient"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 font-display text-2xl font-medium"
        >
          This page is still in the pipeline.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-white/50"
        >
          Let's get you back to something real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center gap-3"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-medium transition hover:shadow-2xl hover:shadow-purple-500/40"
          >
            <Home size={16} />
            Home
          </Link>
          <Link
            href="/projects"
            className="glass glass-hover inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium"
          >
            <ArrowLeft size={16} />
            View Projects
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
