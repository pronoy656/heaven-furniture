import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#163A2B",
          light: "#24503E",
          deep: "#0F281E",
          soft: "#EAF2ED",
          border: "#D2E6DA",
        },
        cream: {
          DEFAULT: "#FAF9F5",
          light: "#FFFFFF",
          muted: "#F3EFE8",
          dark: "#E8E4DC",
        },
        amber: {
          gold: "#E5A83B",
          soft: "#FDF5E6",
        },
        charcoal: {
          DEFAULT: "#111815",
          light: "#1F312E",
          deep: "#0E1615",
        },
        ivory: {
          DEFAULT: "#F6F1E7",
          dim: "#EAE2D2",
        },
        brass: {
          DEFAULT: "#B08D57",
          light: "#D4B483",
          dim: "#8A6E42",
        },
      },
      fontFamily: {
        display: ["var(--font-body)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) forwards",
        marquee: "marquee 32s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
