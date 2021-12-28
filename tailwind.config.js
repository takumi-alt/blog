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
        transitionDuration: {
            '200': '200ms',
            '400': '400ms',
            '600': '600ms',
            '800': '800ms',
            '1200': '1200ms',
            '1400': '1400ms',
            '1600': '1600ms',
        },
        colors: {
            'regal-red': '#ee6644',
            'regal-pink': '#ffdccc',
            'regal-yellow': '#eecc66',
            'regal-blue': '#44cccc',
            'regal-green': '#008844',
            'regal-black': '#303841',
            'regal-gray': '#aaaaaa',
            'regal-white': '#eeeeee',
            'rgba': 'rgba(255, 255, 255, 0.7)'
        },
        lineHeight: {
            'extra-loose': '2.5',
            '12': '3rem',
          },
        width: {
            '1/9':'9.1111111%',
        },
        spacing: {
            '18': '4.8rem',
            '45': '11.2rem',
            '52': '13rem',
            '72': '18rem',
            '84': '21rem',
            '92': '22rem',
            '94': '23rem',
            '96': '24rem',
            '110': '30rem',
        },
        
    },
    borderRadius: {
        'part1': '50% 50% 50% 70%/50% 50% 70% 60%',
        'part2': '80% 30% 50% 50%/50%',
        'part3': '40% 40% 50% 40%/30% 50% 50% 50%',
        'sm': '0.125rem',
        default: '0.25rem',
        default: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
    },
    scale: {
        '60': '.6',
        '65': '.65',
    },
    boxShadow: {
        nomal: '15px 15px 0px 0 rgba(120, 118, 123, 0.5)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        red: '15px 15px 0px 0 rgba(255, 96, 94)',
        green: '15px 15px 0px 0 rgba(110, 190, 70, 0.5)',
        purple: '16px 16px 0px 0px rgba(175, 25, 235)',
        purple2: '4px 4px 0px 0px rgba(110, 0, 225)',
        purple3: '4px 4px 0px 0px rgba(150, 0, 255), 8px 8px 0px 0px rgba(150, 0, 255, 0.8), 12px 12px 0px 0px rgba(150, 0, 255, 0.6), 16px 16px 0px 0px rgba(150, 0, 255, 0.4)',
        green2: '4px 4px 0px 0px rgba(150, 0, 255), 8px 8px 0px 0px rgba(90, 195, 120), 12px 12px 0px 0px rgba(150, 0, 255), 16px 16px 0px 0px rgba(90, 195, 120)',
        green: '8px 6px 0px 0px rgba(120, 225, 155)',
        zero: '0px 0px 0px 0px',
    }
  },
  variants: {
      translate: ['hover', 'group-hover', 'focus'],
      transform: ['hover', 'group-hover', 'focus'],
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
