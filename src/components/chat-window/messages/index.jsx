import React,{useEffect, useState, useCallback, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { database } from '../../../misc/firebase';
import {
  ref as dbRef,
  runTransaction,
  off,
  onValue,
  query,
  orderByChild,
  limitToLast,
  equalTo,
  update,
} from 'firebase/database';
import { deleteObject, ref as storageRef } from 'firebase/storage';
import { transformToArryWithId } from '../../../misc/helpers';
import MessageItem from './MessageItem';

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

    const  handleDelete = useCallback(async(msgId)=>{
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
    },[messages])
 
 return <ul>
    {isChatEmpty &&<li>No message yet</li>}
    {canShowMessage && messages.map(msg =><MessageItem key={msg.id}  message={msg} handleDelete={handleDelete}/>)}
  </ul>;
}

export default Messages;
