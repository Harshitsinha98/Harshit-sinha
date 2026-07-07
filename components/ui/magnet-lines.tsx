"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";

interface MagnetLinesProps {
  rows?: number;
  columns?: number;
  containerSize?: number;
  lineLength?: number;
  lineWidth?: number;
  className?: string;
}

interface MagnetLineProps {
  cx: number;
  cy: number;
  targetX: MotionValue<number>;
  targetY: MotionValue<number>;
  length: number;
  width: number;
}

// A single needle that rotates in place to keep pointing at (targetX, targetY).
function MagnetLine({ cx, cy, targetX, targetY, length, width }: MagnetLineProps) {
  const rotate = useTransform([targetX, targetY], (latest: number[]) => {
    const [tx, ty] = latest;
    return (Math.atan2(ty - cy, tx - cx) * 180) / Math.PI + 90;
  });

  return (
    <motion.span
      className="absolute rounded-full"
      style={{
        left: "50%",
        top: "50%",
        x: cx - width / 2,
        y: cy - length / 2,
        width,
        height: length,
        background: "linear-gradient(180deg, #60a5fa, #a78bfa)",
        boxShadow: "0 0 6px rgba(99,102,241,0.55)",
        rotate,
        transformOrigin: "50% 50%",
      }}
    />
  );
}

// Grid of needles that swivel toward a moving target — the real pointer when
// hovered, otherwise an auto-orbiting point so the effect stays alive on its own.
export function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = 220,
  lineLength = 12,
  lineWidth = 2.5,
  className = "",
}: MagnetLinesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const hovering = useRef(false);
  const elapsed = useRef(0);

  useAnimationFrame((_, delta) => {
    if (hovering.current) return;
    elapsed.current += delta / 1000;
    const radius = containerSize * 0.3;
    targetX.set(Math.cos(elapsed.current * 0.9) * radius);
    targetY.set(Math.sin(elapsed.current * 1.3) * radius * 0.7);
  });

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    hovering.current = true;
    targetX.set(e.clientX - rect.left - rect.width / 2);
    targetY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handlePointerLeave() {
    hovering.current = false;
  }

  const lines = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      const cx = (c + 0.5) * (containerSize / columns) - containerSize / 2;
      const cy = (r + 0.5) * (containerSize / rows) - containerSize / 2;
      lines.push({ cx, cy, key: `${r}-${c}` });
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative ${className}`}
      style={{ width: containerSize, height: containerSize }}
    >
      {lines.map(({ cx, cy, key }) => (
        <MagnetLine
          key={key}
          cx={cx}
          cy={cy}
          targetX={targetX}
          targetY={targetY}
          length={lineLength}
          width={lineWidth}
        />
      ))}
    </div>
  );
}
