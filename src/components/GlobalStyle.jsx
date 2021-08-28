import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    * {
        font-family: Manrope, "sans-serif";
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
