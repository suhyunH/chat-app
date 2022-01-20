import React from 'react';
import { useParams } from 'react-router-dom';
import ChatBottom from '../../components/chat-window/bottom';
import Messages from '../../components/chat-window/messages';
import ChatTop from '../../components/chat-window/top';
import ChatRoomList from '../../components/rooms/ChatRoomList';
import { CurrentRoomProvider } from '../../context/current-room.context';
import { useRooms } from '../../context/room.context';

const Chat=()=> {
  const {chatId} = useParams();
  const rooms = useRooms();
  if(!rooms){
    return "Loading..";
  }

 const currentRoom = rooms.find(room=>room.id ===chatId);
 if(!currentRoom){
   return <h6>Chat {chatId} not found</h6>
 }
const{name, description} = currentRoom;
const currentRoomData ={
  name, description
};

  return <CurrentRoomProvider data={currentRoomData}>

    <div>
      <ChatTop />
    </div>
    <div>
      <Messages />
    </div>
    <div>
      <ChatBottom />
    </div>
  </CurrentRoomProvider>;
}

export default Chat;
