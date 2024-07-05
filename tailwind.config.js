/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["./dist/*.{html,js}", "./src/*.{html,js}"],
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""),
  },
  theme: {
    extend: {},
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
