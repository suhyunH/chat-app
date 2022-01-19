import React from 'react';
import TimeAgo from 'timeago-react';


const RoomItems = ({ room })=> {
    const { createdAt, name} = room;

 return <div>

        <div>
           <h3>{name}</h3>
           <TimeAgo datetime={new Date(createdAt)}/>
        </div>
        <div>
            <span>No message yet...</span>
        </div>

  </div>;
}

export default RoomItems;



