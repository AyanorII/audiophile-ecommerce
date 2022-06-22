import "../styles/global.css";
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
