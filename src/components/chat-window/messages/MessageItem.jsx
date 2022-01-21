import React from 'react';
import TimeAgo from 'timeago-react';
import { auth } from '../../../misc/firebase';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';

const MessageItem = ({message}) => {
    const {author, createdAt, text}  = message;
  
    
    return <li>
        <div>
            <PresenceDot uid={author.uid}/>
            <ProfileAvatar src={author.avatar} name={author.name}/>
            <span>{author.name}</span>
            <ProfileInfoBtnModal profile={author}/> 
            <TimeAgo datetime={createdAt}/>
        
        </div>
        <div>
            <span>{text}</span>
        </div>
    </li>;
};

export default MessageItem;
