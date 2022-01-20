import React from 'react';
import TimeAgo from 'timeago-react';
import { auth } from '../../../misc/firebase';
import ProfileAvatar from '../../ProfileAvatar';

const MessageItem = ({message}) => {
    const {author, createdAt, text}  = message;
  
    
    return <li>
        <div>
            <ProfileAvatar src={author.avatar} name={author.name}/>
            <span>{author.name}</span>
            <TimeAgo datetime={createdAt}/>
        
        </div>
        <div>
            <span>{text}</span>
        </div>
    </li>;
};

export default MessageItem;
