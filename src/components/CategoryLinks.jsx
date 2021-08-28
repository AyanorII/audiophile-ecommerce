import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const PageLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: 2px;
    line-height: 1.5625rem;

    &:last-child {
        margin: 0;
    }

    @media (min-width: 768px) {
        margin: 0;
        margin-right: 1rem;
    }

    @media (min-width: 1200px) {
        transition: all 0.25s;

        &:hover {
            color: ${props => props.theme.palette.primary.main}
        }
    }
`;

export default function CategoryLinks(props) {
    return (
        <Container className={props.className}>
            <PageLink to="/" onClick={props.onClick}>home</PageLink>
            <PageLink to="/headphones" onClick={props.onClick}>headphones</PageLink>
            <PageLink to="/speakers" onClick={props.onClick}>speakers</PageLink>
            <PageLink to="/earphones" onClick={props.onClick}>earphones</PageLink>
        </Container>
    );
}
