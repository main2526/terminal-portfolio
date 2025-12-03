/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        andromedablack: "#0a0a0a",
        andromedaforeground: "#ededed",
        andromedabackground: "#171717",
        andromedagreen: "#3fffa8",
        andromedacyan: "#00eaff",
        andromedared: "#ff3f3f",
        andromedayellow: "#ffe347",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
};
