module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        'courier-prime': ['Courier Prime', 'sans-serif'],
        'courier-prime-bold': ['Courier Prime Bold', 'sans-serif'],
        'alfa-slab-one': ['Alfa Slab One', 'sans-serif'],
      },
      keyframes: {
        show: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'show-0': 'show 2.5s ease-in',
        'show-1': 'show 1.5s ease-in',
        'show-2': 'show 1s ease-in',
        'show-3': 'show 1.5s ease-in',
        'show-4': 'show 2.5s ease-in',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
