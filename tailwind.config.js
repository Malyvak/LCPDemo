/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'false',
  content: [
    './index.html',
    './public/**/*.html',
    './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        prompt: ['Prompt','sans-serif']
      },
    },
  },
  plugins: [],
}

