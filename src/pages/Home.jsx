import React from 'react'
import Sidebar from '../components/Sidebar'
import { RoomsProvider } from '../context/room.context'

const Home=()=> {
    return (
        <RoomsProvider>
            <div>
                <Sidebar/>
            </div>
        </RoomsProvider>
    )
}

export default Home
