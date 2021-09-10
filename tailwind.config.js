module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        neutratext: "'Neutra Text', sans-serif",
        neutratexttf: "'Neutra Text TF', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
