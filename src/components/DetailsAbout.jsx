import styled from "styled-components";
import Features from "./Features";
import InTheBox from "./InTheBox";

const Section = styled.section`
    margin-block: 5.5rem;
    display: grid;
    gap: 7.8125rem;

    @media (min-width: 768px) {
        margin-block: 7.5rem;
    }

    @media (min-width: 1200px) {
        margin-block: 10rem;
        grid-template-columns: 1fr 0.7fr;
    }
`;

export default function DetailsAbout(props) {
    return (
        <Section>
            <Features features={props.features} />
            <InTheBox includes={props.includes} />
        </Section>
    );
}
