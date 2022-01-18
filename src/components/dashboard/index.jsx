import { ref , set} from 'firebase/database';
import React,{useState, useEffect} from 'react'
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import EditableInput from '../EditableInput';


const Dashboard=({onSignOut})=> {
  
    const {profile} =useProfile(); 
    const onSave = async newData=>{
     const userNicknameRef =  ref(database, `/profiles/${profile.uid}/name`);
     try{
       await set(userNicknameRef, newData);
       alert("nickname has been updated");
     }catch{
       alert("error");
     }

    }
    return <>
        <header>
            <div>
                <h4>dashboard</h4>
            </div>
        </header>
        <div>
            <h3>hey, {profile.name}</h3>
            <hr/>
            <EditableInput
                name="nickname" 
                initialValue={profile.name}
                onSave={onSave}
                label={<h6>Nickname</h6>}
            />
        </div>
        <footer>
            <button onClick={onSignOut}>Sign Out</button>
        </footer>

    </>;
    
}

export default Dashboard;

