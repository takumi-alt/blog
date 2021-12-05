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
            'regal-red': '#ff5722',
            'regal-blue': '#00adb5',
            'regal-black': '#303841',
            'regal-white': '#eeeeee',
          }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
