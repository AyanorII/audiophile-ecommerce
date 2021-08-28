import styled from "styled-components";
import InTheBoxItem from "./InTheBoxItem";

const Container = styled.article`
    display: grid;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr;
        align-self: start;
    }
`;

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
        grid-column: 1 / 2;
        grid-row: 1 / 6;
    }

    @media (min-width: 1200px) {
        grid-row: 1 / 2;
    }
`;

export default function InTheBox(props) {
    return (
        <Container>
            <Heading>In the box</Heading>
            <ul>
                {props.includes.map((item, index) => {
                    return (
                        <InTheBoxItem
                            quantity={item.quantity}
                            item={item.item}
                            key={index}
                        />
                    );
                })}
            </ul>
        </Container>
    );
}
