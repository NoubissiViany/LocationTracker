/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Example primary color
        secondary: '#ffed4a', // Example secondary color
      },
      spacing: {
        '72': '18rem', // Example custom spacing
      },
    },
  },
  plugins: [],
};
