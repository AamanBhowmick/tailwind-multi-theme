import type { Config } from "tailwindcss";
import theme from "~/theme";

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
