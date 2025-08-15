/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#131313",
      },
      fontFamily: {
        jetbrains: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
