import "../styles/global.css";
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
