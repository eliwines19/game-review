import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px
    }
`
const Subheader = styled.div`
    font-weight: 300
    font-size: 26px
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
`

const Games = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('/api/v1/games.json')
        .then( resp => {
            setGames(resp.data.data)
        } )
        .catch( resp => console.log(resp) )
    }, [games.length] )

    const gamesGrid = games.map( item => {
        return(
            <Game 
                key={item.attributes.title}
                attributes={item.attributes}
            />
        )
    })

    return (
        <Home>

            <Header>
                <h1>The Gamer Review</h1>
                <Subheader>Learn What Other Gamers Are Saying</Subheader>
            </Header>

            <Grid>
                {gamesGrid}
            </Grid>

        </Home>
    )
}

export default Games