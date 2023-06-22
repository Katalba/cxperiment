import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        tituloClient: ['Newake', 'sans-serif'],
        // titulo: ['Poppins', 'sans-serif'],
        // titulo: ['DM Sans', 'sans-serif'],
        // parrafo: ['Rubik', 'sans-serif']
        titulo: ['Montserrat', 'sans-serif'],
        parrafo: ['Montserrat', 'sans-serif']
      },
      colors: {
        verdeTurk: 'var(--verde-turk)',
        verdeMok: 'var(--verde-mok)',
        verdeMok2: 'var(--verde-mok2)',
        purpleBal: 'var(--purple-bal)',
        blackBl: 'var(--black-bl)',
        whiteWi: 'var(--white-wi)',
        textPurple: 'var(--text-purple)',
        bgForm: 'var(--bg-form)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.botonVerde': {
          backgroundColor: 'var(--verde-turk)',
          color: 'var(--white-wi)',
          border: '2px solid var(--verde-mok)',
          borderRadius: '40px',
          '&:hover': {
            backgroundColor: 'var(--white-wi)',
            color: 'var(--verde-turk)',
            border: '2px solid var(--verde-turk)'
          }
        },
        '.botonWhite': {
          backgroundColor: 'var(--white-wi)',
          color: 'var(--verde-turk)',
          border: '2px solid var(--verde-turk)',
          borderRadius: '40px',
          '&:hover': {
            backgroundColor: 'var(--verde-turk)',
            color: 'var(--white-wi)',
            border: '2px solid var(--white-wi)'
          }
        }
      })
    })
  ]
}
