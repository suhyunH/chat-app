import React,{memo} from 'react';
import { NavLink } from 'react-router-dom';
import { useCurrentRoom } from '../../../context/current-room.context';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { RoomNav } from './RoomIntro.styled';


const Top=()=> {
  

  const name = useCurrentRoom( v=>v.name);
  const description = useCurrentRoom(v=>v.description);
   return <RoomNav>

      <NavLink to="/" style={{color: '#452007'}}><FontAwesomeIcon icon={faArrowLeft}/></NavLink>
      <div className='chatTitle'>
        <h4><u>{name}</u></h4>
        {/* <h5 className={`${isHover ? 'showDes' : 'nonDes'}`}>{description}</h5> */}
        <div>
        <EditRoomBtnDrawer />
        </div>
      </div>


  </RoomNav>;
}

export default memo(Top);
