/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#1FA45B",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        midnight: "#121063",
        metal: "#565584",
        silver: "#7E7E7E",
      },
      gridTemplateColumns: {
        // 24 column grid
        24: "repeat(24, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
      },
    },
  },
  plugins: [],
};
