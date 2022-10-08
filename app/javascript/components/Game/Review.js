import React from 'react'
import styled from 'styled-components';
import Rating from '../Rating/Rating';

const Card = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    padding: 20pt;
    margin: 0 20pt 20pt 0;
`
const Title = styled.div`
    padding: 20pt 0 0 0;
    font-size: 20pt;
`
const Description = styled.div`
    padding: 0 0 20pt 0;
    font-size: 14pt;
`

const Review = (props) => {

    const { score, title, description } = props.attributes

    return (
        <Card>
            <RatingContainer>
                <RatingScore>{score}</RatingScore>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </RatingContainer>
        </Card>
    )
}

export default Review