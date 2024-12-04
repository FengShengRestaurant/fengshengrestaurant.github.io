/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1F2937',
        orange: '#E49E29',
        'bright-yellow': '#FDCB58',
        cream: '#F6D7A7' ,
        brown: '#6B3A19'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@fortawesome/fontawesome-free'),
  ],
}

