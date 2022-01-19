import React from 'react';
import RoomItems from './RoomItems';

const ChatRoomList =({aboveEl})=> {
  return <nav style={{height:`calc(100%-${aboveEl}px)`}}>
      
          <RoomItems />
      
  </nav>
}

export default ChatRoomList;

