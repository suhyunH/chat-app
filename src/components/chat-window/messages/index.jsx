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
 
 return <ul>
    {isChatEmpty &&<li>No message yet</li>}
    {canShowMessage && messages.map(msg =><MessageItem key={msg.id}  message={msg}/>)}
  </ul>;
}

export default Messages;
