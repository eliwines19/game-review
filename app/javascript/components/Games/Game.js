import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`
const Logo = styled.div`

    img {
        height: 200px;
        width: 200px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const Title = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 20px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        border-radius: 4px;
        background: #000;
        padding: 10px 50px;
        background: #000;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const score = (score) => {
    if (score == 0) {
        return (<div>No Reviews Yet</div>)
    } else {
        return (<Rating score={score}/>)
    }
}

const Game = (props) => {
    return (
        <Card>
            <Logo>
                <img src={props.attributes.image_url} alt={props.attributes.title}/>
            </Logo>
            <Title>{props.attributes.title}</Title>
            {score(props.attributes.avg_score)}
            <LinkWrapper>
                <Link to={`games/${props.attributes.slug}`} >View Game</Link>
            </LinkWrapper>
        </Card>
    )
}

export default Game