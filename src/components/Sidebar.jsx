import React from 'react'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList'
import { SidebarSt } from './SidebarStyled'

const Sidebar=()=> {
    return (
        <SidebarSt>
                <DashboardToggle className="dashBtn"/>

                <CreateRoomBtnModal />

                <ChatRoomList />
        </SidebarSt>
    )
}

export default Sidebar
