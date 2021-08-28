import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";

export default function Logo(props) {
    return (
        <Link to="/">
            <img
                className={props.className}
                src={logo}
                alt="logo"
                onClick={props.onClick}
            />
        </Link>
    );
}
