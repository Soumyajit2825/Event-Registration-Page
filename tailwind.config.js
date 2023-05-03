/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}

