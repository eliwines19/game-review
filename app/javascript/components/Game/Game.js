import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div``
const Column = styled.div``
const Main = styled.div``


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
        <div className="wrapper" >
            <div className="column">
                <div className="main">
                    {
                        loaded &&
                        <Header
                            attributes={game.data.attributes}
                            reviews={game.included}
                        />
                    }
                    <div className="reviews"></div>
                </div>
            </div>
            <div className="column">
                <div className="review-form">review form here</div>
            </div>
        </div>
    )
}

export default Game