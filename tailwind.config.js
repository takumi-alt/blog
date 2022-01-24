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
        zIndex: {
            '-10': '-10',
            '-20': '-20',
        },
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
            'regal-red': '#f45d48',
            'regal-pink': '#ffdccc',
            'regal-yellow': '#eecc66',
            'regal-blue': '#44cccc',
            'regal-green': '#078080',
            'regal-black': '#303841',
            'regal-gray': '#aaaaaa',
            'regal-white': '#fffffe',
            'regal-beige': '#f8f5f2',
            'rgba': 'rgba(255, 255, 255, 0.7)',
            'light-purple': 'rgba(190, 100, 240, 0.9)',
        },
        lineHeight: {
            'extra-loose': '2.5',
            '12': '3rem',
          },
        height: {
            sm: '0.15rem',
        },
        width: {
            '1/9':'9.1111111%',
        },
        spacing: {
            ssm: '0.125rem',
            sm: '0.15rem',
            sml: '0.875rem',
            md: '1.275rem',
            '11': '2.85rem',
            '14': '3.6rem',
            '18': '4.8rem',
            '34': '8.4rem',
            '45': '11.2rem',
            '52': '13rem',
            '58': '15.74rem',
            '72': '18rem',
            '84': '21rem',
            '92': '22rem',
            '94': '23rem',
            '96': '24rem',
            '110': '30rem',
        },
        transitonDelay: {
            '56.25': '56.25ms',
            '2000': '2000ms',
            '3000': '3000ms',
            '4000': '4000ms',
        },
        animation: {
            'rotate1': 'rotate 5s linear infinite',
            'rotate2': 'rotate 7s linear infinite',
            'rotate3': 'rotate 9s linear infinite',
            'rotate2': 'rotate 11s linear infinite',
            'rotate4': 'rotate 15s linear infinite',
            'rotate5': 'rotate 18s linear infinite',
            'rotate6': 'rotate 22s linear infinite',
            'rotate7': 'rotate 25s linear infinite',
            'rotate8': 'rotate 27s linear infinite',
            'round1': 'round_animate1 7s linear infinite',
            'round2': 'round_animate2 10s linear infinite',
            'round3': 'round_animate3 6s linear infinite',
            'border_go_l': 'border_anim_go_l 460ms linear forwards',
            'border_back_l': 'border_anim_back_l 400ms linear forwards',
            'border_go_s': 'border_anim_go_s 460ms linear forwards',
            'border_back_s': 'border_anim_back_s 440ms linear forwards'
        },
        keyframes: {
            rotate: {
                '0%': {transform: 'translateY(0) rotate(0deg)', opacity: '0.7'},
                '100%': {transform: 'translateY(-2500px) rotate(720deg)', opacity: '0.3'}
            },
            round_animate1: {
                '0%': {borderRadius: '60% 40% 46% 54%/48% 66% 34% 52%'},
                '40%': {borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% '},
                '75%': {borderRadius: '72% 28% 29% 71% / 37% 41% 59% 63% '},
                '100%': {borderRadius: '60% 40% 46% 54%/48% 66% 34% 52%'},
            },
            round_animate2: {
                '0%': {borderRadius: '73% 27% 48% 52% / 41% 73% 27% 59%'},
                '40%': {borderRadius: '52% 48% 38% 62% / 54% 46% 54% 46%'},
                '75%': {borderRadius: '63% 37% 53% 47% / 77% 37% 63% 23%'},
                '100%': {borderRadius: '73% 27% 48% 52% / 41% 73% 27% 59%'},
            },
            round_animate3: {
                '0%': {borderRadius: '63% 37% 70% 30% / 38% 54% 46% 62%'},
                '40%': {borderRadius: '48% 52% 24% 76% / 57% 30% 70% 43%'},
                '75%': {borderRadius: '37% 63% 29% 71% / 73% 53% 47% 27%'},
                '100%': {borderRadius: '63% 37% 70% 30% / 38% 54% 46% 62%'},
            },
            border_anim_go_l: {
                '0%': {width: '0rem'},
                '100%': {width: '10rem'}
            },
            border_anim_back_l: {
                '0%': {width: '10rem'},
                '100%': {width: '0rem'}
            },
            border_anim_go_s: {
                '0%': {width: '0rem'},
                '100%': {width: '4.5rem'}
            },
            border_anim_back_s: {
                '0%': {width: '4.5rem'},
                '100%': {width: '0rem'}
            },
        },
        
    },
    borderRadius: {
        'part1': '50% 50% 50% 70%/50% 50% 70% 60%',
        'part2': '80% 30% 50% 50%/50%',
        'part3': '40% 40% 50% 40%/30% 50% 50% 50%',
        'part4': '57% 43% 72% 28%/28% 10% 90% 72%',
        'part5': '57% 43% 93% 7%/48% 83% 17% 52%',
        'part6': '18% 82% 64% 36%/49% 62% 38% 51%',
        'fish': '100px 0px 0px 100px/30px 0px 0px 30px',
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
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '2xlr': '0 25px 50px -12px rgba(181, 23, 10, 0.25)',
        '2xlrr': '0px 0px 70px rgba(181, 23, 10, 0.25)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        right: '16px 16px 0px -12px rgba(0, 0, 0, 0.6)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        red: '15px 15px 0px 0 rgba(255, 96, 94)',
        red2: '8px 6px 0px 0 rgba(247, 119, 111)',
        purple: '16px 16px 0px 0px rgba(175, 25, 235)',
        purple2: '4px 4px 0px 0px rgba(110, 0, 225)',
        red: '4px 4px 0px 0px rgba(181, 23, 10)',
        green3: '4px 4px 0px 0px rgba(5, 93, 67)',
        purple3: '4px 4px 0px 0px rgba(150, 0, 255), 8px 8px 0px 0px rgba(150, 0, 255, 0.8), 12px 12px 0px 0px rgba(150, 0, 255, 0.6), 16px 16px 0px 0px rgba(150, 0, 255, 0.4)',
        green2: '4px 4px 0px 0px rgba(150, 0, 255), 8px 8px 0px 0px rgba(90, 195, 120), 12px 12px 0px 0px rgba(150, 0, 255), 16px 16px 0px 0px rgba(90, 195, 120)',
        red_green: '12px 12px 0px 0px rgba(244, 93, 72)',
        green: '8px 6px 0px 0px rgba(120, 225, 155)',
        zero: '0px 0px 0px 0px',
    }
  },
  variants: {
      translate: ['responsive', 'hover', 'group-hover', 'focus'],
      transform: ['responsive', 'hover', 'group-hover', 'focus'],
      transitionDelay: ['responsive', 'hover', 'focus'],
      margin: ['responsive', 'hover', 'focus'],
      padding: ['responsive', 'hover', 'focus'],
      borderWidth: ['responsive', 'hover', 'focus'],
      outline: ['responsive', 'hover', 'focus'],
      position: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    plugin(function({ addBase, config }) {
        addBase({
          'h1': { fontSize: config('theme.fontSize.xl') },
          'h2': { fontSize: config('theme.fontSize.xl') },
          'h3': { fontSize: config('theme.fontSize.lg') },
        })
      })
  ],
}

