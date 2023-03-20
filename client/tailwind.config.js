/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          100: '#121212',
          200: '#111111',
        },
        steel: "#1F1F1F",
        silver: '#B9C3C5',
        mustard: '#E8C47F',
        lime: '#9DC474',
        aqua: '#54C2CC',
        salmon: '#EB7765',
      }
    },
  },
  plugins: [],
}