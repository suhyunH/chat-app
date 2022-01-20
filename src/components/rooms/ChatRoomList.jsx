import React from 'react';
import { useRooms } from '../../context/room.context';
import RoomItems from './RoomItems';
import { Route, Link, Switch,useLocation } from "react-router-dom";

const ChatRoomList =()=> {

const rooms = useRooms();
const location = useLocation();
return <>  
           {rooms? 
               rooms.map(room => 
                <Link to={`/chat/${room.id}`} key={room.id}>
                    <div>
                        <RoomItems room={room}/>
                    </div>
                </Link>   
                    ) 
            : <h1>Loading...</h1>
            
            
            }
            
  </>
}

export default ChatRoomList;

