const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'selector',
  fontFamily: {
    sans: ['Inter', ...defaultTheme.fontFamily.sans],
    serif: ['Newsreader', ...defaultTheme.fontFamily.serif]
},
  theme: {
    extend: {
      colors: {
        primary: '#dd8d0e',
        secondary: '#009599',
        tertiary: '#33006c',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
