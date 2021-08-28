import styled from "styled-components";

const Container = styled.div`
    max-height: 64px;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    row-gap: 0.25rem;
    font-size: 0.875rem;
`;
const Img = styled.img`
    width: 64px !important;
    height: 64px !important;
    object-fit: cover;
    border-radius: 10px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
`;

const ProductName = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    align-self: end;
`;

const ProductPrice = styled.p`
    font-weight: 700;
    color: #00000050;
`;

export default function ProductsInCart(props) {
    const formattedName = props.name
        .replace("Wireless", "")
        .replace("Earphones", "")
        .replace("Headphones", "")
        .replace("Speakers", "");

    return (
        <Container>
            <Img src={require(`../${props.src.slice(2)}`).default} />
            <ProductName>{formattedName}</ProductName>
            <ProductPrice>$ {props.price}</ProductPrice>
        </Container>
    );
}
