import type { Config } from "tailwindcss";
const theme = require("./app/theme.tsx");

const plugin = require("tailwindcss/plugin");

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],

  // Using https://tailwindcss.com/docs/plugins#css-in-js-syntax
  
  theme: {
    extend: {
      colors: {
        base: theme.base,
        rainforest: theme.rainforest,
        candy: theme.candy,
        primary: {
          50:  'rgb(var(--primary-50) / <alpha-value>)',
          100: 'rgb(var(--primary-100) / <alpha-value>)',
          200: 'rgb(var(--primary-200) / <alpha-value>)',
          300: 'rgb(var(--primary-300) / <alpha-value>)',
          400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: 'rgb(var(--primary-500) / <alpha-value>)',
          600: 'rgb(var(--primary-600) / <alpha-value>)',
          700: 'rgb(var(--primary-700) / <alpha-value>)',
          800: 'rgb(var(--primary-800) / <alpha-value>)',
          900: 'rgb(var(--primary-900) / <alpha-value>)',
        }
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }: { addBase: any }) {
      addBase({
        ":root": {
          "--primary-50": "238 242 255",
          "--primary-100": "224 231 255",
          "--primary-200": "208 215 247",
          "--primary-300": "170 185 255",
          "--primary-400": "137 148 255",
          "--primary-500": "107 112 252",
          "--primary-600": "85 79 238",
          "--primary-700": "69 60 205",
          "--primary-800": "56 48 162",
          "--primary-900": "39 33 115",
        },
        "[data-theme='base']": {
          "--primary-50": "238 242 255",
          "--primary-100": "224 231 255",
          "--primary-200": "208 215 247",
          "--primary-300": "170 185 255",
          "--primary-400": "137 148 255",
          "--primary-500": "107 112 252",
          "--primary-600": "85 79 238",
          "--primary-700": "69 60 205",
          "--primary-800": "56 48 162",
          "--primary-900": "39 33 115",
        },
        "[data-theme='rainforest']": {
          "--primary-50": "236 253 244",
          "--primary-100": "201 242 222",
          "--primary-200": "157 233 198",
          "--primary-300": "86 208 160",
          "--primary-400": "0 179 128",
          "--primary-500": "0 146 104",
          "--primary-600": "0 121 85",
          "--primary-700": "0 99 68",
          "--primary-800": "0 80 56",
          "--primary-900": "0 52 34",
        },
        "[data-theme='candy']": {
          "--primary-50": "253 242 248",
          "--primary-100": "247 226 238",
          "--primary-200": "248 204 229",
          "--primary-300": "245 164 208",
          "--primary-400": "242 113 181",
          "--primary-500": "225 61 144",
          "--primary-600": "195 22 103",
          "--primary-700": "161 0 75",
          "--primary-800": "132 0 61",
          "--primary-900": "89 0 40",
        },
      });
    }),
  ],
} satisfies Config;
