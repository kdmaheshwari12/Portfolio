import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030712",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#6366F1",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#06B6D4",
          foreground: "#030712",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1F2937",
          foreground: "#9CA3AF",
        },
        card: {
          DEFAULT: "rgba(255,255,255,0.03)",
          foreground: "#FFFFFF",
        },
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand":
          "linear-gradient(135deg, #8B5CF6 0%, #6366F1 50%, #06B6D4 100%)",
        aurora:
          "linear-gradient(120deg, rgba(139,92,246,0.15), rgba(99,102,241,0.1), rgba(6,182,212,0.15))",
      },
      animation: {
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        aurora: "aurora 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        aurora: {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "33%": { transform: "rotate(120deg) scale(1.1)" },
          "66%": { transform: "rotate(240deg) scale(0.95)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.3)",
        "glow-accent": "0 0 40px rgba(6, 182, 212, 0.3)",
        "glow-lg": "0 0 80px rgba(99, 102, 241, 0.2)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.37)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
