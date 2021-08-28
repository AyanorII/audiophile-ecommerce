import React from "react";
import styled from "styled-components";

const Description = styled.p`
    font-size: 1rem;
    line-height: 25px;
    opacity: 0.75;
    text-align: ${(props) => (props.left ? "left" : "center")};
    color: ${(props) => props.color};

    @media (min-width: 1200px) {
        text-align: left;
    }
`;

export default function Paragraph(props) {
    return (
        <Description
            className={props.className}
            color={props.color}
            left={props.left}
            data-aos={props.dataAos}
        >
            {props.children}
        </Description>
    );
}
