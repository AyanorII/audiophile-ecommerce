import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    row-gap: 0.25rem;
`;
const Img = styled.img`
    width: 100%;
    max-width: 64px;
    height: 100%;
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
    
    return (
        <Container>
            <Img src={require(`../${props.src.slice(2)}`).default} />
            <ProductName>{props.name}</ProductName>
            <ProductPrice>$ {props.price}</ProductPrice>
        </Container>
    );
}
