import React,{useEffect, useState, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import { database, storage } from '../../../misc/firebase';
import {
  ref as dbRef,
  off,
  onValue,
  query,
  orderByChild,
  equalTo,
  update,
} from 'firebase/database';
import { deleteObject, ref, ref as storageRef } from 'firebase/storage';
import { groupBy, transformToArryWithId } from '../../../misc/helpers';
import MessageItem from './MessageItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons';
import { MessageContainerSt } from './Message.styled';

const Messages=()=> {
  const {chatId} = useParams();
  const [messages, setMessages] = useState("");
  const isChatEmpty = messages && messages.length === 0; 
  const canShowMessage = messages && messages.length > 0;

  useEffect(()=>{
    const messageRef = dbRef(database, '/messages');
    onValue(
      query(
        messageRef,
        orderByChild('roomId'),
        equalTo(chatId),
      ),
      snap => {
        const data = transformToArryWithId(snap.val());
        setMessages(data);
      })
    
      return ()=>{
        off(messageRef);
      }
    },[])

    const  handleDelete = useCallback(async(msgId, file)=>{
      if(!window.confirm('Delete This Message?')){
          return;
      }
      const isLast = messages[messages.length -1].id === msgId; 
      const updates = {};

      updates[`/messages/${msgId}`]=null;
      
      if(isLast && messages.length > 1){
        updates[`/rooms/${chatId}/lastMessage`]={
        ...messages[messages.length -2],
        msgId: messages[messages.length -2].id,
      };}

      if(isLast&&messages.length===1){
        updates[`/rooms/${chatId}/lastMessage`]= null;
      }
      try{
        await update(dbRef(database), updates);
      }catch(err){
        return alert(err.messages);
      }
      if(file){
        try{
          const fileRef = storageRef(storage, file.url);
          await deleteObject(fileRef);
        }catch(err){
          alert(err.message);
        }
      }
    },[messages])
 
    const renderMessage = ()=>{
      const groups = groupBy(messages, item =>
        new Date(item.createdAt).toDateString()
      );
      const items = [];
      Object.keys(groups).forEach(date => {
        items.push(
          <li key={date} className='dateLine'>
            {date}
          </li>
        );

        const msgs = groups[date].map(msg => (
          <MessageItem
            key={msg.id}
            message={msg}
            handleDelete={handleDelete}
          />
        ));
        items.push(...msgs);
      });
      return items;
    };


 return <MessageContainerSt>
   <ul className='ulContainer'>
    {isChatEmpty &&<li style={{listStyle:'none'}}>
      <FontAwesomeIcon icon={faCommentSlash} /><span> No messages yet...</span>
      </li>
      }
    {canShowMessage && renderMessage()}
  </ul>
 </MessageContainerSt>
}

export default Messages;
