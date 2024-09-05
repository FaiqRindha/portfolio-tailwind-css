/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'primary': '#ECDFCC',
        'secondary': '#697565',
        'dark': '#1E201E',
        'green': '#9CA986',
        'darkgreen': '#1E201E',
        'textpanjang': '#64748b',
        'client': '#3C3D37',
        'footer': '#1E201E'
      },
      screens: {
        '2xl': '1320px',
      }
    },
    plugins: [],
  }
}

