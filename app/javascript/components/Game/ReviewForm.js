import React from 'react'
import styled from 'styled-components'
import Gray from './Stars/Gray'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'


const RatingContainer = styled.div`
    text-align: center;
    font-size: 18px;
    padding: 40px 0 10px 0;
    border: 1px solid #e6e6e6;
    background: #fff;
`
const RatingBox = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;
    margin-top: 12px;

    input {
        display: none;
    }

    label {
        cursor: pointer;
        width: 40px;
        height: 40px;
        background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 70%;
    }

    input:checked ~ label,
    input:checked ~ label ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
    }

    input:not(:checked) ~ label:hover,
    input:not(:checked) ~ label:hover ~ label {
        background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
    }

`
const Field = styled.div`
    border-radius: 10%;

    input {
        min-height: 40px;
        border: 1px solid #e6e6e6;
        margin: 0 0 12px 0;
        padding: 12px;
        width: 96%;
    }

    textarea {
        width: 96%;
        min-height: 80px;
        border: 1px solid #e6e6e6;
        margin: 12px 0;
        padding: 12px;
    }
`
const Wrapper = styled.div`
    padding: 20px;
    background: #000;
    height: 100vh;
    padding-top: 100px;
`
const SubmitBtn = styled.button`
    color: #fff;
    background: #528821;
    padding: 12px;
    font-size: 18px;
    cursor: pointer;
    transition: ease-in-out 0.1s;
    border: 1px solid #fff;
    width: 100%;
    margin-top: 20px; 

    &:hover {
        color: #000;
        background: #fff;
        border: 1px solid #528821;
    }
`
const Headline = styled.div`
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`
const RatingTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
`

const ReviewForm = (props) => {
    const ratingOptions = [5,4,3,2,1].map( (score, index) => {
        return (
            <>
                <input type="radio" value={score} checked={props.review.score == score} name="rating" key={score} onChange={() => console.log('selected:', score)} id={`rating-${score}`} />
                <label onClick={props.setRating.bind(this, score)} ></label>
            </>
        )
    })

    return (
        <Wrapper>
            <form onSubmit={props.handleSubmit}>
                <Headline>Have some thoughts about {props.attributes.title}? Share here!</Headline>
                <Field>
                    <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Great Game!"/>
                </Field>
                <Field>
                    <textarea onChange={props.handleChange} value={props.review.description} name="description" placeholder="What I learned in boating school is..."></textarea>
                </Field>
                <Field>
                    <RatingContainer>
                        <RatingTitle>Rate this Game</RatingTitle>
                        <RatingBox>
                            {ratingOptions}
                        </RatingBox>
                    </RatingContainer>
                </Field>
                <SubmitBtn type="submit">Submit your review</SubmitBtn>
            </form>
        </Wrapper>
    )
}

export default ReviewForm