import React from 'react';
import TimeAgo from 'timeago-react';
import ProfileAvatar from '../ProfileAvatar';


const RoomItems = ({ room })=> {
    const { createdAt, name,lastMessage } = room;

 return <div>

        <div>
           <h3>{name}</h3>
           <TimeAgo 
           datetime={lastMessage? new Date(lastMessage.createdAt) :new Date(createdAt)}/>
        </div>
        <div>
            {
                lastMessage?
                <>
                <div>
                    <ProfileAvatar src={lastMessage.author.avatar} name={lastMessage.author.name} />
                </div>
                <div>
                    <div>{lastMessage.author.name}</div>
                    <span>{lastMessage.text || lastMessage.file.name}</span>
                    
                </div>
                </>:
            <span>No message yet...</span>
            }
        </div>

  </div>;
}

export default RoomItems;



