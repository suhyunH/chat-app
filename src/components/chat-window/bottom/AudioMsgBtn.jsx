import React, { useState, useCallback } from 'react';
import { ReactMic } from 'react-mic';
import { useParams } from 'react-router';
import { storage } from '../../../misc/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import { faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import { AudioSt } from './chatBottom.styled';


const AudioMsgBtn = ({afterUpload}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
   const {chatId} =useParams();
    const onClick = useCallback(() => {
        setIsRecording(p => !p);
      }, []);
  
      const onUpload = useCallback(
        async data => {
          setIsUploading(true);
          try {
            const snap = await uploadBytes(
              ref(storage, `/chat/${chatId}/audio_${Date.now()}.mp3`),
              data.blob,
         {
           cacheControl: `public, max-age=${3600 * 24 * 3}`,
         }
            );
    
            const file = {
              contentType: snap.metadata.contentType,
              name: snap.metadata.name,
              url: await getDownloadURL(snap.ref),
            };
    
            setIsUploading(false);
            afterUpload([file]);
          } catch (error) {
            setIsUploading(false);
            alert(error.message);
          }
        },
        [afterUpload, chatId]
      );
  return <AudioSt>
      <button onClick={onClick}  disabled={isUploading}>
       {isRecording? <FontAwesomeIcon icon={faMicrophoneSlash}/> : <FontAwesomeIcon icon={faMicrophone}/>}
      </button>
      <ReactMic
            record={isRecording}
            onStop={onUpload}
            mimeType="audio/mp3"
            className='mic'
      />
  </AudioSt>;
};

export default AudioMsgBtn;
 