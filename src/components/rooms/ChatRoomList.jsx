import React from 'react';
import { useRooms } from '../../context/room.context';
import RoomItems from './RoomItems';
import { NavLink } from "react-router-dom";
import { ChatRoomListSt } from '../SidebarStyled';
const ChatRoomList =()=> {
const rooms = useRooms();

return <ChatRoomListSt>  
           <h5><span>Chat Room List  ✉️</span></h5>
           <div className='chatContainer'>
           {rooms? 
               rooms.map(room => 
                <NavLink exact to={`/chat/${room.id}`} key={room.id} style={{textDecoration:'none' }} activeClassName='active'>
                    <div style={{marginLeft: '10px'}} className='chat'>
                        <RoomItems room={room}/>
                    </div>
                </NavLink>   
                    ) 
            : "..."
            }
            </div>
            
  </ChatRoomListSt>
}

export default ChatRoomList;

