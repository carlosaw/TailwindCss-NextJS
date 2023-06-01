/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'vermelho': '#FF0000',
        'vermelhoescuro': '#990000'
      }
    },
  },
  plugins: [],
}
