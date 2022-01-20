import React from 'react';
import { useRooms } from '../../context/room.context';
import RoomItems from './RoomItems';
import { Link } from "react-router-dom";

const ChatRoomList =()=> {

const rooms = useRooms();

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

