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
        },
      },
      fontFamily: {
        display: ["Oswald", "Arial Narrow", "sans-serif"],
        body: ["Source Sans 3", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
