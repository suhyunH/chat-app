import { ref , update} from 'firebase/database';
import React from 'react'
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import { getUserUpdate } from '../../misc/helpers';
import EditableInput from '../EditableInput';
import AvatarUploadBtn from './AvatarUploadBtn';
import { DashSt } from './dashboard.styled';
import ProviderBlock from './ProviderBlock';


const Dashboard=({onSignOut})=> {
  
    const {profile} =useProfile(); 

    const onSave = async newData=>{
     try{
        const updates = await getUserUpdate(
            profile.uid, 
            'name', 
            newData, 
            database
            ); 

        await update(ref(database), updates);
        alert("nickname has been updated");
     }catch(err){
       alert(err.messages);
     }

    }
    const onSaveStatus = async newData=>{
     try{
        const updates = await getUserUpdate(
            profile.uid, 
            'statusMsg', 
            newData, 
            database
            ); 

        await update(ref(database), updates);
        alert("status Message has been updated");
     }catch(err){
       alert(err.message);
     }

    }
    return <DashSt>
        <header>
            <div>
                <h4>{profile.name}'s Profile</h4>
            </div>
        </header>
            <AvatarUploadBtn/>
        <div>
            <ProviderBlock />
            <EditableInput
                name="nickname" 
                initialValue={profile.name}
                onSave={onSave}
                style={{marginBottom: '-6px'}}
            />
            <EditableInput
                name="stateMsg" 
                initialValue={profile.statusMsg}
                onSave={onSaveStatus}
            />
        </div>
        <footer>
            <button className='signOutbtn' onClick={onSignOut}>Sign Out</button>
        </footer>
        </DashSt>
 
    
}

export default Dashboard;

