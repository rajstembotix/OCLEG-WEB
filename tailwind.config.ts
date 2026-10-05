import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E",
          dark: "#1B1B1B",
          muted: "#5C5C5C",
          line: "#E6E6E6",
          soft: "#F7F5F4",
          steel: "#2A2E33",
        },
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Source Sans 3", "Arial", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s ease-out both",
        "fade-in": "fade-in 1s ease-out both",
        "ken-burns": "ken-burns 12s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
