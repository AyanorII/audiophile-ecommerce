import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    row-gap: 1.5rem;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    @media (min-width: 768px) {
        &.full-width {
            grid-column: 1 / 3;
        }
    }
`;

export const Label = styled.label`
    font-weight: 700;
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    
`;

export const Title = styled.h4`
    font-size: 0.8125rem;
    letter-spacing: 0.93px;
    color: ${(props) => props.theme.palette.primary.main};
    text-transform: uppercase;
    /* margin-bottom: 1rem; */
    
    @media (min-width: 768px) {
        &:not(first-of-child) {
        }
    }
`;

export default function CheckoutSection(props) {
    return <>{props.children}</>;
}
