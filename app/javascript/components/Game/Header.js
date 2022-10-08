import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 50px 100px 20px 0;
`
const Card = styled.div`

    img {
        width: 100%;
        heigth: 100%;
    }

    h1 {
        text-align: center;
        margin: 0 auto;
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        padding: 5px;
        border: solid 1px #000;
    }

`
const TotalReviews = styled.div`
    font-size: 18px;
`
const TotalOutOf = styled.div`
    font-size: 18px;
    font-weight: bold;
`

const Header = (props) => {
    const { avg_score, description, image_url, title } = props.attributes
    const total = props.reviews.length

    const displayReviews = () => {
        if (total == 0) {
            return <div>No Reviews Yet</div>
        } else if (total > 1) {
            return (
                <div>
                    <TotalReviews>{total} reviews</TotalReviews>
                    <TotalOutOf>{avg_score} out of 5</TotalOutOf>
                </div>
            )   
        } else {
            return (
                <div>
                    <TotalReviews>{total} review</TotalReviews>
                    <TotalOutOf>{avg_score} out of 5</TotalOutOf>
                </div>
            )
        }
    }

    return (
        <Wrapper>
            <Card>
                <h1>{title}</h1>
                <img src={image_url} alt={title}/>
                <p>{description}</p>
            </Card>
            <div>
                {displayReviews()}
            </div>
        </Wrapper>
    )
}

export default Header