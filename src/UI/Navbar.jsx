import React, { useState } from "react";
import styled from "styled-components";
import navButton from "../assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "../assets/shared/desktop/icon-cart.svg";
import CategorySection from "../components/CategorySection";
import Logo from "../components/Logo";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CategoryLinks from "../components/CategoryLinks";
import CartIcon from "../components/CartIcon";

const StyledNavbar = styled.nav`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: fixed;
    top: 0;
    width: 100%;
    height: 97px;
    z-index: 999;

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 2fr 1fr;
    }
`;

const Nav = styled.div`
    background-color: #000;
    grid-column: 1 / 4;
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 2.25rem 5.2%;
    position: relative;
    z-index: 999;

    button {
        border: none;
        background-color: inherit;
    }

    .menu {
        width: 1rem;
        height: 1rem;
        padding: 9px;
        background-image: url(${navButton});
        background-size: cover;
        background-repeat: no-repeat;
        align-self: center;
    }

    .cart {
        justify-self: end;
        width: 1.5rem;
    }

    @media (min-width: 1200px) {
        grid-row: 1 / 2;
        padding-inline: 11.4%;

        .menu {
            display: none;
        }
    }

    @media (min-width: 1440px) {
        padding-inline: 15%;
    }

    @media (min-width: 1920px) {
        padding-inline: 17.4%;
    }
`;

const NavLinks = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: 1 / 4;
    justify-self: center;
    background-color: #fff;
    padding: 5rem 6.4% 0;
    transform: translateY(${(props) => (props.isNavbarOpen ? "0" : "-200%")});
    transition: all 0.5s;
    width: 100%;
    overflow: scroll;
    height: 90vh;
    box-shadow: ${(props) =>
        props.isNavbarOpen ? "0 0 1000px 1000px #00000080" : "0"};

    @media (min-width: 768px) {
        height: 45vh;
    }

    @media (min-width: 1200px) {
        height: 100%;
        transform: unset;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        position: relative;
        z-index: 999;
        padding: 0;
        overflow: hidden;
        background-color: inherit;
        display: grid;
        place-items: center;
    }
`;

const NavbarLogo = styled(Logo)`
    @media (min-width: 768px) {
        margin-inline: 6% auto;
    }

    @media (min-width: 1200px) {
        margin-inline: 0 auto;
    }
`;

const NavbarCategorySection = styled(CategorySection)`
    @media (min-width: 1200px) {
        display: none;
    }
`;

export default function Navbar(props) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleMenu = () => {
        setIsNavbarOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsNavbarOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={() => setIsNavbarOpen(false)}>
            <StyledNavbar>
                <Nav>
                    <button className="menu" onClick={handleMenu}></button>
                    <NavbarLogo onClick={closeMenu} />
                    <CartIcon
                        icon={cartIcon}
                        numberOfItems={props.numberOfItems}
                        openModal={props.openModal}
                    />

                </Nav>
                <NavLinks isNavbarOpen={isNavbarOpen}>
                    <NavbarCategorySection onClick={handleMenu} />
                    <CategoryLinks />
                </NavLinks>
            </StyledNavbar>
        </ClickAwayListener>
    );
}
