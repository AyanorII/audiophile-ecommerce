import styled from "styled-components";

const CartButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100px;
    background-color: #f1f1f1;
    align-items: center;
    grid-column: 1 / 2;

    button {
        color: #00000025;
        padding: 0.75rem;
        border: none;
        font-weight: 700;
        font-size: 1.2rem;

        &:hover {
            color: ${props => props.theme.palette.primary.main}
        }
    }

    span {
        font-weight: 700;
        text-align: center;
    }
`;

export default function QuantityButton(props) {
    return (
        <CartButton>
            <button onClick={() => props.subQuantity(props.name)}>-</button>
            <span>{props.quantity}</span>
            <button onClick={() => props.addQuantity(props.name)}>+</button>
        </CartButton>
    );
}
