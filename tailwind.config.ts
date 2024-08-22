import type { Config } from "tailwindcss";

const multiThemePlugin = require("./app/multi-theme-plugin.ts");
const themes = require("./app/theme.json");

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],

  // Using https://tailwindcss.com/docs/plugins#css-in-js-syntax


  // Step 9: Getting rid of theme here and move everything to plugins

  
  plugins: [multiThemePlugin({
    colorThemes: themes,
  })],
} satisfies Config;
