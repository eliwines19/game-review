import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import Review from './Review'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
        background: #000;
    }
`
const Main = styled.div`
    padding-left: 50pt;
`
const ReviewTitle = styled.h3`
    margin: 0 0 10pt 0;
    font-size: 20pt;
`


const Game = () => {
    const [game, setGame] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    const params = useParams()

    useEffect(() => {
        const slug = params.slug
        const url = `/api/v1/games/${slug}.json`

        axios.get(url)
        .then((resp) => {
            setGame(resp.data) 
            setLoaded(true)
        })
        .catch(resp => console.log(resp))

    }, [])

    const handleChange = (e) => {
        e.preventDefault()

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const game_id = game.data.id
        axios.post('/api/v1/reviews.json', {review, game_id})
        .then(resp => {
            const included = [...game.included, resp.data.data]
            setGame({...game, included})
            setReview({title: '', description: '', score: 0})
        })
        .catch(resp => { console.log(resp) })
    }

    const setRating = (score, e) => {
        e.preventDefault()

        setReview({...review, score})
    }

    let reviews;
    if (loaded && game.included) {
        reviews = game.included.map( (item, index) => {
            return (
                <>
                    <Review
                        key={index}
                        attributes={item.attributes}  
                    />
                </>
            )
        })
    }

    return (
        <Wrapper>
            {
                loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            <Header
                                attributes={game.data.attributes}
                                reviews={game.included}
                            />
                            <ReviewTitle>Reviews</ReviewTitle>
                            {reviews}
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            setRating={setRating}
                            attributes={game.data.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
            }
        </Wrapper>
    )
}

export default Game