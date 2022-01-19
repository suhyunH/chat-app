import React from 'react'
import { getNameInitials } from '../misc/helpers';

const ProfileAvatar=({src,name})=> {
    return (
        <div > {src?
            <img src={src}></img>
             : getNameInitials(name)
        }
        </div>
    )
}

export default ProfileAvatar;