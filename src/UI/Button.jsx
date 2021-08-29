import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) =>
        props.background ? props.background : props.theme.palette.primary.main};
    padding: 0.9375rem;
    text-align: center;
    width: ${(props) => (props.large ? "100%" : "10rem")};
    text-transform: uppercase;
    border: ${(props) => (props.border ? "1px solid black" : "none")};
    color: ${(props) => (props.color ? props.color : "#FFF")};
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.2s;

    &:disabled {
        background-color: #F1F1F1;
        color: #00000050;
        cursor: not-allowed;

        &:hover {
            background-color: #F1F1F1;
        }
    }

    @media (min-width: 1200px) {
        &:hover {
            background-color: ${(props) =>
                props.backgroundHover
                    ? props.backgroundHover
                    : props.theme.palette.primary.light};
            color: ${props => props.backgroundHover === "#000" && "#FFF"}
        }
    }
`;

export default function Button(props) {
    return (
        <StyledButton
            background={props.background}
            border={props.border}
            color={props.color}
            backgroundHover={props.backgroundHover}
            data-aos={props.dataAos}
            className={props.className}
            onClick={props.onClick}
            large={props.large}
            disabled={props.disabled}
        >
            {props.children ? props.children : "see product"}
        </StyledButton>
    );
}
