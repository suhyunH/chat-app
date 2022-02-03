import React,{useCallback, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { EditableSt } from './SidebarStyled';

const EditableInput=({
    initialValue, 
    onSave, 
    label=null, 
    placeholder=null, 
    emptyMsg="input is empty", 
    ...inputProps
})=> {
    const [input, setInput] = useState(initialValue);
    const [isEditable, setIsEditable] = useState(false);
   
   
    const onInputChange=(ev) =>{
        const{target:{value}}= ev;
        setInput(value);
    };
      
    
    const onEditClick = useCallback(()=>{
        setIsEditable(p=>!p);
        // setInput(initialValue);
    },[]);

    const onSaveClick= async()=>{
        const trimmed = input.trim();
        if(trimmed ===''){
            alert(emptyMsg);
            return;
        }
        if(trimmed !==initialValue){
           await onSave(trimmed);
        }
        setIsEditable(false);
    }


    return (
        <EditableSt>
             {label}
                <input {...inputProps} 
                disabled={!isEditable}
                placeholder={placeholder} 
                value={input} 
                onChange={onInputChange}
                />
                <div>
                {/* <button onClick={onEditClick}>{isEditable? <FontAwesomeIcon icon={faTimes}/>:<FontAwesomeIcon icon={faEdit}/>}</button>
                <button onClick={onSaveClick}><FontAwesomeIcon icon={faCheck}/></button> */}
                 {!isEditable?
                <button onClick={onEditClick}><FontAwesomeIcon icon={faEdit}/></button>
                :
                <button onClick={onSaveClick}><FontAwesomeIcon icon={faCheck}/></button>}
                </div>
        </EditableSt>
    )
}

export default EditableInput;
