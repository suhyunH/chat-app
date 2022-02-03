import React, { useState, useCallback } from 'react';
import { serverTimestamp, ref, push, update } from 'firebase/database';
import { useParams } from 'react-router';
 import { useProfile } from '../../../context/profile.context';
 import { database } from '../../../misc/firebase';
import AttachmentBtnModal from './AttachmentBtnModal';
import { ChatBottomSt } from './chatBottom.styled';

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
       alert(err.message);
     }
  }
  const onKeyDown=(ev)=>{
    if(ev.keyCode ===13){
      ev.preventDefault();
      onSendClick();
    }
  }

  const afterUpload = useCallback(
    async resultFile => {
      setIsLoading(true);
      const updates = {};
      console.log(resultFile);

      resultFile.forEach(file => {
         const msgData = assembleMessage(profile, chatId);
         console.log("ms", msgData);
         msgData.file = file;

         const messageId = push(ref(database, 'messages')).key;

         updates[`/messages/${messageId}`] = msgData;
       });
      const lastMsgId = Object.keys(updates).pop();
      updates[`/rooms/${chatId}/lastMessage`] = {
        ...updates[lastMsgId],
        msgId: lastMsgId,
       };
       

       try {
         await update(ref(database), updates);
         setIsLoading(false);
       } catch (err) {
         setIsLoading(false);
       alert(err.message);
      }
    },
    [profile]
  );
  


  return<ChatBottomSt> 
      <div className='bottomInputs' style={{clear:'both'}}>
        <AttachmentBtnModal  afterUpload={afterUpload}/>
        <input className='textInput' placeholder='write a new message here ...' value={input} onChange={onInputChange} onKeyDown={onKeyDown}/>
        <input className='inputBtn' type="button" value="send" onClick={onSendClick} disabled={isLoading}/>
      </div>
  </ChatBottomSt>
}

export default Bottom;

