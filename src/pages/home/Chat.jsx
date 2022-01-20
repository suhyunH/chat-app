import React from 'react';
import { useParams } from 'react-router-dom';
import { Profiler } from 'react/cjs/react.production.min';
import ChatBottom from '../../components/chat-window/bottom';
import Messages from '../../components/chat-window/messages';
import ChatTop from '../../components/chat-window/top';
import { useRooms } from '../../context/room.context';

const Chat=()=> {
  const {chatId} = useParams();
  const rooms = useRooms();
  if(!rooms){
    return "Loading...";
  }

 const currentRoom = rooms.find(room=>room.id ===chatId);
 if(!currentRoom){
   return <h6>Chat {chatId} not found</h6>
 }


  return <div>
    <div>
      <ChatTop />
    </div>
    <div>
      <Messages />
    </div>
    <div>
      <ChatBottom />
    </div>
  </div>;
}

export default Chat;
