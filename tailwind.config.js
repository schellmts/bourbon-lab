/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['MarcellusSC'],
      },
      colors: {
        primary: '#231D22',
        primary_2: '#342C36',
        secondary: '#DDB967',
        third: '#D1603D'
      }
    },
  },
  plugins: [],
}