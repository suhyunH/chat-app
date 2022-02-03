import React from 'react'
import { ProfileImg } from './SidebarStyled';

const ProfileAvatar=({src,name})=> {
    return (
        <ProfileImg > {src?
            <img src={src} alt={name}></img>
             : <h4>{name || ''}</h4>
        }
        </ProfileImg>
    )
}

export default ProfileAvatar;