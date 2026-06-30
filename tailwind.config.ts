import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        surface: "#0a0a0a",
        elevated: "#111111",
        border: "rgba(255,255,255,0.08)",
        accent: {
          blue: "#3b82f6",
          electric: "#0ea5e9",
          purple: "#8b5cf6",
          violet: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui"],
        display: ["var(--font-cal)", "system-ui"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        "spotlight": "spotlight 2s ease .75s 1 forwards",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%,-62%) scale(.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(ellipse at center, rgba(59,130,246,.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
