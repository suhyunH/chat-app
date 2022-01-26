import { set, ref } from 'firebase/database';
import React, { memo } from 'react';
import Modal from 'react-modal';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useModalState } from '../../../misc/custom-hooks';
import EditableInput from '../../EditableInput';
import { database } from '../../../misc/firebase';
import { useParams } from 'react-router-dom';
import { modalStyle } from '../../SidebarStyled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const EditRoomBtnDrawer = () => {
    const {isOpen, open, close}=useModalState();
    const {chatId} = useParams();
     const name = useCurrentRoom(v=>v.name);
     const description = useCurrentRoom(v=>v.description);
  
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
  return <div>
      <button onClick={open} style={{border:'none', backgroundColor:'white', fontSize:"15px", marginTop:"10px"}}><FontAwesomeIcon icon={faInfoCircle}/></button>
      <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
        <button onClick={close} style={{border:'none',backgroundColor: 'white', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes}/></button>    
          <div>
              <h4>Room Edit</h4>
          </div>
          <div>
              <EditableInput
              initialValue={name}
              onSave={onNameSave}
              label={<h4>Name</h4>}
              emptyMsg='Name can not be empty'
              />
              <EditableInput
              initialValue={description}
              onSave={onDescriptionSave}
              label={<h4>description</h4>}
              emptyMsg='description can not be empty'
              />
          </div>
      </Modal>
  </div>;
};

export default memo(EditRoomBtnDrawer);
