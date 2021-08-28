import React from "react";
import styled from "styled-components";
import SocialMediaLinks from "../UI/SocialMediaLinks";
import CategoryLinks from "./CategoryLinks";
import Logo from "./Logo";
import Paragraph from "./Paragraph";

const StyledFooter = styled.footer`
    background-color: #000;
    text-align: center;
    padding: 3.25rem 6.4% 2.375rem;
    display: grid;
    row-gap: 3rem;
    justify-items: center;
    position: relative;

    &::before {
        content: "";
        background-color: ${props => props.theme.palette.primary.main};
        height: 4px;
        width: 101px;
        top: 0;
        position: absolute;
    }

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        justify-items: start;
        text-align: left;
        padding: 3.75rem 5.5% 2.875rem;

        &::before {
            left: 5.5%;
        }

        .social-media {
            grid-column: 2 / 3;
            justify-self: end;
        }

        .category-links {
            grid-column: 1 / 3
        }
    }

    @media (min-width: 1200px) {
        padding: 4.6875rem 11.4% 3rem;
        gap: 2.25rem;

        &::before {
            left: 11.4%;
        }
        
        .category-links {
            grid-column: 2 / 3;
            justify-self: end;
        }
        
        .social-media {
            grid-row: 2 / 3;
            align-self: end;
        }
    }
`;

const Span = styled(Paragraph)`
    font-weight: 700;
    color: #FFFFFF90;
    grid-column: 1 / 2;
`;

const FooterParagraph = styled(Paragraph)`
    @media (min-width: 768px) {
        margin-bottom: 3rem;
        text-align: left;
    }

    @media (min-width: 1200px) {
        grid-column: 1 / 2;
        margin-bottom: 1.25rem;
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <Logo />
            <CategoryLinks className="category-links"/>
            <FooterParagraph color="#FFF">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
            </FooterParagraph>
            <Span as="span">Copyright 2021. All Rights Reserved</Span>
            <SocialMediaLinks className="social-media"/>
        </StyledFooter>
    );
}
