import type { Config } from "tailwindcss";

const neutral = {
  50: "#F8F9FA",
  100: "#F1F3F5",
  200: "#E9ECEF",
  300: "#DEE2E6",
  400: "#CED4DA",
  500: "#ADB5BD",
  600: "#868E96",
  700: "#495057",
  800: "#343A40",
  900: "#212529",
} as const;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4F72",
          dark: "#154060",
          light: "#2E6B9A",
        },
        secondary: {
          DEFAULT: "#F39C12",
          dark: "#E67E00",
          light: "#F5B942",
        },
        accent: {
          DEFAULT: "#27AE60",
          dark: "#1E8449",
          light: "#2ECC71",
        },
        neutral,
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-cta": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.92" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "pulse-cta": "pulse-cta 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

export default config;
