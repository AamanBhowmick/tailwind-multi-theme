import type { Config } from "tailwindcss";

const multiThemePlugin = require("./app/multi-theme-plugin.ts");

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],

  // Using https://tailwindcss.com/docs/plugins#css-in-js-syntax


  // Step 9: Getting rid of theme here and move everything to plugins

  
  plugins: [multiThemePlugin],
} satisfies Config;
