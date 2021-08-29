import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../UI/Button";
import { useContext } from "react";
import { ProductContext } from "../App";

const Section = styled.section`
    text-align: center;
`;

const Heading = styled.h3`
    font-size: 1.5rem;
    line-height: 2.25rem;
    letter-spacing: 0.86px;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 2.5rem;

    @media (min-width: 768px) {
        font-size: 2rem;
        letter-spacing: 1.15px;
        margin-bottom: 3.5rem;
    }

    @media (min-width: 1200px) {
        margin-bottom: 4rem;
    }
`;

const Container = styled.div`
    display: grid;
    row-gap: 3.5rem;
    margin-bottom: 10.75rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 0.75rem;
    }

    @media (min-width: 1200px) {
        column-gap: 2rem;
        margin-bottom: 15rem;
    }
`;

const Img = styled.img`
    border-radius: 10px;
    width: 100%;

    &.tablet,
    &.desktop {
        display: none;
    }

    @media (min-width: 768px) {
        &.mobile {
            display: none;
        }

        &.tablet {
            display: block;
        }
    }

    @media (min-width: 1200px) {
        &.tablet {
            display: none;
        }

        &.desktop {
            display: block;
        }
    }
`;

const ProductName = styled.h4`
    font-size: 1.5rem;
    line-height: 32.8px;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    margin-block: 2rem;
`;

export default function Recommendations(props) {

    return (
        <Section>
            <Heading>You may also like</Heading>
            <Container>
                {props.recommendations.map((item, index) => (
                    <div key={index}>
                        <Img
                            src={
                                require("../" + item.image.mobile.slice(2))
                                    .default
                            }
                            className="mobile"
                        />
                        <Img
                            src={
                                require("../" + item.image.tablet.slice(2))
                                    .default
                            }
                            className="tablet"
                        />
                        <Img
                            src={
                                require("../" + item.image.desktop.slice(2))
                                    .default
                            }
                            className="desktop"
                        />
                        <ProductName>{item.name}</ProductName>
                        <Link to={`/${item.slug}`}>
                            <Button/>
                        </Link>
                    </div>
                ))}
            </Container>
        </Section>
    );
}
