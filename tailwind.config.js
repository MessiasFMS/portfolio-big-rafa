/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '280px',
        md: '768px',
        lg: '1024px',
        xl: '1440px'
      },
    },
  },
  plugins: [],
}

