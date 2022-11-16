import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SearchBar from './SearchBar'
import BackButton from '../AppComponents/BackButton'

const Main = styled.div`
    max-width: 1200px;
    margin: 50px auto 0 auto;
`

const SearchGames = () => {

    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        axios.get('/api/v1/games.json', { params: { search: search } })
        .then(resp => {
            console.log(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [search.length])

    return (
        <Main>
            <BackButton/>

            <SearchBar
                search={search}
                handleChange={handleChange}
            />

            {search}
        </Main>
    )
}

export default SearchGames