import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './Header'

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
                {
                    loaded &&
                    <Header attributes={game.data.attributes}/>
                }
                <div className="reviews"></div>
            </div>
            <div className="column">
                <div className="review-form">review form here</div>
            </div>
        </div>
    )
}

export default Game