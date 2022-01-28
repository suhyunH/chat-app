import React from 'react';
import TimeAgo from 'timeago-react';
import { useCurrentRoom } from '../../../context/current-room.context';
import { auth } from '../../../misc/firebase';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';
import ImageModal from './ImageModal';
import { MessageItemSt } from './Message.styled';


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

    const isAdmin = useCurrentRoom(v=>v.isAdmin);
    const admins = useCurrentRoom(v=>v.admins);

    const isMsgAuthorAdmin = admins.includes(author.uid);
    const isAuthor = auth.currentUser.uid ===author.uid;

    
    return <MessageItemSt>

 
      {!isAuthor && 
      <li>
        <div className='msgIntro'>
            <PresenceDot uid={author.uid}/>
            <ProfileAvatar src={author.avatar} name={author.name}/>
        </div>
        <div className='msgMain'>
            <ProfileInfoBtnModal  className="modalBtnName" profile={author}/> 
          <div className='msgText'>
              {text &&<span>{text}</span>}
              {file && renderFileMessage(file) }
          </div>
              <TimeAgo datetime={createdAt} className='timeAgo'/>
        </div>
     </li>}
     {isAuthor &&
      <li className='li_ad'>
          <div className='msgMain_ad'>
              <ProfileInfoBtnModal  className="modalBtnName" profile={author}/> 
            <div className='msgText_Ad'>
                {isAuthor&& 
                        <button className='deleteMsgBtn' onClick={()=>handleDelete(message.id, file)}>x</button>
                  } 
                {text &&<span>{text}</span>}
                {file && renderFileMessage(file) }
            </div>
                <TimeAgo datetime={createdAt} className='timeAgo'/>
          </div>
          <div className='msgIntro'>
              <ProfileAvatar src={author.avatar} name={author.name}/>
              <PresenceDot uid={author.uid}/>
          </div>
         </li>
         }
    

      </MessageItemSt>
};

export default MessageItem;
