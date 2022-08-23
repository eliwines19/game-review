import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Games = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        // get games from api
        // add games to games state

        axios.get('/api/v1/games.json')
        .then( resp => console.log(resp) )
        .catch( resp => console.log(resp) )
    }, [games.length] )

    return (
        <div>This is the Games#index view for our app</div>
    )
}

export default Games