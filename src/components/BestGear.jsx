import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";

const Section = styled.section`
    display: grid;
    gap: 40px;
    margin-block: 7.5rem;

    @media (min-width: 768px) {
        margin-block: 6rem;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 3.75rem;
        margin-block: 12.5rem;
    }

    @media (min-width: 1440px) {
        column-gap: 13%;
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

const Content = styled.div`
    text-align: center;

    @media (min-width: 768px) {
        width: 80%;
        margin: 0 auto;
    }

    @media (min-width: 1200px) {
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        order: -1;
    }
`;

const Title = styled.h3`
    font-size: 1.75rem;
    line-height: 2.375rem;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2rem;

    span {
        color: ${(props) => props.theme.palette.primary.main};
    }

    @media (min-width: 768px) {
        width: 70%;
        margin: 1.4375rem auto 2rem;
    }

    @media (min-width: 1200px) {
        width: 100%;
        margin: 0 auto 2rem;
    }
`;

export default function BestGear() {
    return (
        <Section>
            <div data-aos="fade-left">
                <Img data-aos="zoom"
                    className="mobile"
                    src={
                        require("../assets/shared/mobile/image-best-gear.jpg")
                            .default
                    }
                />
                <Img data-aos="zoom"
                    className="tablet"
                    src={
                        require("../assets/shared/tablet/image-best-gear.jpg")
                            .default
                    }
                />
                <Img data-aos="zoom"
                    className="desktop"
                    src={
                        require("../assets/shared/desktop/image-best-gear.jpg")
                            .default
                    }
                />
            </div>
            <Content data-aos="fade-right">
                <Title>
                    Bringing you the <span>best</span> audio gear
                </Title>
                <Paragraph>
                    Located at the heart of New York City, Audiophile is the
                    premier store for high end headphones, earphones, speakers,
                    and audio accessories. We have a large showroom and luxury
                    demonstration rooms available for you to browse and
                    experience a wide range of our products. Stop by our store
                    to meet some of the fantastic people who make Audiophile the
                    best place to buy your portable audio equipment.
                </Paragraph>
            </Content>
        </Section>
    );
}
