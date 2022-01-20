import React from 'react'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList'

const Sidebar=()=> {
    return (
        <>
         <div>
             <DashboardToggle/>
             <hr/>
             <CreateRoomBtnModal />
             <h5>join conversation</h5>
         </div>  
         <div>
             <ChatRoomList />
         </div>
        </>
    )
}

export default Sidebar
