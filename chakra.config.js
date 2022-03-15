import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    FormControl: {
      baseStyle: { marginBottom: "1.25rem" },
    },
    Input: {
      baseStyle: {
        field: {
          paddingY: "1.5rem",
          outline: "none",
          color: "#1a202c",
          bg: "#edf2f7",
          border: "0 solid #e2e8f0",
          borderRadius: ".25rem",
          textShadow: "none",
        },
      },
    },
    // Select: {
    //   baseStyle: {
    //     field: { borderWidth: "1px", borderColor: "#000" },
    //   },
    // },
  },
});

export default theme;
