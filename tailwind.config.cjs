const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'selector',
  fontFamily: {
    sans: ['Fabrik', ...defaultTheme.fontFamily.sans],
    serif: ['Fundamental Brigade', ...defaultTheme.fontFamily.serif],
  },
  theme: {
    extend: {
      colors: {
        primary: '#dd8d0e',
        secondary: '#009599',
        tertiary: '#33006c',
      },
      width: {
        128: '32rem',
        160: '40rem',
      },
      height: {
        128: '32rem',
        160: '40rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
