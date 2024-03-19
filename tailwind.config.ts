import type { Config } from "tailwindcss";

const config = {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
      orange: {
        50: "#FFF8F2",
        100: "#FEE9E0",
        200: "#FED0C0",
        300: "#FDB79F",
        400: "#FD8F6E",
        500: "#FF7C4D",
        600: "#E66E45",
        700: "#B95438",
        800: "#8D3A2B",
        900: "#732E22",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;

export { config };
export default config;
