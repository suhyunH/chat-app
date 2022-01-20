import React from 'react'
import { Route, Switch,useRouteMatch } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { RoomsProvider, useRooms } from '../../context/room.context'
import Chat from './Chat'

const Home=()=> {
    return (
        <RoomsProvider>
            <Sidebar/>
            <Switch>
                <Route exact path="/chat/:chatId">
                    <Chat />
                </Route>
            </Switch>
        </RoomsProvider>
    )
}

export default Home
