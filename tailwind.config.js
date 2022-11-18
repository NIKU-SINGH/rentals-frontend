// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'OpenSans': ['Open Sans'],
        'Poppins': ['Poppins']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide',require('@tailwindcss/forms'), require('@tailwindcss/typography'))
  ],
}