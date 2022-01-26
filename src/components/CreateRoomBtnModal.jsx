import React,{useState} from 'react'
import { serverTimestamp, ref, push } from 'firebase/database';
 import { database, auth } from '../misc/firebase';
import { useModalState } from '../misc/custom-hooks';
import Modal from 'react-modal/lib/components/Modal';
import { CreateRoomSt, modalStyle } from './SidebarStyled';


const CreateRoomBtnModal=()=> {
    const {isOpen, open, close}=useModalState();

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
    return (
        <CreateRoomSt>
            <button onClick={open} className='createBtn'>
            Create new Chat Room     
            </button>  

            <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
                <header>
                    <h2>New chat room</h2>
                </header>
                
                    <form onSubmit={onSubmit}  >
                        < span >Room name</span>
                        <input value={input} name="name" type="text" placeholder='Enter chat room name'required onChange={onChangeInput}/>

                        <span >Description</span>
                        <textarea value={textArea} name="description"placeholder='Enter chat room name' required onChange={onChangeTextArea}></textarea> 
                        <button type='submit' disabled={isLoading}>Create New Chat Room</button>
                    </form>
                        <button onClick={close}>Close</button>
            </Modal>

        </CreateRoomSt>
    )
}

export default CreateRoomBtnModal
