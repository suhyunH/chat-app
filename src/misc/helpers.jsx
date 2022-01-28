import { ref, get, query, orderByChild, equalTo } from 'firebase/database';


export function transformToArr(snapVal){
  return snapVal ? Object.keys(snapVal) : [];
}
export function transformToArryWithId(snapVal){
    return snapVal? Object.keys(snapVal).map(roomId =>{
        return {...snapVal[roomId], id: roomId}
    }) :[]

}

export async function getUserUpdate(userId, keyToUpdate, value, db){
    const updates ={};
    updates[`/profiles/${userId}/${keyToUpdate}`] = value;

    const getMsgs = get(
        query(ref(db, '/messages'), orderByChild('author/uid'), equalTo(userId))
      );
   
      const getRooms = get(
        query(
          ref(db, '/rooms'),
          orderByChild('lastMessage/author/uid'),
          equalTo(userId)
        )
      );

      const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);

      mSnap.forEach(msgSnap => {
        updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
      });
      rSnap.forEach(roomSnap => {
        updates[`/rooms/${roomSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
      });
      return updates;
}