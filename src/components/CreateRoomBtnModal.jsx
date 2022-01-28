import React from 'react'
import { useModalState } from '../misc/custom-hooks';
import Modal from 'react-modal';
import { CreateRoomSt, modalStyle } from './SidebarStyled';
import CreateRoomModal from './CreateRoomModal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


const CreateRoomBtnModal=()=> {
    const {isOpen, open, close}=useModalState();
    return (
        <CreateRoomSt>
            <button onClick={open} className='createBtn'>
            Create new Chat Room     
            </button>  
            <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}  portalClassName="modal">
            <button onClick={close} style={{border:'none',backgroundColor: 'white', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes}/></button>
                <CreateRoomModal />
            </Modal>
        </CreateRoomSt>
    )
}

export default CreateRoomBtnModal
