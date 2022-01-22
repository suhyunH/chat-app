import React, { useState, useCallback } from 'react';
import { serverTimestamp, ref, push, update } from 'firebase/database';
import { useParams } from 'react-router';
 import { useProfile } from '../../../context/profile.context';
 import { database } from '../../../misc/firebase';
import AttachmentBtnModal from './AttachmentBtnModal';

function assembleMessage(profile, chatId){
  return{
    roomId: chatId,
    author:{
      name: profile.name,
      uid:profile.uid,
      createdAt: profile.createdAt,
      ...(profile.avatar? {avatar: profile.avatar}:{})
    },
    createdAt : serverTimestamp(),
  }
}


const Bottom=() =>{
  const [input, setInput]=useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {chatId} = useParams();
  const{profile} =useProfile();
  const onInputChange = (ev)=>{
   const {target:{value}}= ev; 
    setInput(value);
  };

  const onSendClick = async()=>{
    if(input.trim()===''){
      return;
    }

    const msgData = assembleMessage(profile, chatId);
    msgData.text = input;
    
    const updates ={};

    const messageId = push(ref(database, 'messages')).key;

     updates[`/messages/${messageId}`] = msgData;
     updates[`/rooms/${chatId}/lastMessage`] = {
      ...msgData,
      msgId: messageId,
    };
     setIsLoading(true);
     try{
       await update(ref(database), updates);
       setInput('');
       setIsLoading(false);
     }catch(err){
       setIsLoading(false);
       alert(err.messages);
     }
  }
  const onKeyDown=(ev)=>{
    if(ev.keyCode ===13){
      ev.preventDefault();
      onSendClick();
    }
  }


  return <div>
    <AttachmentBtnModal />
    <input placeholder='write a new message here ...' value={input} onChange={onInputChange} onKeyDown={onKeyDown}/>
    <input type="button" value="send" onClick={onSendClick} disabled={isLoading}/>
  </div>;
}

export default Bottom;

