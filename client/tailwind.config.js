/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vastra-blue': '#004aad', // Royal/Peacock Blue
        'vastra-gold': '#d4af37', // Gold
        'vastra-pink': '#c2185b', // Deep Pink
        'vastra-teal': '#008080', // Teal/Saree Green
        'vastra-bg': '#fdfbf7',   // Off-white/Cream background
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
