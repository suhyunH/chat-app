import React from 'react'
import { getNameInitials } from '../misc/helpers';

const ProfileAvatar=({src,name})=> {
    return (
        <div > {src?
            <img src={src}></img>
             : <h4>{name || ''}</h4>
        }
        </div>
    )
}

export default ProfileAvatar;