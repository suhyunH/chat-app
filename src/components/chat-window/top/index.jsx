import React,{memo, useState} from 'react';
import { Link } from 'react-router-dom';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useHover } from '../../../misc/custom-hooks';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { roomNav } from './RoomIntro.styled';


const Top=()=> {
  const [selfRef,isHover] =useHover(false);
  

  const name = useCurrentRoom( v=>v.name);
  const description = useCurrentRoom(v=>v.description);
   return <roomNav>

      <Link to="/"><FontAwesomeIcon icon={faArrowLeft}/></Link>
      <div ref={selfRef} className='chatTitle'>
        <h4>{name}</h4>
        {/* <h5 className={`${isHover ? 'showDes' : 'nonDes'}`}>{description}</h5> */}
        <div>
        <EditRoomBtnDrawer />
        </div>
      </div>


  </roomNav>;
}

export default memo(Top);
