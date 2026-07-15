"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useTransform, animate } from "framer-motion";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.floor(v).toString());
  const [val, setVal] = useState("0");

  useEffect(() => {
    if (inView) {
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
