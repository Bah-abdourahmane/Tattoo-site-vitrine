/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Oswald',
      secondary: 'Raleway',
      tertiary: 'Rozha One',
    },
    container: {
      padding: {
        DEFAULT: '20px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
    extend: {
      colors: {
        dark: '#111111',
        grey: {
          DEFAULT: '#555555',
        },
      },
      backgroundImage: {
        hero: "url('/src/assets/hero/bg.jpg')",
        about: "url('/src/assets/about/image.png')",
        interview: "url('/src/assets/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/src/assets/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
