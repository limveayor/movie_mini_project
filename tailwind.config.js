/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#79624E', 
        },
        Tint:{
          50:'#d11d04',
        }
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

