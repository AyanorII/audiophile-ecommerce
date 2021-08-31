import { Link } from "react-router-dom";
import styled from "styled-components";
import CartMain from "../components/CartMain";
import TotalPrice from "../components/TotalPrice";
import LinkButton from "./LinkButton";

const StyledModalBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2rem;
    box-shadow: 0 0 1000px 1000px #00000050;
    border-radius: 10px;
    background: #fff;
    padding: 1.9375rem 1.75rem;
`;

const Cart = styled.h4`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 25px;
    letter-spacing: 1.3px;
    grid-column: 1 / 3;
`;

const RemoveButton = styled.button`
    border: none;
    color: #00000050;
    transition: all 0.25s;
    grid-column: 3 / 4;
    background-color: transparent;
    cursor: pointer;
    font-size: 0.95rem;

    @media (min-width: 1200px) {
        &:hover {
            color: ${(props) => props.theme.palette.primary.main};
        }
    }
`;

const CheckoutButton = styled(LinkButton)`
    grid-column: 1 / 4;
    margin-top: -8px;
    width: 100%;
`;

const DisabledButton = styled(LinkButton)`

`

const CartEmpty = styled.p`
    grid-column: 1 / 4;
    opacity: 0.5;
`;

export default function ModalBody(props) {
    return (
        <StyledModalBody>
            <Cart>Cart ({props.cart.length})</Cart>
            <RemoveButton onClick={props.clearCart}>Remove all</RemoveButton>
            {props.cart.length === 0 && (
                <CartEmpty>Your cart is empty</CartEmpty>
            )}
            {props.cart.length > 0 &&
                props.cart.map((product, index) => (
                    <CartMain
                        key={index}
                        name={product.product}
                        price={product.price}
                        quantity={product.quantity}
                        src={product.img}
                        subQuantity={props.subQuantity}
                        addQuantity={props.addQuantity}
                    />
                ))}
            <TotalPrice totalPrice={props.totalPrice} />
            {props.cart.length === 0 && <CheckoutButton renderedAs="button" disabled>Checkout</CheckoutButton>}
            {props.cart.length > 0 && <CheckoutButton
                to="/checkout"
                large
                onClick={props.closeModal}
            >
                Checkout
            </CheckoutButton>}
        </StyledModalBody>
    );
}
