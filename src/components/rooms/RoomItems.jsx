import React from 'react';
import TimeAgo from 'timeago-react';
import ProfileAvatar from '../ProfileAvatar';
import { RoomItemSt } from '../SidebarStyled';


const RoomItems = ({ room })=> {
    const { createdAt, name,lastMessage } = room;

 return <RoomItemSt>

        <div className='roomIntro'>
           <h3>{name}</h3>
           <p>
           <TimeAgo className="roomListTime"
           datetime={lastMessage? new Date(lastMessage.createdAt) :new Date(createdAt)}/>
           </p>
        
        </div>
        <div>
            {
                lastMessage?
                <div className="roomListContent">
                    <div className="roomListProfile">
                        <ProfileAvatar  src={lastMessage.author.avatar} name={lastMessage.author.name} />
                    </div>
                    <div className="roomListText">
                        <div>{lastMessage.author.name}</div>
                        <span>{lastMessage.text || lastMessage.file.name}</span>
                    </div>
                </div>:
            <p>No message yet...</p>
            }
        </div>

  </RoomItemSt>;
}

export default RoomItems;



