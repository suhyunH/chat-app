import React,{useState} from 'react';
import { serverTimestamp, ref, push } from 'firebase/database';
import { database, auth } from '../misc/firebase';
import { CreateRoomModalSt } from './SidebarStyled';

const CreateRoomModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState("");
    const [textArea, setTextArea] = useState("");

    const onChangeInput =(ev)=>{
       const{target:{value}} = ev;
      setInput(value);
    };

    const onChangeTextArea =(ev)=>{
       const{target:{value}} = ev;
      setTextArea(value);
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        const newRoomData ={
            name: input,
            description : textArea,
            createdAt: serverTimestamp(),
            admins:{
                [auth.currentUser.uid]: true,
            },
        };
        try{
            await push(ref(database, 'rooms'), newRoomData);
            alert(`${newRoomData.name} has been made successfully`);
            
            setInput("");
            setTextArea("");
            setIsLoading(false);
        }catch(err){
            setIsLoading(false);
            alert(err.messages);
        };

    }




  return (<CreateRoomModalSt>
      <div>
                    <h2>New chat room</h2>
                    <form onSubmit={onSubmit}  >
                        <div>
                            <label htmlFor='name'>Room name</label>
                            <input value={input}  id="name" name="name" type="text" placeholder='Enter chat room name'required onChange={onChangeInput}/>
                        </div>
                        <div>
                            <label htmlFor='description'>Description</label>
                            <textarea  id="description"value={textArea} name="description"placeholder='Enter chat room description' required onChange={onChangeTextArea}></textarea> 
                        </div>
                        <button type='submit' disabled={isLoading}>Create New Chat Room</button>
                    </form>
     </div>
  </CreateRoomModalSt>)
}

export default CreateRoomModal;




