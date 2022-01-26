import React from 'react'
import { getNameInitials } from '../misc/helpers';
import { ProfileImg } from './SidebarStyled';

const ProfileAvatar=({src,name, width})=> {
    return (
        <ProfileImg > {src?
            <img src={src}></img>
             : <h4>{name || ''}</h4>
        }
        </ProfileImg>
    )
}

export default ProfileAvatar;