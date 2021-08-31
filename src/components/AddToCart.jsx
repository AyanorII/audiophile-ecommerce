import React, { useState } from "react";
import styled from "styled-components";
import LinkButton from "../UI/LinkButton";
import QuantityButton from "./QuantityButton";


const Container = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1fr;
    column-gap: 1rem;
    row-gap: 2rem;
    justify-self: start;
    margin-bottom: 2rem;
`;

const Price = styled.span`
    font-size: 1.125rem;
    line-height: 1.5625rem;
    letter-spacing: 1.3px;
    font-weight: 700;
    grid-column: 1 / 2;
`;

export default function AddToCart(props) {
    const [quantity, setQuantity] = useState(1);

    const addQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const subQuantity = () => {
        setQuantity((prev) => (prev === 1 ? 1 : prev - 1));
    };

    // * Add a ',' if price have more than 3 digits
    let formattedPrice = props.price.toString();
    if (formattedPrice.length > 3) {
        formattedPrice = formattedPrice[0] + "," + formattedPrice.slice(1);
    }


    const handleCart = () => {
        props.handleCart(props.product, quantity, props.price, props.src);
        props.openSnackbar();
    };

    return (
        <Container>
            <Price>$ {formattedPrice}</Price>
            <QuantityButton
                quantity={quantity}
                addQuantity={addQuantity}
                subQuantity={subQuantity}
            />
            <LinkButton renderedAs="button" onClick={handleCart}>Add to cart</LinkButton>

        </Container>
    );
}
