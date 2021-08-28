import { useContext } from "react";
import { ProductContext } from "../App";
import styled from "styled-components";
import Button from "../UI/Button";
import AddToCart from "./AddToCart";
import Paragraph from "./Paragraph";
import ProductImage from "./ProductImage";
import { Link } from "react-router-dom";

const StyledProduct = styled.article`
    display: grid;
    place-items: center;
    margin-block: 6.375rem 7.5rem;

    .tablet,
    .desktop {
        display: none;
    }

    @media (min-width: 768px) {
        grid-template-columns: ${(props) =>
            props.details ? "1fr 1fr" : "auto"};
        column-gap: ${(props) => (props.details ? "4.375rem" : "0")};

        .mobile {
            display: none;
        }

        .tablet {
            display: block;
            position: relative;

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%)
            }
        }
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 7.8125rem;

        .tablet {
            display: none;
        }

        .desktop {
            display: block;
        }
    }
`;

const Content = styled.div`
    text-align: ${(props) => (props.details ? "left" : "center")};
    margin-top: 2rem;

    @media (min-width: 1200px) {
        text-align: left;
    }
`;

const NewProduct = styled.span`
    letter-spacing: 0.625rem;
    color: ${(props) => props.theme.palette.primary.light};
    text-transform: uppercase;
`;

const ProductName = styled.h2`
    text-transform: uppercase;
    font-size: 1.75rem;
    line-height: 2.375rem;
    letter-spacing: 1px;
    margin-block: 1.5rem;

    @media (min-width: 768px) {
        font-size: 2.5rem;
        letter-spacing: 1.5px;
        width: 50%;
        margin: 1rem ${(props) => (props.details ? "0" : "auto")} 2rem;
    }

    @media (min-width: 1200px) {
        margin-left: 0;
    }
`;

const Description = styled(Paragraph)`
    margin-bottom: 1.5rem;
    text-align: ${(props) => (props.details ? "left" : "center")};

    @media (min-width: 768px) {
        width: 85%;
        margin: 2rem ${(props) => (props.details ? "0" : "auto")} 1.5rem;
    }

    @media (min-width: 1200px) {
        margin-left: 0;
        text-align: left;
    }
`;

const ImageContainer = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        grid-row: 1 / 3;
        height: 100%;
        
    }

    @media (min-width: 1200px) {
        grid-row: 1 / 3;
        height: 100%;
        grid-column: ${(props) => (props.index % 2 === 0 ? "1 / 2" : "2 / 3")};
    }
`;

const ProductLink = styled(Link)`
    @media (min-width: 1200px) {
        margin-right: auto;
        align-self: start;
    }
`;

export default function Product(props) {
    const [product, handleProduct] = useContext(ProductContext);

    return (
        <StyledProduct details={props.details} data-aos={props.dataAos} data-aos-offset="350" style={props.style}>
            <ImageContainer index={props.index} data-aos="zoom">
                <ProductImage
                    src={props.src}
                    className="mobile"
                    details={props.details}
                />
                <ProductImage
                    src={props.src.replace("mobile", "tablet")}
                    className="tablet"
                    details={props.details}
                />
                <ProductImage
                    src={props.src.replace("mobile", "desktop")}
                    className="desktop"
                    details={props.details}
                />
            </ImageContainer>
            <Content details={props.details}>
                {props.new && <NewProduct>New Product</NewProduct>}
                <ProductName details={props.details}>{props.name}</ProductName>
                <Description details={props.details}>
                    {props.description}
                </Description>
            </Content>
        
            {!props.details && (
                <ProductLink to={`/${props.slug}`}>
                    <Button onClick={() => handleProduct(props.slug)} />
                </ProductLink>
            )}
            {props.details && (
                <AddToCart
                    handleCart={props.handleCart}
                    product={props.name}
                    price={props.price}
                    src={props.src}
                    openSnackbar={props.openSnackbar}
                />
            )}
        </StyledProduct>
    );
}
