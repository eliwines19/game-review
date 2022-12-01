import React from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'
import ReleaseDate from '../DataStyling/ReleaseDate'

const ResultsWrapper = styled.div`
    background-color: #F1F3F4;
    color: #000000;
    width: 100%;
    margin: 10px 0;
    display: flex;
`
const InfoWrapper = styled.div`
    padding: 10px;

    img {
        width: 200px;
        height: 200px;
    }
`
const Title = styled.div`
    margin: 15px 0;
    font-size: 35px;
    font-weight: bold;
`
const ReleaseDateStyling = styled.div`
    margin: 15px 0;
    font-size: 25px;
`
const RatingStyling = styled.div`
    margin: 15px 0;
    font-size: 25px;
    color: #CB2525;
    margin-bottom: 10px;
`
const LinkStyling = styled.div`
    margin: 20px 0 0 0;   

    a {
        text-decoration: none;
        padding: 10px 50px;
        background: #000;
        color: #fff;
        border-radius: 4px;
        transition: 0.3s;
        border: 1px solid #000;
    }

    a:hover {
        color: #000;
        background: #F1F3F4;
    }
`

const Results = (props) => {
    return (
        <ResultsWrapper>
            <InfoWrapper>
                <img src={props.attributes.image_url}/>
            </InfoWrapper>
            <InfoWrapper>
                <Title>{props.attributes.title}</Title>
                <ReleaseDateStyling><ReleaseDate date={props.attributes.release_date}/></ReleaseDateStyling>
                <RatingStyling><Rating score={props.attributes.avg_score}/></RatingStyling>
                <LinkStyling><Link to={`/games/${props.attributes.slug}`} >View Game</Link></LinkStyling>
            </InfoWrapper>
        </ResultsWrapper>
    )
}

export default Results