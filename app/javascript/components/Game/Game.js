import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'

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
    left-padding: 50px;
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

    return (
        <Wrapper>
            <Column>
                <Main>
                    {
                        loaded &&
                        <Header
                            attributes={game.data.attributes}
                            reviews={game.included}
                        />
                    }
                    <div className="reviews"></div>
                </Main>
            </Column>
            <Column>
                <div className="review-form">review form here</div>
            </Column>
        </Wrapper>
    )
}

export default Game