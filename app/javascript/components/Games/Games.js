import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'
import styled from 'styled-components'
import Loading from '../animations/Loading'
import SortingButtons from './SortingButtons'
import Navbar from './Navbar'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    color: #F1F3F4;
    font-family: Silkscreen, serif;
    padding: 25px 100px 10px 100px;

    h1 {
        font-size: 42px
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    font-family: 'Roboto Mono', serif;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
`
const Title = styled.div`
    margin: 30px 0;
    font-size: 80px;
`

const Games = () => {
    const [games, setGames] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [sort, setSort] = useState("")
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoaded(false)
        axios.get('/api/v1/games.json', { params: { sort: sort, search: search } })
        .then( resp => {
            setLoaded(true)
            setGames(resp.data.data)
        } )
        .catch( resp => console.log(resp) )
    }, [games.length, sort.length, search.length])


    const gamesGrid = games.map( item => {
        return(
            <Game 
                key={item.attributes.title}
                attributes={item.attributes}
            />
        )
    })

    const handleClick = (e) => {
        e.preventDefault()
        setSort(`${e.target.id}`)
    }

    const showHome = () => {
        if (loaded) {
            return (
                <Home>

                    <Navbar />

                    <Header>
                        <Title>The Gamer Review</Title>
                        <Subheader>Learn What Other Gamers Have To Say</Subheader>
                    </Header>

                    <SortingButtons handleClick={handleClick} />
        
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