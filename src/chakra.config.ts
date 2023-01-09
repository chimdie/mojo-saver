import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "'Lexend', sans-serif"
  },
  colors: {
    red: { 300: "#F43249" },
    purple: {
      10: "#F0EBF8",
      20: "#E1D8F1",
      30: "#D1C4E9",
      40: "#C2B0E2",
      50: "#B39DDB",
      60: "#A489D4",
      70: "#9575CD",
      80: "#8561C5",
      90: "#764EBE",
      100: "#673AB7"
    }
  },
  components: {}
});

export default theme;
