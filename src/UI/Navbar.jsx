import React, { useState, useRef } from "react";
import styled from "styled-components";
import navButton from "../assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import CategorySection from "../components/CategorySection";
import Logo from "../components/Logo";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CategoryLinks from "../components/CategoryLinks";
import CartIcon from "../components/CartIcon";

const Header = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    background-color: #000;
    padding: 33.5px 5%;

    button {
        border: none;
        background: inherit;
    }

    .menu {
        width: 1rem;
        height: 1rem;
        padding: 9px;
        background-image: url(${navButton});
        background-size: cover;
        background-repeat: no-repeat;
        align-self: center;
        grid-column: 1 / 2;
    }

    .logo {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        justify-self: center;
    }

    .cart {
        grid-row: 1 / 2;
        grid-column: 3 / 4;
        justify-self: end;
        width: 1.5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: 1fr 2fr 1fr;

        .menu {
            display: none;
        }

        .logo {
            grid-column: 1 / 2;
            justify-self: start;
        }
    }

    @media (min-width: 1200px) {
        padding-inline: 11.4%;
    }

    @media (min-width: 1440px) {
        padding-inline: 15%;
    }

    @media (min-width: 1920px) {
        padding-inline: 17.4%;
    }
`;

const Nav = styled.nav`
    grid-column: 1 / 4;
    display: flex;
    justify-content: space-between;
    align-self: center;
    z-index: 999;
    position: absolute;
    top: 0;
    left: -5.8%;
    width: 100vw;
    height: 90vh;
    transform: translateY(
        ${(props) => (props.isNavbarOpen ? "97px" : "-200%")}
    );
    transition: all 0.5s;

    @media (min-width: 1024px) {
        transform: unset;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        position: static;
        width: auto;
        height: auto;
    }
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 4;
    justify-self: center;
    background-color: #fff;
    padding: 5rem 6.4% 0;
    width: 100%;
    overflow: scroll;
    transition: all 0.5s;
    box-shadow: ${(props) =>
        props.isNavbarOpen ? "0 1000px 500px 500px #00000050" : "0"};

    @media (min-width: 1024px) {
        padding: 0;
        background-color: inherit;
        place-items: center;
        overflow: hidden;
    }
`;

const NavbarCategorySection = styled(CategorySection)`
    @media (min-width: 1024px) {
        display: none;
    }
`;

export default function Navbar(props) {
    
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isCartExpanded, setIsCartExpanded] = useState(false);

    const handleMenu = () => {
        setIsNavbarOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsNavbarOpen(false);
    };

    const openCart = () => {
        setIsCartExpanded(true);
    };

    const handleClickAway = () => {
        setIsNavbarOpen(false);
        setIsCartExpanded(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Header isNavbarOpen={isNavbarOpen} >
                <button
                    aria-label="menu button"
                    aria-expanded={isNavbarOpen}
                    aria-controls="nav"
                    className="menu"
                    onClick={handleMenu}
                ></button>
                <div className="logo">
                    <Logo onClick={closeMenu} />
                </div>
                <Nav id="nav" isNavbarOpen={isNavbarOpen}>
                    <NavLinks isNavbarOpen={isNavbarOpen}>
                        <NavbarCategorySection onClick={handleMenu} />
                        <div className="category-links">
                            <CategoryLinks />
                        </div>
                    </NavLinks>
                </Nav>
                <div className="cart">
                    <CartIcon
                        icon={cartIcon}
                        numberOfItems={props.numberOfItems}
                        openModal={props.openModal}
                        isCartExpanded={isCartExpanded}
                        openCart={openCart}
                    />
                </div>
            </Header>
        </ClickAwayListener>
    );
}
