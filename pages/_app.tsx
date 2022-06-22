import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import CartProvider from "../components/CartContext";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/global.css";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
