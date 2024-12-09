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
        'light-sky-blue': '#E5F3F8',
        'deep-ocean': '#003459',
        'link-white':'#EAF9FF',
      },
      lineHeight: {
        'custom-ssm': '35px',
        'custom-sm': '52px',
        'custom-lg': '110%',
        'custom-xl': '150%',
      },
      fontSize: {
        'custom-sm': '32px',
        'custom-lg': '48px',
        'custom-4xl': '38px',
        'custom-6xl': '64px',
      },
    },
  },
  plugins: [],
}
