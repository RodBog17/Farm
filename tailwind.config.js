/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        '15': '1.2'
      },
      colors:{
        'turquiose': '#358f80',
        'button': '#248277'
      },
      width: {
        '100': '40rem',
      },
      fontFamily:{
        chivo: ["Chivo", "sans-serif"]
      },   
    },
  }
 
}