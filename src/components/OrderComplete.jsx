import styled from "styled-components";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Paragraph from "../components/Paragraph";
import Card from "../UI/Card";
import ProductsInCart from "./ProductsInCart";
import LinkButton from "../UI/LinkButton";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10%;

    @media (min-width: 768px) {
        padding: 10%;
    }
`;

const Heading = styled.h4`
    font-size: 1.5rem;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-block: 1.5rem 1rem;
`;

const StyledCard = styled(Card)`
    display: grid;
    overflow: hidden;
    margin-bottom: 1.4375rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 0.75fr;
        /* grid-template-rows: 140px; */
    }
`;

const Items = styled.div`
    padding: 2rem;
    padding-left: 1.5rem;
    background-color: #f1f1f1;
    display: grid;

    @media (min-width: 768px) {
        place-items: center;
        padding: 2rem 1.5rem 2rem 1rem;
    }
`;

const PurchasedProduct = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
    row-gap: 0.5rem;
`;

const Quantity = styled.span`
    font-weight: 700;
    font-size: 0.875rem;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    position: relative;
    top: 10px;
    color: #00000050;
    margin-left: 16px;
`;

const OtherItems = styled.div`
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: #00000050;
    border-top: 1px solid #00000025;
    grid-column: 1 / 3;
    padding-top: 0.75rem;
`;

const Total = styled.div`
    background-color: #000000;
    padding: 1rem 1.5rem;
    color: #fff;
    font-weight: 700;
    font-size: 1.125rem;
    display: grid;
    row-gap: 0.5rem;
    align-content: center;

    .grand-total {
        text-transform: uppercase;
        opacity: 0.5;
        font-weight: 500;
        font-size: 0.875rem;
    }
`;

const StyledParagraph = styled(Paragraph)`
    margin-bottom: 1.5rem;
`;

export default function OrderComplete(props) {
    return (
        <Content>
            <CheckCircleIcon color="primary" fontSize="large" />
            <Heading>Thank you for your order</Heading>
            <StyledParagraph left>
                You will receive an email confirmation shortly.
            </StyledParagraph>
            <StyledCard>
                <Items>
                    <PurchasedProduct>
                        <ProductsInCart
                            src={props.src}
                            name={props.name}
                            price={props.price}
                            fontSize="small"
                        />
                        <Quantity>x{props.quantity}</Quantity>
                        {props.numberOfItems > 1 && (
                            <OtherItems>
                                and {props.numberOfItems - 1} other item(s)
                            </OtherItems>
                        )}
                    </PurchasedProduct>
                </Items>
                <Total>
                    <span className="grand-total">Grand Total</span>
                    <span>$ {props.totalPrice.toLocaleString("de-DE")}</span>
                </Total>
            </StyledCard>
            <LinkButton to="/" large onClick={() => props.setCart([])}>
                Back to home
            </LinkButton>
        </Content>
    );
}
