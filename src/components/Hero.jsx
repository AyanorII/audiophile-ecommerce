import React, { useContext } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Paragraph from "../components/Paragraph";
import { ProductContext } from "../App.js";
import { Link } from "react-router-dom";

const StyledHero = styled.section`
    text-align: center;
    color: #fff;
    padding: 28% 6.4% 30%;
    background-color: #00000080;
    background-image: url(${require("../assets/home/mobile/image-header.jpg")
        .default});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 80%;
    background-blend-mode: multiply;
    margin: 0 -6% 5.75rem;
    position: relative;

    @media (min-width: 768px) {
        background-image: url(${require("../assets/home/tablet/image-header.jpg")
            .default});
        background-position: center 80%;
        padding: 16.4% 25.5% 21.7%;
        margin-bottom: 6rem;
    }

    @media (min-width: 1200px) {
        background-image: url(${require("../assets/home/desktop/image-hero.jpg")
            .default});
        margin-bottom: 7.5rem;
        text-align: left;
        height: 90vh;
        padding: 15.6% 11.5% 11%;
        margin-inline: -15%;
    }

    @media (min-width: 1440px) {
        margin-inline: -24%;
        padding-inline: 25%;
    }

    @media (min-width: 1920px) {
        margin-inline: -28%;
    }
`;

const Heading = styled.h1`
    font-size: 2.25rem;
    line-height: 2.5rem;
    letter-spacing: 1.3px;
    font-weight: 700;
    margin-block: 1rem 1.5rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 3.5rem;
        line-height: 3.625rem;
        letter-spacing: 2px;
        margin-block: 1.5rem;
    }

    @media (min-width: 1200px) {
        font-size: 3.5rem;
        width: 20%;
    }

    @media (min-width: 1440px) {
        width: 50%;
    }
`;

const NewProduct = styled.span`
    letter-spacing: 10px;
    line-height: 1.25rem;
    font-size: 1rem;
    opacity: 0.5;
    margin-bottom: 1rem;
    text-transform: uppercase;
`;

const Description = styled(Paragraph)`
    margin-bottom: 1.75rem;

    @media (min-width: 768px) {
        margin-bottom: 2.5rem;
    }

    @media (min-width: 1200px) {
        width: 20%;
        text-align: left;
    }

    @media (min-width: 1440px) {
        width: 30%;
    }
`;

export default function Hero() {
    const [product, handleProduct] = useContext(ProductContext);

    return (
        <StyledHero>
            <NewProduct data-aos="fade-in">
                {" "}
                New Product
            </NewProduct>
            <Heading
                data-aos="fade-in"
                data-aos-delay="1000"
                data-aos-duration="3000"
            >
                XX99 Mark II Headphones
            </Heading>
            <div data-aos="fade-in" data-aos-duration="2100" data-aos-delay="2000">
                <Description>
                    Experience natural, lifelike audio and exceptional build
                    quality made for the passionate music enthusiast.
                </Description>
                <Link to={"/xx99-mark-two-headphones"}>
                    <Button
                        onClick={() =>
                            handleProduct("xx99-mark-two-headphones")
                        }
                    />
                </Link>
            </div>
        </StyledHero>
    );
}
