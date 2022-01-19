import React,{useState} from 'react'
import { serverTimestamp, ref, push } from 'firebase/database';
 import { database, auth } from '../misc/firebase';


const CreateRoomBtnModal=()=> {
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
            descrition : textArea,
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
    return (
        <div>
            <button >
            Create new ChatRoom     
            </button>  

            <div>
                <header>
                    <h2>New chat room</h2>
                </header>
                
                    <form onSubmit={onSubmit}  >
                        < span >Room name</span>
                        <input value={input} name="name" type="text" placeholder='Enter chat room name'required onChange={onChangeInput}/>

                        <span >Description</span>
                        <textarea value={textArea} name="description"placeholder='Enter chat room name' required onChange={onChangeTextArea}></textarea> 
                        <button type='submit'   disabled={isLoading}>Create New Chat Room</button>
                    </form>
                
              
            </div>

        </div>
    )
}

export default CreateRoomBtnModal
