import { faAlignCenter } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'
import ReleaseDate from '../DataStyling/ReleaseDate'

const Wrapper = styled.div`
    padding: 50px 100px 20px 0;
`
const Card = styled.div`

    text-align: center;

    img {
        width: 100%;
        heigth: 100%;
    }

    h1 {
        text-align: center;
        margin: 0 auto;
    }

    p {
        text-align: left;
        margin-top: 0;
        margin-bottom: 0;
        padding: 5px;
        border: solid 1px #000;
    }

`
const NoReviews = styled.h3`
    text-align: center;
`

const Header = (props) => {
    const { avg_score, description, image_url, title, release_date } = props.attributes
    const total = props.reviews.length

    const noReviews = () => {
        if (total == 0) {
            return <NoReviews>No Reviews Yet</NoReviews>
        }
    }

    const noStarsYet = () => {
        if (avg_score) {
            return (<Rating score={avg_score}/>)
        }
    }

    return (
        <Wrapper>
            <Card>
                <h1>{title}</h1>
                <ReleaseDate date={release_date}/>
                {noStarsYet()}
                <img src={image_url} alt={title}/>
                <p>{description}</p>
            </Card>
            {noReviews()}
        </Wrapper>
    )
}

export default Header