import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    li {
        margin-right: ${props => props.footer ? "0" : "1rem"};

        &:last-of-type {
            margin-right: 0;
        }

        @media (min-width: 768px) {
            margin-right: 1rem;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const PageLink = styled(NavLink)`
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

    &.active {
        opacity: 0.6
    }

    @media (min-width: 768px) {
        margin: 0;
    }

    @media (min-width: 1200px) {
        transition: all 0.25s;

        &:hover {
            color: ${(props) => props.theme.palette.primary.main};
        }
    }
`;

export default function CategoryLinks(props) {
    return (
        <Container footer={props.footer} className={props.className}>
            <li>
                <PageLink exact to="/" onClick={props.onClick}>
                    home
                </PageLink>
            </li>
            <li>
                <PageLink to="/headphones" onClick={props.onClick}>
                    headphones
                </PageLink>
            </li>
            <li>
                <PageLink to="/speakers" onClick={props.onClick}>
                    speakers
                </PageLink>
            </li>
            <li>
                <PageLink to="/earphones" onClick={props.onClick}>
                    earphones
                </PageLink>
            </li>
        </Container>
    );
}
