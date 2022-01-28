import React from 'react';
import Modal from 'react-modal';
import { useModalState } from '../../../misc/custom-hooks';
import { smModalStyle } from '../../SidebarStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import AttachmentModal from './AttachmentModal';

const AttachmentBtnModal = ({afterUpload}) => {
  const{isOpen, open, close}= useModalState()
  
  return <>
      <button onClick={open}><FontAwesomeIcon icon={faFileUpload} style={{color:'#2a2a2a', padding:'3px', marginBottom:'-5px'}}/></button>
     <Modal isOpen={isOpen} ariaHideApp={false} style={smModalStyle}>
        <button onClick={close} style={{border:'none',backgroundColor: 'white', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes}/></button>
        <AttachmentModal afterUpload={afterUpload} />
    </Modal>
  </>;
};

export default AttachmentBtnModal;
