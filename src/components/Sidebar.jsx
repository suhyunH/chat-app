import React from 'react'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'

const Sidebar=()=> {
    return (
        <>
         <div>
             <DashboardToggle/>
             <hr/>
             <CreateRoomBtnModal />
         </div>  
        </>
    )
}

export default Sidebar
