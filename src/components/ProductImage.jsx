import React from 'react'
import styled from 'styled-components';
import Card from '../UI/Card';

const Container = styled(Card)`
    width: 100%;
    height: ${props => props.details ? '100%' : '352px'};
    background-color: #F1F1F1;
    place-items: center;
    
    @media (min-width: 1200px) {
        height: 100%;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;

    @media (min-width: 768px) {
        width: ${props => props.details ? '100%' : '50%'};
    }

    @media (min-width: 1200px) {
        width: 100%;
    }
`

export default function ProductImage(props) {
    const src = props.src.slice(2)

    return (
        <Container className={props.className} details={props.details}>
            <Img src={require(`../${src}`).default} details={props.details} alt="product"/>
        </Container>
    )
}
