import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";

export default function Logo(props) {
    return (
        <Link to="/" aria-label="homepage">
            <img
                className={props.className}
                src={logo}
                alt="audiophile"
                onClick={props.onClick}
            />
        </Link>
    );
}
