module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: '#040505',
          darker: '#0F1111',
          dark: '#181a1b',
          light: '#181a1b',
        },
        primary: {
          dark: '#449f3e',
          DEFAULT: '#4eb847',
          light: '#66c160',
        },
        secondary: {
          DEFAULT: '#eb1c24',
        },
      },
      fontFamily: {
        'sans': ['Oswald', 'Arial', 'sans-serif'],
        'body': ['Roboto'],
      },
      height: {
        half: "65vh"
      },
      width: {
        half: "50vw"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
