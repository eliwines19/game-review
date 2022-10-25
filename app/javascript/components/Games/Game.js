import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid black;
    background: #F1F3F4;
    text-align: center;
    box-shadow: 5px 5px 5px #939496;
`
const Logo = styled.div`

    img {
        margin: 10px 0 0 0;
        height: 200px;
        width: 200px;
        
        border: 1px solid #F8F9FA;
    }
`
const Title = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 20px 0 0 0;
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
        transition: 0.3s;
    }

    a:hover {
        color: #000;
        background: #F1F3F4;
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