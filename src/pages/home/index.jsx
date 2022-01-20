import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { RoomsProvider } from '../../context/room.context'
import Chat from './Chat'

const Home=()=> {
    return (
        <RoomsProvider>
            <Sidebar />
             <Switch>
                <Route exact path="/chat/:chatId">
                    <Chat />
                </Route>
                <Route>
                    <h6>Select chat</h6>
                </Route>
            </Switch> 
        </RoomsProvider>
    )
}

export default Home
