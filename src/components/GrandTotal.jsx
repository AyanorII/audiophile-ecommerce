import styled from "styled-components";
import Paragraph from "./Paragraph";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    justify-content: space-between;
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
    }
`;

const Title = styled.span`
    text-transform: uppercase;
    opacity: 0.5;
`;

const Amount = styled.span`
    font-weight: 700;
`;

export default function GrandTotal(props) {
    // * Calculates the total price plus 20% of taxes and returns the value with two decimal places
    const vat = props.total * 1.2;
    const finalPrice = vat + 50
    return (
        <Container>
            <div>
                <Title>Total</Title>
                <Amount>$ {props.total.toLocaleString("de-DE")}</Amount>
            </div>
            <div>
                <Title>Shipping</Title>
                <Amount>$ 50</Amount>
            </div>
            <div>
                <Title>VAT (included)</Title>
                <Amount>$ {vat.toLocaleString("de-DE")}</Amount>
            </div>
            <div className="grand-total">
                <Title>Grand Total</Title>
                <Amount>$ {finalPrice.toLocaleString("de-DE")}</Amount>
            </div>
        </Container>
    );
}
