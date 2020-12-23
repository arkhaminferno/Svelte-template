module.exports = {
  purge: ["./src/**/*.svelte", "./src/**/*.css", "./public/*.html"],
  theme: {
    extend: {},
    colors: {
      primary900: "#793510",
      primary800: "#92400e",
      primary700: "#b5530a",
      $primary600: "#d87706",
      primary500: "#f08c00",
      primary400: "#fcc419",
      primary100: "#fff9db",
      gray800: "#1a1d20",
      gray700: "#212529",
      gray600: "#868e96",
      gray500: "#ced4da",
      gray400: "#dee2e6",
      gray300: "#e9ecef",
      gray200: "#f1f3f5",
      gray100: "#f8f9fa",
      red700: "#c92a2a",
      red500: "#f03e3e",
      red300: "#ffe3e3",
      red100: "#fff5f5",
      green700: "#064d3b",
      green600: "#37b24d",
      green500: "#099268",
      green300: "#34d399",
      green100: "#ebfbee",
      indigo100: "#edf2ff",
      indigo900: "#364fc7",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [],
};
