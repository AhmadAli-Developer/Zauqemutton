import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        "card-hover": "rgb(var(--card-hover) / <alpha-value>)",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C547",
          dark: "#B8962E",
          muted: "rgba(212, 175, 55, 0.15)",
        },
        warm: {
          white: "rgb(var(--text-primary) / <alpha-value>)",
          gray: "rgb(var(--text-secondary) / <alpha-value>)",
          dark: "rgb(var(--text-muted) / <alpha-value>)",
        },
        border: "rgb(var(--border) / <alpha-value>)",
        "border-gold": "rgba(212, 175, 55, 0.3)",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        urdu: ["Noto Nastaliq Urdu", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E8C547 50%, #D4AF37 100%)",
        "dark-gradient": "linear-gradient(180deg, #0F0F0F 0%, #1A1A1A 100%)",
        "card-gradient": "linear-gradient(145deg, #1A1A1A 0%, #151515 100%)",
        "hero-overlay": "linear-gradient(180deg, rgba(15,15,15,0.3) 0%, rgba(15,15,15,0.95) 100%)",
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(212, 175, 55, 0.15)",
        "gold-md": "0 4px 20px rgba(212, 175, 55, 0.2)",
        "gold-lg": "0 8px 40px rgba(212, 175, 55, 0.25)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.5s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(212, 175, 55, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
