module.exports = {
  purge: {
    enabled: true,
    content: ['**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "very-dark-cyan": "hsl(179, 100%, 13%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "bright-orange": "hsl(31, 77%, 52%)",
        "very-light-grey": "hsl(0, 0%, 95%)",
        "transparent-white": "hsla(0, 0%, 100%, 0.75)",
      },
    },
    fontFamily: {
      "Lexend": ['Lexend Deca', "sans-serif"],
      "Big": ['Big Shoulders Display', "sans-serif"],
    },
    container: {
      center: true,
      padding: "9rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
