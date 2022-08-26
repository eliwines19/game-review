import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Games from './Games/Games'
import Game from './Game/Game'

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Games />}/>
            <Route path="games/:slug" element={<Game />} />
        </Routes>
    )
}

export default App