"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.floor(v).toString());
  // Start at the real target value (not "0") so it's correct for anyone who
  // never gets the count-up JS — crawlers, screen readers, slow connections.
  // The animation below still runs for sighted users with JS enabled.
  const [val, setVal] = useState(String(value));

  useEffect(() => {
    if (inView) {
      // Animate up from 0 for the visual effect, landing back on `value`.
      count.set(0);
      const controls = animate(count, value, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);

  useEffect(() => display.on("change", setVal), [display]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}
