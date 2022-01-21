import React,{memo} from 'react';
import { Link } from 'react-router-dom';
import { useCurrentRoom } from '../../../context/current-room.context';
import EditRoomBtnDrawer from './EditRoomBtnDrawer';

const Top=()=> {
  const name = useCurrentRoom( v=>v.name);
  const description = useCurrentRoom(v=>v.description);
   return <div>
    <div>
      <p>_</p>
      <Link to="/">back</Link>
      <h3>{name}</h3>
      <p>{description}</p>
      <EditRoomBtnDrawer />
    </div>

  </div>;
}

export default memo(Top);
