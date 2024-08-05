import type { Config } from "tailwindcss";
const theme = require('./app/theme.tsx')

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: theme.base,
        rainforest: theme.rainforest,
        candy: theme.candy,
      },
    },
  },
  plugins: [],
} satisfies Config;
