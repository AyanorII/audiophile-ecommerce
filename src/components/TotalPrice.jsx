import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: 1 / 4;

    span {
        text-transform: uppercase;
        opacity: 0.5;
    }

    p {
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 25px;
    }
`

export default function TotalPrice(props) {

    return (
        <Container>
            <span>Total</span>
            <p>$ {props.totalPrice.toLocaleString('de-DE')}</p>
        </Container>
    )
}
