const { addDynamicIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xla: "1366px",
        lga: "1152px",
        mda: "960px",
        mdb: "720px",
        sma: "540px",
      },
    },
  },
  plugins: [
    /** Iconify plugin */
    addDynamicIconSelectors(),
  ],
};
