import styled from "styled-components";
import QuantityButton from "./QuantityButton";
import ProductsInCart from "./ProductsInCart";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.8fr;
    gap: 1.5rem;
    grid-column: 1 / 4;
    width: 100%;
    align-items: center;

    .quantity-button {
        justify-self: end;
    }
`;

export default function CartMain(props) {
    return (
        <Container>
            <ProductsInCart
                src={props.src}
                name={props.name}
                price={props.price}
            />
            <div className="quantity-button">
                <QuantityButton
                    quantity={props.quantity}
                    subQuantity={props.subQuantity}
                    addQuantity={props.addQuantity}
                    name={props.name}
                />
            </div>
        </Container>
    );
}
