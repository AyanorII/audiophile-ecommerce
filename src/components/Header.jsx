import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: #000;
    text-align: center;
    height: 102px;
    text-transform: uppercase;
    color: #FFF;
    font-size: 1.75rem;
    line-height: 2.375rem;
    letter-spacing: 2px;
    font-weight: 700;
    display: grid;
    place-items: center;
    margin: 0 -6%;

    @media (min-width: 1200px) {
        margin-inline: -15%;
    }

    @media (min-width: 1440px) {
        margin-inline: -23%;
    }

    @media (min-width: 1920px) {
        margin-inline: -30%;
    }
`

export default function Header(props) {
    return (
        <StyledHeader>
            {props.children}
        </StyledHeader>
    )
}
