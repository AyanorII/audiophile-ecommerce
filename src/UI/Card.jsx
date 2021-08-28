import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    border-radius: 10px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : "initial"};
    background-image: ${props => props.backgroundImage ? props.backgroundImage : "initial"};
`

export default function Card(props) {
    return (
        <StyledCard data-aos={props.dataAos} className={props.className} backgroundColor={props.backgroundColor} backgroundImage={props.backgroundImage}>
            {props.children}
        </StyledCard>
    )
}
