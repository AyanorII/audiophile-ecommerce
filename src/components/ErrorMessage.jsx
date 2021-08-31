import styled from 'styled-components';

const Message = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    color: #CD2C2C;
    font-size: 0.75rem;
`

export default function ErrorMessage(props) {
    return (
        <Message role="alert">
            {props.children}
        </Message>
    )
}
