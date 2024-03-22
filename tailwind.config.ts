import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./sanity/**/*.{ts,tsx}",
    "@/styles/**/*.{ts,tsx}",
  ],
  theme: {
    textColor: {
      primary: "#000000",
      secondary: "#313131",
      tertiary: "#828282",
      orange: "#FF7C4D",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      transparent: "transparent",
      current: "currentColor",
      primary: {
        50: "#FFF8F2",
        100: "#FFE9D9",
        200: "#FFDABF",
        300: "#FFBC8C",
        400: "#FF7F33",
        500: "#FF7C4D",
        600: "#D33C0D",
        700: "#8C2909",
        800: "#691F07",
        900: "#461505",
      },
      secondary: {
        50: "#F4F7F8",
        100: "#EAEFF2",
        200: "#C4D3DA",
        300: "#9EB7C3",
        400: "#537E97",
        500: "#08456B",
        600: "#073E61",
        700: "#052A41",
        800: "#041E30",
        900: "#03141F",
      },
      tertiary: {
        50: "#F7F7F7",
        100: "#EEEEEE",
        200: "#D4D4D4",
        300: "#BABABA",
        400: "#868686",
        500: "#515151",
        600: "#494949",
        700: "#313131",
        800: "#252525",
        900: "#191919",
      },
      gray: {
        50: "#F9FAFB",
        100: "#F0F0F0",
        200: "#DFE4EA",
        300: "#C4CCD4",
        400: "#93A1B1",
        500: "#657381",
        600: "#576574",
        700: "#364349",
        800: "#273238",
        900: "#182328",
      },
    },

    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        mono: ["var(--font-arimo)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

export default config;
