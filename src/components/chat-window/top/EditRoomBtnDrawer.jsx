import React, { memo } from 'react';
import Modal from 'react-modal';
import { useModalState } from '../../../misc/custom-hooks';

import { modalStyle } from '../../SidebarStyled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import EditRoomModal from './EditRoomModal';

const EditRoomBtnDrawer = () => {
    const {isOpen, open, close}=useModalState();
  
 
  return <>
      <button onClick={open} style={{border:'none', backgroundColor:'white', fontSize:"15px", marginTop:"10px"}}><FontAwesomeIcon icon={faInfoCircle}/></button>
      <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
        <button onClick={close} style={{border:'none',backgroundColor: 'white', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes}/></button>  
        <EditRoomModal />
      </Modal>
  </>;
};

export default memo(EditRoomBtnDrawer);
