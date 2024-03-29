/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bbaby: {
          dark: '#030303',
          brighter: '#1a1a1b',
          brightest: '#272729',
          orange: '#f54404',
          red: '#f54404',
          border: '#323334',
          text: '#d7dadc',
          text_darker: '#818384',
          hover: '#454546',
          blue: '#24A0ED',
        },
        reddit_dark: {
          DEFAULT: '#030303',
          brighter: '#1a1a1b',
          brightest: '#272729',
        },
        reddit_border: {
          DEFAULT: '#323334',
        },
        reddit_text: {
          DEFAULT: '#d7dadc',
          darker: '#818384',
        },
      },
    },
  },
  plugins: [],
}
