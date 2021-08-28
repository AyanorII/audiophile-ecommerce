import styled from "styled-components";
import img from "../assets/shared/desktop/cash-icon.png";
import Paragraph from "./Paragraph";

const Container = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    grid-column: 1 / 3;
`;

export default function CashOnDeliveryMessage() {
    return (
        <Container>
            <img src={img} alt="cash on delivery" />
            <Paragraph left>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
            </Paragraph>
        </Container>
    );
}
