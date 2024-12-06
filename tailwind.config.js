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
        'blue-chalk': '#E6EDF1',
        'ball-blue': '#00A8E8',
        'bluish-grey': '#7F8B8F',
        'green-vogue': '#003459',
      },
      lineHeight: {
        '110': '110%',
        '150': '150%',
      },
      fontSize: {
        'custom-4xl': '38px',
        'custom-6xl': '64px',
      },
      margin: {
        'custom-10': '42px',
      }
    },
  },
  plugins: [],
}
