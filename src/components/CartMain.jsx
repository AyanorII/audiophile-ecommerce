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
`;

export default function CartMain(props) {
    const formattedName = props.name
        .replace("Wireless", "")
        .replace("Earphones", "")
        .replace("Headphones", "")
        .replace("Speakers", "");

    return (
        <Container>
            <ProductsInCart src={props.src} name={formattedName} price={props.price} />
            <div>
                <QuantityButton
                    quantity={props.quantity}
                    subQuantity={props.subQuantity}
                    addQuantity={props.addQuantity}
                    name={props.name}
                    test={true}
                />
            </div>
        </Container>
    );
}
