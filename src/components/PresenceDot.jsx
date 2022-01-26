import React from 'react';
import { usePresence } from '../misc/custom-hooks';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
const getColor=(presence)=>{
    if(!presence){
        return 'gray';
    }

    switch(presence.state){
        case 'online': return 'green';
        case 'offline': return 'red';
        default: return 'gray';
    }
}


const PresenceDot = ({uid}) => {
  const presence = usePresence(uid);
    return <div>
        <button style={{ fontSize: '9px',color:getColor(presence)}}><FontAwesomeIcon icon={faCircle}/></button>
    </div>;
};

export default PresenceDot;