import React from 'react';
import { set, ref } from 'firebase/database';
import { database } from '../../../misc/firebase';
import { useParams } from 'react-router-dom';
import EditableInput from '../../EditableInput';
import { useCurrentRoom } from '../../../context/current-room.context';
import { RoomInfoModalSt } from './RoomIntro.styled';
import { useProfile } from '../../../context/profile.context';


const EditRoomModal = () => {
    const name = useCurrentRoom(v=>v.name);
    const description = useCurrentRoom(v=>v.description);
    const admins = useCurrentRoom(v=> v.admins);
    const {chatId} = useParams();
    
    

 const updatedata =(key, value)=>{
     set(ref(database, `rooms/${chatId}/${key}`), value)
     .then(()=>{
         alert("succefully updated");
     }).catch(err =>{
         alert("permission_denied");
     })
 }
    const onNameSave = (newName)=>{
        updatedata('name', newName);
     };
     const onDescriptionSave = (newDesc)=>{
        updatedata('description', newDesc);
     };
  return <RoomInfoModalSt>
      <h4>Room Name</h4>
              <EditableInput
              initialValue={name}
              onSave={onNameSave}
              placeholder={"Rewrite chat room's name..."}
              emptyMsg='Name can not be empty'
              />
              <h4>Description</h4>
              <EditableInput
              initialValue={description}
              onSave={onDescriptionSave}
              placeholder={"Rewrite chat room's description..."}
              emptyMsg='description can not be empty'
              />
  </RoomInfoModalSt>;
};

export default EditRoomModal;
