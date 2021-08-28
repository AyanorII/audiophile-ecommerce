import React from "react";
import CategoryCard from "./CategoryCard";
import styled from "styled-components";
import headphoneImg from "../assets/shared/desktop/image-headphones.png";
import speakerImg from "../assets/shared/desktop/image-speakers.png";
import earphoneImg from "../assets/shared/desktop/image-earphones.png";

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 4.25rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 0;
        column-gap: 0.625rem;
    }

    @media (min-width: 1200px) {
        column-gap: 30px;
    }

    @media (min-width: 1440px) {
        column-gap: 7.5%;
    }
`;

export default function CategorySection(props) {
    return (
        <Section className={props.className} data-aos="fade-right">
            <CategoryCard to="/headphones" category="headphones" src={headphoneImg} onClick={props.onClick}/>
            <CategoryCard to="/speakers" category="speakers" src={speakerImg} onClick={props.onClick}/>
            <CategoryCard to="/earphones" category="earphones" src={earphoneImg} onClick={props.onClick}/>
        </Section>
    );
}
