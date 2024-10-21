/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            opensans: ["Open Sans", "sans-serif"],
            nunito: ["Nunito", "sans-serif"],
            arima: ["Arima", "sans-serif"],
            inter: ["Inter", "sans-serif"],
            merriweather: ["Merriweather", "sans-serif"],
            robot: ["Roboto", "sans-serif"],
            nunitosans: ["Nunito Sans", "sans-serif"],
            worksans: ["Work Sans", "sans-serif"],
            oswald: ["Oswald", "sans-serif"],
            montserrat: ["Montserrat", "sans-serif"],
            poppins: ["Poppins", "sans-serif"],
            kiwimaru: ["Kiwi Maru", "sans-serif"],
            kadwa: ["Kadwa", "sans-serif"],
            raleway: ["Raleway", "sans-serif"],
            bitter: ["Bitter", "sans-serif"],
        },
        colors: {
            'custom': {
                'blue': {
                  100: '#70ACE0',
                  101: '#0074AF',
                  102: '#1C75BC',
                  103: '#0094A1',
                },
                'red': {
                    100: '#F53636',
                },
                'yellow': {
                  100: '#B08700',
                  101: '#FEC300',
                  102: '#6D5204',
                  103: '#A57F00',
                },
                'green': {
                  100: '#1F3C1E',
                },
                'black': {
                  100: '#1E1E1F',
                  101: '#333',
                 
                },
                'orange': {
                  100: '',
                },
                'gray': {
                  100: '#B8B8BF',
                  101: '#0D0D0DB2',
                  102: '#323232',
                  103: '#B3B3B3',
                },
                'white': {
                  100: '#CCC',
                },
                'brown': {
                  100: '#474747',
                },
            }
        }
    },
    },
    plugins: [],
  }
  
  