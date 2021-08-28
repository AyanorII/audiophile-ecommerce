// * Dependencies
import { useEffect, useState, createContext } from "react";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { Modal } from "@material-ui/core";
import {Dialog} from "@material-ui/core"

// * Components
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./UI/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductDetailPage from "./components/ProductDetailPage.jsx";
import ModalBody from "./UI/ModalBody.jsx";
import Checkout from "./pages/Checkout.jsx";

// * Data
import data from "./data.json";

// * Style
import GlobalStyle from "./components/GlobalStyle.jsx";

// ******************************************************** */

const theme = createTheme({
    palette: {
        primary: { main: "#D87D4A", light: "#FBAF85" },
        secondary: { main: "#000000", light: "#F1F1F1" },
    },
});

export const ProductContext = createContext();

function App() {
    // * Initialize AOS (Animate On Scroll) library
    useEffect(() => {
        Aos.init({ duration: 1300, once: true });
    }, []);

    // * Sets displayed product when click in "See Product"
    const [productDetail, setProductDetail] = useState(data[0]);
    const handleProduct = (item) => {
        const filteredItem = data.filter(
            (dataProduct) => dataProduct.slug === item
        );
        setProductDetail(filteredItem[0]);
    };

    // * Cart functions --------------------------------------
    const [cart, setCart] = useState([]);
    console.log(cart)
    const updateCart = (product, operation, quantity = 1) => {
        // * Checks if product is in cart
        const target = cart.find((x) => x.product === product);

        const add = { ...target, quantity: target.quantity + quantity };
        const sub = { ...target, quantity: target.quantity - quantity };
        const getOperation = () => (operation === "sub" ? sub : add);

        // * Updates the cart. If the quantity is 1 and the operation is 'sub', remove from cart
        setCart(
            cart
                .map((x) => {
                    return x.product === product ? getOperation() : x;
                })
                .filter((x) => x.quantity > 0)
        );
    };

    const handleCart = (product, quantity, price, src) => {
        const target = cart.find((x) => x.product === product);

        if (target) {
            updateCart(product, "add", quantity);
        } else {
            setCart([
                ...cart,
                {
                    product: product,
                    quantity: quantity,
                    price: price,
                    img: src,
                },
            ]);
        }
    };

    const subQuantity = (product) => {
        updateCart(product, "sub");
    };

    const addQuantity = (product) => {
        updateCart(product, "add");
    };

    const clearCart = () => setCart([]);
    // * -------------------------------------------------

    // * Sums the price of all product in cart
    const totalPrice =
        cart.length === 0
            ? 0
            : parseInt(
                  cart.reduce(
                      (accum, current) =>
                          accum + current.price * current.quantity,
                      0
                  )
              );

    // * Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <SCThemeProvider theme={theme}>
                    <div className="App">
                        <GlobalStyle />
                        <ScrollToTop />
                        <Navbar
                            openModal={openModal}
                            numberOfItems={cart.length}
                        />
                        <Dialog
                            open={isModalOpen}
                            onClose={closeModal}
                            disableScrollLock
                        >
                            <ModalBody
                                cart={cart}
                                numberOfItems={cart.length}
                                totalPrice={totalPrice}
                                subQuantity={subQuantity}
                                addQuantity={addQuantity}
                                clearCart={clearCart}
                                closeModal={closeModal}
                            />
                        </Dialog>
                        <ProductContext.Provider
                            value={[productDetail, handleProduct, handleCart]}
                        >
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Redirect from="/home" to="/" />
                                <Route
                                    path="/headphones"
                                    component={Headphones}
                                />
                                <Route path="/speakers" component={Speakers} />
                                <Route
                                    path="/earphones"
                                    component={Earphones}
                                />
                                <Route
                                    path="/checkout"
                                    render={() => (
                                        <Checkout
                                            cart={cart}
                                            totalPrice={totalPrice}
                                            setCart={setCart}
                                        />
                                    )}
                                />
                                <Route
                                    path="/:slug"
                                    component={ProductDetailPage}
                                />
                            </Switch>
                        </ProductContext.Provider>
                        <Footer />
                    </div>
                </SCThemeProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;