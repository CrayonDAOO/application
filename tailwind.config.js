/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: { 
    },
    variants: {
      extend: { 
      },
    },
    colors: {
      'black': '#0D0D0D',
      'dark-gray': '#0F120F',
      'gray': '#1C211D',
      'light-gray': '#ACACAC',
      'white': '#FFFFFF',
      'green': '#80FF00',
      'teal': '#009D93',
      'red': '#F01919',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}