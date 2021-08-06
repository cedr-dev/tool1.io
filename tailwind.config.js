module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          darkest: '#040505',
          darker: '#0F1111',
          dark: '#0b1118',
          light: '#292f36',
        },
        primary: {
          DEFAULT: '#4ecdc4',
        },
        secondary: {
          DEFAULT: '#ff4365',
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
