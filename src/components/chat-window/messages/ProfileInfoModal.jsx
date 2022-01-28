import React from 'react';
import ProfileAvatar from '../../ProfileAvatar'
import { ProfileInfoSt } from './Message.styled';

const ProfileInfoModal = ({profile}) => {
    const {name, avatar, createdAt} = profile;
    const joinedDate = new Date(createdAt).toLocaleDateString();
  return <ProfileInfoSt>
        <h4>
          {name}'s profile
        </h4>
          <div>
              <ProfileAvatar 
              src={avatar}
              name={name}
              />
              <h4>{name}</h4>
              <p>joined in {joinedDate}</p>

          </div>
  </ProfileInfoSt>;
};

export default ProfileInfoModal;
