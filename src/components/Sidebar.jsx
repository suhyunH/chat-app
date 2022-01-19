import React,{useEffect, useRef, useState} from 'react'
import CreateRoomBtnModal from './CreateRoomBtnModal'
import DashboardToggle from './dashboard/DashboardToggle'
import ChatRoomList from './rooms/ChatRoomList'

const Sidebar=()=> {
    const topSidebarRef = useRef();
    const [height, setHeight] =useState(0);
    useEffect(()=>{
        if(topSidebarRef.current){
            setHeight(topSidebarRef.current.scrollHeight);
        }
    },[topSidebarRef])

    return (
        <>
         <div>
             <DashboardToggle/>
             <hr/>
             <CreateRoomBtnModal />
             <h5>join conversation</h5>
         </div>
         <ChatRoomList aboveEl={height}/>  
        </>
    )
}

export default Sidebar
