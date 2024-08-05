import type { Config } from "tailwindcss";
const theme = require("./app/theme.tsx");

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],

  // Using https://tailwindcss.com/docs/plugins#css-in-js-syntax

  // theme: {
  //   extend: {
  //     colors: {
  //       base: theme.base,
  //       rainforest: theme.rainforest,
  //       candy: theme.candy,
  //       primary: {
  //         50:  'rgb(var(--primary-50) / <alpha-value>)',
  //         100: 'rgb(var(--primary-100) / <alpha-value>)',
  //         200: 'rgb(var(--primary-200) / <alpha-value>)',
  //         300: 'rgb(var(--primary-300) / <alpha-value>)',
  //         400: 'rgb(var(--primary-400) / <alpha-value>)',
  //         500: 'rgb(var(--primary-500) / <alpha-value>)',
  //         600: 'rgb(var(--primary-600) / <alpha-value>)',
  //         700: 'rgb(var(--primary-700) / <alpha-value>)',
  //         800: 'rgb(var(--primary-800) / <alpha-value>)',
  //         900: 'rgb(var(--primary-900) / <alpha-value>)',
  //       }
  //     },
  //   },
  // },
  plugins: [],
} satisfies Config;
