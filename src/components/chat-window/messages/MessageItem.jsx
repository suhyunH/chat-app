import React from 'react';
import TimeAgo from 'timeago-react';
import { useHover } from '../../../misc/custom-hooks';
import { auth } from '../../../misc/firebase';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';

const MessageItem = ({message}) => {
    const {author, createdAt, text}  = message;
    const[selfRef, isHover] =useHover();
    
    return <li style={{backgroundColor: `${isHover? '#fdfaf8' : ''}`}} ref={selfRef}>
        <div>
            <PresenceDot uid={author.uid}/>
            <ProfileAvatar src={author.avatar} name={author.name}/>
            <ProfileInfoBtnModal profile={author}/> 
            <TimeAgo datetime={createdAt}/>
        
        </div>
        <div>
            <span>{text}</span>
        </div>
    </li>;
};

export default MessageItem;
