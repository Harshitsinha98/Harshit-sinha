"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { LOADING_DURATION_S } from "@/lib/constants";

// "Home" + the rest of navLinks, in one list, so active-state logic and
// the mobile stagger animation only have to be written once.
const allLinks = [{ href: "/", label: "Home" }, ...navLinks];

export function Navbar() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <motion.header
      initial={{ y: shouldReduceMotion ? 0 : -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: LOADING_DURATION_S,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2 sm:py-3" : "py-4 sm:py-5"
      )}
    >
      {/* Dimmed backdrop behind the mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "relative flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 sm:py-3",
            scrolled
              ? "glass shadow-lg shadow-black/20 ring-1 ring-white/10"
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className="group flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70"
          >
            <div className="relative h-8 w-8 shrink-0">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 opacity-80 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md" />
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { rotate: -6, scale: 1.06 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
                className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 font-display text-sm font-bold"
              >
                HS
              </motion.div>
            </div>
            <span className="hidden font-display text-sm font-medium tracking-tight sm:block">
              Harshit Sinha
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 md:flex lg:gap-1">
            {allLinks.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={l.href === "/" ? handleHomeClick : undefined}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 lg:px-4",
                    active ? "text-white" : "text-white/70 hover:text-white"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-lg bg-white/10"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Hire me */}
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            className="hidden md:block"
          >
            <Link
              href="/contact"
              className="block rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-medium shadow-md shadow-purple-500/20 transition-shadow hover:shadow-lg hover:shadow-purple-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Scroll progress, flush with the pill's bottom edge */}
          <motion.div
            style={{ scaleX: scrollProgress }}
            className="absolute inset-x-5 -bottom-px h-[2px] origin-left rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-70"
          />
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative mt-2 origin-top rounded-2xl p-3 shadow-2xl shadow-black/40 md:hidden"
            >
              {allLinks.map((l, i) => {
                const active = isActive(l.href);
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.05 + i * 0.05,
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={l.href === "/" ? handleHomeClick : () => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3 text-white/80 transition-colors hover:bg-white/5 hover:text-white",
                        active && "bg-white/10 text-white"
                      )}
                    >
                      {l.label}
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : 0.05 + allLinks.length * 0.05,
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 text-center font-medium shadow-md shadow-purple-500/20"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}