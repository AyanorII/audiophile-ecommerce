import styled from "styled-components";
import Paragraph from "./Paragraph";

const Heading = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 2.25rem;
    letter-spacing: 0.86px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 2rem;
        letter-spacing: 0.0712rem;
        margin-bottom: 2rem;
    }
`;

const Feature = styled(Paragraph)`
    white-space: pre-line;
    opacity: 0.5;
`;

export default function Features(props) {
    return (
        <article>
            <Heading>Features</Heading>
            <Feature left>{props.features}</Feature>
        </article>
    );
}
