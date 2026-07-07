"use client";

// Adapted from the Uiverse "spin" loader by SelfMadeSystem — recolored to
// the site's blue/purple brand gradient with a matching glow.
export function SpinLoader({ size = 88 }: { size?: number }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 128 128" width={size} height={size} className="spin-svg">
        <defs>
          <linearGradient id="spinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
        <circle
          className="spin"
          cx="64"
          cy="64"
          r="57.3"
          fill="none"
          stroke="url(#spinGradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <style jsx>{`
        .spin-svg {
          overflow: visible;
          filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.5));
        }
        .spin {
          transform-origin: center;
          animation:
            spinDashArray 2s ease-in-out infinite,
            spin 8s ease-in-out infinite,
            dashOffset 2s linear infinite;
        }
        @keyframes spinDashArray {
          0% {
            stroke-dasharray: 270 90;
          }
          50% {
            stroke-dasharray: 0 360;
          }
          100% {
            stroke-dasharray: 270 90;
          }
        }
        @keyframes dashOffset {
          0% {
            stroke-dashoffset: 365;
          }
          100% {
            stroke-dashoffset: 5;
          }
        }
        @keyframes spin {
          0% {
            rotate: 0deg;
          }
          12.5%,
          25% {
            rotate: 270deg;
          }
          37.5%,
          50% {
            rotate: 540deg;
          }
          62.5%,
          75% {
            rotate: 810deg;
          }
          87.5%,
          100% {
            rotate: 1080deg;
          }
        }
      `}</style>
    </div>
  );
}
