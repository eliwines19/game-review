import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'

const Games = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        // get games from api
        // add games to games state

        axios.get('/api/v1/games.json')
        .then( resp => {
            setGames(resp.data.data)
        } )
        .catch( resp => console.log(resp) )
    }, [games.length] )

    const grid = games.map( item => {
        return(
            <Game 
                key={item.attributes.title}
                attributes={item.attributes}
            />
        )
    })

    return (
        <div className="home">

            <div className="header">
                <h1>Gamer Review</h1>
                <div className="subheader">Learn what other gamers think.</div>
            </div>

            <div className="grid">
                {grid}
            </div>

        </div>
    )
}

export default Games