const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            'regal-red': '#ee6644',
            'regal-pink': '#ffdccc',
            'regal-yellow': '#eecc66',
            'regal-blue': '#44cccc',
            'regal-green': '#008844',
            'regal-black': '#303841',
            'regal-gray': '#aaaaaa',
            'regal-white': '#eeeeee',
        },
        lineHeight: {
            'extra-loose': '2.5',
            '12': '3rem',
          },
        width: {
            '1/9':'9.1111111%',
        },
        spacing: {
            '52': '13rem',
            '72': '18rem',
            '84': '21rem',
            '92': '22rem',
            '94': '23rem',
            '96': '24rem',
            '110': '30rem',
        },
        
    },
    scale: {
        '60': '.6',
        '65': '.65',
    },
    boxShadow: {
        nomal: '15px 15px 0px 0 rgba(120, 118, 123, 0.5)',
        red: '15px 15px 0px 0 rgba(255, 96, 94)',
        green: '15px 15px 0px 0 rgba(110, 190, 70, 0.5)',
        purple: '15px 15px 0px 0px rgba(140, 20, 250, 0.7)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, config }) {
        addBase({
          'h1': { fontSize: config('theme.fontSize.xl') },
          'h2': { fontSize: config('theme.fontSize.xl') },
          'h3': { fontSize: config('theme.fontSize.lg') },
        })
      })
  ],
}
