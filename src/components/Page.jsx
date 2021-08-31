import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components";
import BestGear from "./BestGear";

const StyledPage = styled.main`
    width: 90%;
    margin: 96px auto 0;
    background-color: #fff;
    padding: ${(props) => (props.padding ? "0.1rem 5% 31px" : "0")};
    border-radius: ${(props) => (props.checkout ? "10px" : "0")};
    outline: none;

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

//FIXME: Fix tab focus 
export default function Page(props) {
    const focusRef = useRef(null)

    useEffect(() => {
        focusRef.current.focus();
        window.scrollTo(0, 0)
    }, []);

    return (
        <StyledPage tabIndex="-1" ref={focusRef} padding={props.padding}>
            {props.children}
            {!props.blank && <BestGear />}
        </StyledPage>
    );
}
