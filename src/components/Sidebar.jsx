import React from 'react'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList'
import { SidebarSt } from './SidebarStyled'

const Sidebar=()=> {
    return (
        <SidebarSt>
            <div>
                <DashboardToggle className="dashBtn"/>
            </div>
            <div>
                <CreateRoomBtnModal />
            </div>  
            <div>
                <ChatRoomList />
         </div>
        </SidebarSt>
    )
}

export default Sidebar
