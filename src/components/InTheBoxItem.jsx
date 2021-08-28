import styled from "styled-components";

const ListItem = styled.li`
    list-style-type: none;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: 25px 1fr;
    gap: 1rem;
`;

const Quantity = styled.span`
    font-weight: 700;
    color: ${(props) => props.theme.palette.primary.main};
    margin-right: 1.5rem;
    margin-bottom: 0.75rem;
`;

const Item = styled.p`
    opacity: 0.5;
`;

export default function InTheBoxItem(props) {
    return (
        <ListItem>
            <Content>
                <Quantity>{props.quantity}x</Quantity>
                <Item>{props.item}</Item>
            </Content>
        </ListItem>
    );
}
