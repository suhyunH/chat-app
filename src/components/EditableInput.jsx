import React,{useCallback, useState} from 'react'
import reactRouterDom from 'react-router-dom';

const EditableInput=({
    initialValue, 
    onSave, 
    label=null, 
    placeholder="write your state...", 
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
    },[initialValue]);

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
        <div>
            {label}
            
                <input {...inputProps} 
                disabled={!isEditable}
                placeholder={placeholder} 
                value={input} 
                onChange={onInputChange}/>
                <button onClick={onEditClick}>{isEditable? 'close':'edit'}</button>
                <button onClick={onSaveClick}>check</button>

        </div>
    )
}

export default EditableInput;
