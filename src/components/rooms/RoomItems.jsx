import React,{useState} from 'react';
import TimeAgo from 'timeago-react';
import ProfileAvatar from '../ProfileAvatar';
import { RoomItemSt } from '../SidebarStyled';


const RoomItems = ({ room })=> {
    const { createdAt, name,lastMessage } = room;
    const [isActive, setIsActvie]=useState(false);

    const onToggle =(ev)=>{
        setIsActvie(!isActive);
    }

 return <RoomItemSt>

        <div className="roomIntro">
           <h3>{name}</h3>
           <p>
           <TimeAgo className="roomListTime"
           datetime={lastMessage? new Date(lastMessage.createdAt) :new Date(createdAt)}/>
           </p>
        
        </div>
        <div className='roomList'>
            {
                lastMessage?
                <div className="roomListContent">
                    <div className="roomListProfile">
                        <ProfileAvatar  src={lastMessage.author.avatar} name={lastMessage.author.name} />
                    </div>
                    <div className="roomListText">
                        <div>{lastMessage.author.name}</div>
                        <span style={{fontWeight:'100', fontSize:'12px', fontStyle:'oblique'}}>{lastMessage.text || lastMessage.file.name}</span>
                    </div>
                </div>:
            <span style={{fontWeight:'100', fontSize:'15px', fontStyle:'oblique'}}>No message yet...</span>
            }
        </div>
  </RoomItemSt>;
}

export default RoomItems;



