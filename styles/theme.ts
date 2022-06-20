import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif",
    h1: {
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    h2: {
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    h3: {
      textTransform: "uppercase",
      fontWeight: "bold"
    },
    h4: {
      textTransform: "uppercase",
      fontWeight: "bold"
    }
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
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: "0",
          fontWeight: 600,
          fontSize: "0.8125rem",
          padding: "0.75rem 2rem",
          letterSpacing: "1px",
          "&:hover": {
            backgroundColor: "#fbaf85",
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
