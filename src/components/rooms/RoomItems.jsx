import React from 'react';
import TimeAgo from 'timeago-react';

const RoomItems = ()=> {
  return <div>
      <div>
        <h3>Room Name</h3>
        <TimeAgo datetime={new Date()}/>
      </div>
    <div>
        <span>No message yet...</span>
    </div>

  </div>;
}

export default RoomItems;



