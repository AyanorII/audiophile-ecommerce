import {useContext} from "react";
import { ProductContext } from "../App";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";

const Card = styled.div`
    border-radius: 10px;
    background-image: url(${require("../assets/home/mobile/image-speaker-zx7.jpg").default});
    background-position: center;
    background-size: cover;
    padding: 30.8% 7.4%;
    margin-block: 1.5rem;

    @media (min-width: 768px) {
        padding: 14.6% 9%;
        background-image: url(${require("../assets/home/tablet/image-speaker-zx7.jpg").default});
    }

    @media (min-width: 1200px) {
        padding: 6.75rem 9%;
        background-image: url(${require("../assets/home/desktop/image-speaker-zx7.jpg").default});
    }
`;

const Product = styled.h2`
    font-size: 1.75rem;
    line-height: 2.375rem;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    text-transform: uppercase;
`;

export default function ProductCard1() {
    const [product, handleProduct] = useContext(ProductContext)

    return (
        <Card data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300">
            <Product>zx7 speaker</Product>
            <Link to={"/zx7-speaker"}>
                <Button background="transparent" backgroundHover="#000" color="#000" border onClick={() => handleProduct('zx7-speaker')}/>
            </Link>
                
        </Card>
    );
}