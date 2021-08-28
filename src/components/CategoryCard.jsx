import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

const Shop = styled.span`
    color: #00000050;
    font-size: 0.95rem;
    font-weight: 700;
    position: relative;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    padding-right: 1rem;
    transition: all 0.5s;
    text-decoration: none;

    &::after {
        content: url(${arrow});
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        transition: all 0.25s;
    }
`;

const Product = styled.img`
    width: 9.5rem;
    position: absolute;
    top: -3rem;
    transition: all 0.25s;

    @media (min-width: 1200px) {
        width: 12rem;
        top: -4.5rem;
    }
`;

const Card = styled(Link)`
    border-radius: 10px;
    background-color: #f1f1f1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    letter-spacing: 1px;
    margin: 0 auto 1rem;
    width: 100%;
    padding-top: 4rem;
    text-decoration: none;
    color: #000;

    @media (min-width: 768px) {
        min-height: 12.75rem;
    }

    @media (min-width: 1200px) {
        margin-top: 2rem;

        &:hover {
            ${Product} {
                transform: scale(1.1);
            }

            ${Shop} {
                color: ${props => props.theme.palette.primary.main};

                ::after {
                    right: -7px;
                }
            }
        }
    }
`;

const Category = styled.h4`
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    margin-block: 1.5rem 1rem;

    @media (min-width: 1200px) {
        font-size: 1.25rem;
    }
`;

export default function CategoryCard(props) {
    return (
        <Card to={props.to} onClick={props.onClick}>
            <Product src={props.src} alt={props.category} />
            <Category>{props.category}</Category>
            <Shop>Shop</Shop>
        </Card>
    );
}
