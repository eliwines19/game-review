import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'
import styled from 'styled-components'
import Loading from '../animations/Loading'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    color: #F1F3F4;
    font-family: Silkscreen, serif;
    padding: 50px 100px 10px 100px;

    h1 {
        font-size: 42px
    }
`
const Subheader = styled.div`
    font-weight: 300
    font-size: 26px
`
const Grid = styled.div`
    font-family: 'Roboto Mono', serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
`
const Title = styled.h1``

const Games = () => {
    const [games, setGames] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('/api/v1/games.json')
        .then( resp => {
            setLoaded(true)
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

    const showHome = () => {
        if (loaded) {
            return (
                <Home>

                    <Header>
                        <Title>The Gamer Review</Title>
                        <Subheader>Learn What Other Gamers Are Saying</Subheader>
                    </Header>
        
                    <Grid>
                        {gamesGrid}
                    </Grid>
        
                </Home>
            )
        } else {
            return <Loading />
        }
    }

    return (
        <>
            {showHome()}
        </>
    )
}

export default Games