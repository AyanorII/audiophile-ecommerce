import styled from "styled-components";
import Button from "../UI/Button";
import GrandTotal from "./GrandTotal";
import ProductsInCart from "./ProductsInCart";

const SummarySection = styled.section`
    display: grid;
    row-gap: 2rem;
    margin-top: 4rem;

    @media (min-width: 1200px) {
        grid-column: 2 / 3;
        grid-row: 1 / 5;
        align-self: start;
    }
`;

const Items = styled.div`
    display: grid;
    row-gap: 1.5rem;
`;

const Heading = styled.h4`
    font-size: 1.125rem;
    letter-spacing: 1.3px;
    line-height: 25px;
    text-transform: uppercase;
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SummaryButton = styled(Button)`
    width: 100%;
`;

export default function Summary(props) {
    return (
        <SummarySection>
            <Heading>Summary</Heading>
            <Items>
                {props.cart.map((item, index) => {
                    let formattedName = item.product
                        .replace("Wireless", "")
                        .replace("Earphones", "")
                        .replace("Headphones", "")
                        .replace("Speakers", "");
                    return (
                        <ItemContainer>
                            <ProductsInCart
                                src={item.img}
                                name={formattedName}
                                price={item.price}
                                key={index}
                            />
                            <p>x{item.quantity}</p>
                        </ItemContainer>
                    );
                })}
            </Items>
            <GrandTotal total={props.totalPrice} />
            <SummaryButton type="submit" >Continue & pay</SummaryButton>
        </SummarySection>
    );
}
