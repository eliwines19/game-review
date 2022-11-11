import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Games from './Games/Games'
import Game from './Game/Game'
import SearchGames from './Search/SearchGames'

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Games />}/>
            <Route path="games/:slug" element={<Game />} />
            <Route path="games/search" element={<SearchGames />}/>
        </Routes>
    )
}

export default App