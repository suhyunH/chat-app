import React from 'react';
import Modal from 'react-modal';
import { useModalState } from '../../../misc/custom-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { modalStyle } from '../../SidebarStyled';
const ImageModal = ({src, fileName}) => {
  const{isOpen, open, close}=  useModalState();
  return  <>
      <input type="image" alt="file" src={src} onClick={open} style={{height:"100px", width:"100px"}}/>
    <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
    <button onClick={close} style={{border:'none',backgroundColor: 'white', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes}/></button>

    <h4 style={{textAlign:'center'}}>{fileName}</h4>
    <div style={{marginBottom:"30px"}}> 
      <img src={src} height="50%" width="50%" alt="file" style={{marginLeft:'100px'}}></img>
    </div>
    <a href={src} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none', color:" #452007", display:"block",textAlign:'center'}}>View original</a>
      </Modal>
  </>
};

export default ImageModal;
