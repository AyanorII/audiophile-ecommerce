import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
  palette: {
    primary: {
      main: "#D87D4A",
      light: "#fbaf85",
      dark: "#b35f2f",
    },
    gray: {
      main: "#F1F1F1",
      light: "#fafafa",
      dark: "#101010",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "0",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
