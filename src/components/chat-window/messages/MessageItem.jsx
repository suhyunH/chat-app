import React from 'react';
import TimeAgo from 'timeago-react';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useHover } from '../../../misc/custom-hooks';
import { auth } from '../../../misc/firebase';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';
import ImageModal from './ImageModal';


const renderFileMessage =(file)=>{
    if (file.contentType.includes('image')) {
        return (
          <div>
            <ImageModal src={file.url} fileName={file.name} />
          </div>
        );
      }
    if (file.contentType.includes('audio')) {
        return (
<audio controls>
        <source src={file.url} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
        );
      }
    

    return <a href={file.url}>Download {file.name}</a>
}

const MessageItem = ({message,  handleDelete}) => {
    const {author, createdAt, text, file}  = message;
    const[selfRef, isHover] =useHover();

    const isAdmin = useCurrentRoom(v=>v.isAdmin);
    const admins = useCurrentRoom(v=>v.admins);

    const isMsgAuthorAdmin = admins.includes(author.uid);
    const isAuthor = auth.currentUser.uid ===author.uid;

    
    return <li style={{backgroundColor: `${isHover? '#fdfaf8' : ''}`}} ref={selfRef}>
        <div>
            <PresenceDot uid={author.uid}/>
            <ProfileAvatar src={author.avatar} name={author.name}/>
            <ProfileInfoBtnModal profile={author}/> 
            <TimeAgo datetime={createdAt}/>
        
        </div>
        <div>
            {text &&<span>{text}</span>}
            {file && renderFileMessage(file) }
        </div>
        {isAuthor&& 
        <button onClick={()=>handleDelete(message.id, file)}>x</button>
        }
    </li>;
};

export default MessageItem;
