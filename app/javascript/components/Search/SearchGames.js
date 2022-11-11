import React, { useState } from 'react'
import SearchBar from './SearchBar'

const SearchGames = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className="main">
            <SearchBar
                search={search}
                handleChange={handleChange}
            />
        </div>
    )
}

export default SearchGames