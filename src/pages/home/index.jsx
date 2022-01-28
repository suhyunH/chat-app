import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import { HomeSt } from '../../components/SidebarStyled'
import { RoomsProvider } from '../../context/room.context'
import Chat from './Chat'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const Home=()=> {
    return (
        <HomeSt>

        <RoomsProvider>
            <Sidebar />
             <Switch>
                <Route exact path="/chat/:chatId">
                    <Chat />
                </Route>
                <Route>
                <FontAwesomeIcon icon={faComments} style={{fontSize:'150px', opacity:'0.5', margin:'auto', width:'59.5%'}}/>
                </Route>
            </Switch> 
        </RoomsProvider>
        </HomeSt>
    )
}

export default Home
