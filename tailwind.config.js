/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1280px",
          '2xl': "1440px",
        }
      },
      colors: {
        'icy-blue': '#E6EDF1',
        'sky-blue': '#00A8E8',
        'cool-gray': '#7F8B8F',
        'oxford-blue': '#003459',
      },
      lineHeight: {
        '110': '110%',
        '150': '150%',
      },
      fontSize: {
        'custom-lg': '38px',
        'custom-xl': '64px',
      },
      margin: {
        'custom-10': '42px',
      }
    },
  },
  plugins: [],
}
