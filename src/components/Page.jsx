import React from "react";
import styled from "styled-components";
import BestGear from "./BestGear";

const StyledPage = styled.div`
    width: 90%;
    margin: 102px auto 0;
    background-color: #fff;
    padding: ${(props) => (props.padding ? "0.1rem 5% 31px" : "0")};
    border-radius: ${props => props.checkout ? "10px" : "0"};

    @media (min-width: 1200px) {
        width: 78%;
        padding-inline: ${(props) => (props.padding ? "4%" : "0")};
    }

    @media (min-width: 1440px) {
        width: 70%;
    }

    @media (min-width: 1920px) {
        width: 65%;
    }
`;

export default function Page(props) {
    return (
        <StyledPage padding={props.padding} checkout={props.checkout}>
            {props.children}
            {!props.checkout && <BestGear />}
        </StyledPage>
    );
}
