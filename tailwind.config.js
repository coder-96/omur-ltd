/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    // screens: {
    //   sm: {'min': '50px', 'max': '350'},
    //   md: {'min': '350px', 'max': '800px'},
    //   lg: '800px',
    //   xl: '1280px',
    // },

    extend: {

      colors: {
        'c1': '#252A34',
        'c2': '#EAEAEA',
        'c3': '#FF2E63',
        'c4': '#08D9D6',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      backgroundImage: {
        'hero-pattern': "url('/src/images/bg-first-section4.jpg')",
      }

    },
  },
  plugins: [],
}
