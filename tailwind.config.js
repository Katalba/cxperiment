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
        titulo: ['Poppins', 'sans-serif'],
        parrafo: ['Rubik', 'sans-serif']
      },
      colors: {
        verdeTurk: 'var(--verde-turk)',
        verdeMok: 'var(--verde-mok)',
        purpleBal: 'var(--purple-bal)',
        blackBl: 'var(--black-bl)',
        whiteWi: 'var(--white-wi)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.botonVerde': {
          backgroundColor: 'var(--verde-turk)',
          color: 'var(--white-wi)',
          border: '1px solid var(--verde-mok)',
          borderRadius: '40px',
          padding: '1rem 2.3rem',
          fontSize: '18px',
          '&:hover': {
            backgroundColor: 'var(--white-wi)',
            color: 'var(--verde-turk)'
          }
        },
        '.botonWhite': {
          backgroundColor: 'var(--white-wi)',
          color: 'var(--verde-turk)',
          border: '1px solid var(--verde-turk)',
          borderRadius: '40px',
          padding: '1rem 2.3rem',
          fontSize: '18px',
          '&:hover': {
            backgroundColor: 'var(--verde-turk)',
            color: 'var(--white-wi)',
            border: '1px solid var(--white-wi)'
          }
        }
      })
    })
  ]
}
