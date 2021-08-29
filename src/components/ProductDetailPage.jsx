import Page from "./Page";
import { useState } from "react";
import Product from "./Product";
import DetailsAbout from "./DetailsAbout";
import Gallery from "./Gallery";
import CategorySection from "./CategorySection";
import Recommendations from "./Recommendations";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

export default function ProductDetailPage({product, handleCart}) {

    // * Snackbar, shows "added to cart" message when button is clicked
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const openSnackbar = () => {
        setIsSnackbarOpen(true);
    };

    const closeSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setIsSnackbarOpen(false);
    };

    return (
        <Page>
            <Product
                name={product.name}
                description={product.description}
                src={product.image.mobile}
                index={2}
                details
                price={product.price}
                handleCart={handleCart}
                new={product.new}
                slug={product.slug}
                style={{ paddingTop: "5%" }}
                openSnackbar={openSnackbar}
            />
            <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={2200}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <MuiAlert onClose={closeSnackbar} severity="success">
                    {product.name} added to cart
                </MuiAlert>
            </Snackbar>
            <DetailsAbout
                features={product.features}
                includes={product.includes}
            />
            <Gallery
                first={product.gallery.first}
                second={product.gallery.second}
                third={product.gallery.third}
            />
            <Recommendations recommendations={product.others} />
            <CategorySection />
        </Page>
    );
}
