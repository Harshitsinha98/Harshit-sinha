"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GridBgProps {
  className?: string;
  fade?: boolean;
  glow?: boolean;
  variant?: "default" | "dots" | "small";
}

export const GridBg: React.FC<GridBgProps> = ({
  className,
  fade = true,
  glow = false,
  variant = "default",
}) => {
  const patterns = {
    default:
      "bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]",
    small:
      "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]",
    dots: "bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]",
  };

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10", patterns[variant], className)}
      aria-hidden="true"
    >
      {glow && (
        <div
          className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(139,92,246,.5), rgba(59,130,246,.25) 45%, transparent 70%)",
          }}
        />
      )}
      {fade && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030303_80%)]" />
      )}
    </div>
  );
};