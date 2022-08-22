import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Games from './Games/Games'
import Game from './Game/Game'

const App = () => {
    return(
        <Switch>
            <Route path="/games" component={Games}/>
            <Route path="/games/:slug" component={Game}/>
        </Switch>
    )
}

export default App