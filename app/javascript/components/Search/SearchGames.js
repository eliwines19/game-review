import React, { useState } from 'react'
import SearchBar from './SearchBar'
import BackButton from '../AppComponents/BackButton'
import styled from 'styled-components'

const Main = styled.div`
    max-width: 1200px;
    margin: 50px auto 0 auto;
`

const SearchGames = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    // now i need to take the search state and use send request to Games/index with search params
    // and grab the results

    return (
        <Main>
            <BackButton/>

            <SearchBar
                search={search}
                handleChange={handleChange}
            />
        </Main>
    )
}

export default SearchGames