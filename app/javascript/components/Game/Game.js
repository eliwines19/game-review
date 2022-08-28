import React, { useState, useEffect, Fragment } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
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
        color: white;
    }
`
const Main = styled.div`
    padding-left: 50pt;
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

        console.log('name: ', e.target.name, 'value: ', e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
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