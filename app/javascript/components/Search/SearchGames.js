import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SearchBar from './SearchBar'
import BackButton from '../AppComponents/BackButton'
import Results from './Results'

const Main = styled.div`
    max-width: 1200px;
    margin: 50px auto 0 auto;
`
const ResultsWrapper = styled.div`
    margin: 40px 0 0 0;
`

const SearchGames = () => {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        axios.get('/api/v1/games.json', { params: { search: search } })
        .then(resp => {
            setResults(resp.data.data)
        })
        .catch(resp => console.log(resp))
    }, [search.length])

    const showResults = results.map(item => {
        return (
            <Results 
                key={item.id}
                attributes={item.attributes}
            />
        )
    })

    return (
        <Main>
            <BackButton/>

            <SearchBar
                search={search}
                handleChange={handleChange}
            />

            <ResultsWrapper>
                {showResults}
            </ResultsWrapper>
        </Main>
    )
}

export default SearchGames