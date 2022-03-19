import React from 'react';
import { useParams } from 'react-router-dom';
import ChatBottom from '../../components/chat-window/bottom';
import Messages from '../../components/chat-window/messages';
import ChatTop from '../../components/chat-window/top';
import { ChatSt } from '../../components/SidebarStyled';
import { CurrentRoomProvider } from '../../context/current-room.context';
import { useRooms } from '../../context/room.context';
import { auth } from '../../misc/firebase';
import { transformToArr } from '../../misc/helpers';


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
const admins = transformToArr(currentRoom.admins);  
const isAdmin = admins.includes(auth.currentUser.uid);
const currentRoomData ={
  name, description, admins, isAdmin
};

  return <CurrentRoomProvider data={currentRoomData}>

<ChatSt>
      <ChatTop />
      <Messages />
      <ChatBottom />
</ChatSt>
  </CurrentRoomProvider>;
}

export default Chat;
