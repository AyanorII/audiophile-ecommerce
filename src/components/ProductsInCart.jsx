import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 64px 1fr;
    column-gap: 1rem;
    row-gap: 0.25rem;
    font-size: 0.875rem;
`;
const Img = {
    maxWidth: "100%",
    borderRadius: "10px",
    gridColumn: "1 / 2",
    gridRow: "1 / 3",
    alignSelf: "start",
    minHeight: "auto",
};

const ProductName = styled.p`
    text-transform: uppercase;
    font-weight: 700;
    align-self: end;
`;

const ProductPrice = styled.p`
    font-weight: 700;
    color: #00000050;
    align-self: start;
`;

export default function ProductsInCart(props) {
    const formattedName = props.name
        .replace("Wireless", "")
        .replace("Earphones", "")
        .replace("Headphones", "")
        .replace("Speakers", "");

    return (
        <Container>
            <img style={Img} src={require(`../${props.src.slice(2)}`).default} />
            <ProductName>{formattedName}</ProductName>
            <ProductPrice>$ {props.price}</ProductPrice>
        </Container>
    );
}
