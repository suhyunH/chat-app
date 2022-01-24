import React from 'react';
import Modal from 'react-modal/lib/components/Modal';
import { useModalState } from '../../../misc/custom-hooks';


const ImageModal = ({src, fileName}) => {
  const{isOpen, open, close}=  useModalState();
  return  <>
      <input type="image" alt="file" src={src} onClick={open} style={{height:"100px", width:"100px"}}/>
    <Modal isOpen={isOpen} ariaHideApp={false}>
    <h4>{fileName}</h4>
    <div> <img src={src} height="50%" width="50%" alt="file"></img></div>
    <a href={src} target="_blank" rel="noopener noreferrer">
        View original 
    </a>
    <button onClick={close}>closes</button>
      </Modal>;
  </>
};

export default ImageModal;
