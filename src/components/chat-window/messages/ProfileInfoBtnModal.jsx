import React from 'react';
import { useModalState } from '../../../misc/custom-hooks';
import Modal from 'react-modal';
import { modalStyle } from '../../SidebarStyled';
import ProfileInfoModal from './ProfileInfoModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const ProfileInfoBtnModal = ({profile}) => {
    
    const{isOpen, close, open} = useModalState();
    const {name, avatar, createdAt} = profile;
 
  return <>

      <button onClick={open} style={{fontWeight: 'bold'}}>
          {name}
      </button>
       <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
   
       <button onClick={close} style={{border:'none',backgroundColor: 'white', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes}/></button>
              <ProfileInfoModal profile={profile}/>


      </Modal>
  </>;
};

export default ProfileInfoBtnModal;
