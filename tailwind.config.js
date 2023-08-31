/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 0 12px rgba(0, 0, 0, 0.09)',
    },
  },
  plugins: [],
}
}
