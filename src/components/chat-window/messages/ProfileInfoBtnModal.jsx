import React from 'react';
import { useModalState } from '../../../misc/custom-hooks';
import Modal from 'react-modal';
import ProfileAvatar from '../../ProfileAvatar';


const ProfileInfoBtnModal = ({profile}) => {
    
    const{isOpen, close, open} = useModalState();
    const {name, avatar, createdAt} = profile;
    const joinedDate = new Date(createdAt).toLocaleDateString();
  return <>

      <button onClick={open} >
          {name}
      </button>
       <Modal isOpen={isOpen}>
        <div>
          {name} profile
        </div>
          <div>
              <ProfileAvatar 
              src={avatar}
              name={name}
              />
              <h4>{name}</h4>
              <p>joined in {joinedDate}</p>

          </div>
          <div>
              <button onClick={close}>close</button>
          </div>


      </Modal>
  </>;
};

export default ProfileInfoBtnModal;
