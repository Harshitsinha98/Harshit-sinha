"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Eye, EyeOff, LogOut, Star, Linkedin, RefreshCw } from "lucide-react";
import type { StoredTestimonial } from "@/lib/testimonial-types";

export default function AdminTestimonialsPage() {
  const router = useRouter();
  const [items, setItems] = useState<StoredTestimonial[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setError(null);
    const res = await fetch("/api/admin/testimonials", { cache: "no-store" });
    if (res.status === 401) {
      router.replace("/admin/login");
      return;
    }
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || "Failed to load testimonials.");
      return;
    }
    setItems(data.testimonials);
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  const remove = async (id: string) => {
    if (!confirm("Delete this testimonial permanently?")) return;
    setBusyId(id);
    try {
      const res = await fetch(`/api/admin/testimonials?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setItems((prev) => prev?.filter((t) => t.id !== id) ?? prev);
      } else {
        const data = await res.json();
        alert(data.error || "Could not delete.");
      }
    } finally {
      setBusyId(null);
    }
  };

  const toggleVisibility = async (t: StoredTestimonial) => {
    const nextStatus = t.status === "approved" ? "hidden" : "approved";
    setBusyId(t.id);
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: t.id, status: nextStatus }),
      });
      if (res.ok) {
        setItems((prev) =>
          prev?.map((item) => (item.id === t.id ? { ...item, status: nextStatus } : item)) ?? prev
        );
      } else {
        const data = await res.json();
        alert(data.error || "Could not update.");
      }
    } finally {
      setBusyId(null);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  return (
    <div className="relative min-h-screen px-6 py-16">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-4xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold">Testimonials</h1>
            <p className="mt-1 text-sm text-white/50">
              New submissions publish automatically. Hide or delete anything
              fake, spammy, or that you'd rather not show.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={load}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <RefreshCw size={14} />
              Refresh
            </button>
            <button
              onClick={logout}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 transition hover:border-white/20 hover:text-white"
            >
              <LogOut size={14} />
              Log out
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-300">
            {error}
          </div>
        )}

        {items === null && !error ? (
          <p className="mt-10 text-sm text-white/40">Loading...</p>
        ) : items && items.length === 0 ? (
          <p className="mt-10 text-sm text-white/40">No testimonials yet.</p>
        ) : (
          <div className="mt-8 space-y-4">
            <AnimatePresence>
              {items?.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0 }}
                  className={`rounded-2xl border p-6 ${
                    t.status === "hidden"
                      ? "border-white/[0.06] bg-white/[0.01] opacity-60"
                      : "border-white/[0.08] bg-white/[0.02]"
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{t.name}</p>
                        {t.linkedinUrl && (
                          <a
                            href={t.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white"
                          >
                            <Linkedin size={13} />
                          </a>
                        )}
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide ${
                            t.status === "approved"
                              ? "bg-emerald-500/15 text-emerald-300"
                              : "bg-white/10 text-white/50"
                          }`}
                        >
                          {t.status === "approved" ? "Live on site" : "Hidden"}
                        </span>
                      </div>
                      <p className="text-xs text-white/50">
                        {t.role} · {t.company}
                      </p>
                      <div className="mt-1 flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < t.rating ? "fill-purple-400 text-purple-400" : "text-white/15"}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleVisibility(t)}
                        disabled={busyId === t.id}
                        title={t.status === "approved" ? "Hide from site" : "Publish to site"}
                        className="rounded-lg border border-white/10 p-2 text-white/60 transition hover:border-white/20 hover:text-white disabled:opacity-40"
                      >
                        {t.status === "approved" ? <EyeOff size={14} /> : <Eye size={14} />}
                      </button>
                      <button
                        onClick={() => remove(t.id)}
                        disabled={busyId === t.id}
                        title="Delete permanently"
                        className="rounded-lg border border-red-500/20 p-2 text-red-400 transition hover:border-red-500/40 hover:bg-red-500/10 disabled:opacity-40"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-[11px] text-white/30">
                    Submitted {new Date(t.createdAt).toLocaleString()}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
