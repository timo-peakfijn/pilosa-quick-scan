import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f3f8ed",
          100: "#e3f0d7",
          200: "#c9e3b3",
          300: "#a7d086",
          400: "#88bc5f",
          500: "#69a042",
          600: "#507f31",
          700: "#3e6229",
          800: "#354f25",
          900: "#2f4423",
          950: "#16240f",
        },
      },
    },
  },
  plugins: [
      require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
};
export default config;