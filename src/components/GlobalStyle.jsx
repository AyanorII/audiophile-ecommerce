import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        overflow-x: hidden;
        scroll-behavior: smooth;
        scrollbar-color: #D87D4A #00000060;

        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-track {
            background-color: #00000080;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #D87D4A;
        }

    
    }

    * {
        font-family: Manrope, "sans-serif";
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
