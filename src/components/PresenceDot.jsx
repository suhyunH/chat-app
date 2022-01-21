import React from 'react';
import { usePresence } from '../misc/custom-hooks';

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
        <button style={{width:'1px', heigth:'5px', borderRadius:'50%',backgroundColor:getColor(presence)}}></button>
    </div>;
};

export default PresenceDot;