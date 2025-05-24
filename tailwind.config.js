/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#080d41',
        'secondary' : '#2d88ff',
        'third' : '#f6f9fe'
        
      },
      fontFamily: {
        Aldrich: ['Aldrich', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
}

