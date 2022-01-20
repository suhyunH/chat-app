import { ref , update} from 'firebase/database';
import React from 'react'
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import { getUserUpdate } from '../../misc/helpers';
import EditableInput from '../EditableInput';
import AvatarUploadBtn from './AvatarUploadBtn';
import ProviderBlock from './ProviderBlock';


const Dashboard=({onSignOut})=> {
  
    const {profile} =useProfile(); 

    const onSave = async newData=>{
    //  const userNicknameRef =  ref(database, `/profiles/${profile.uid}/name`);
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
    return <>
        <header>
            <div>
                <h4>dashboard</h4>
            </div>
        </header>
        <div>
            <h3>hey, {profile.name}</h3>
            <ProviderBlock />
            <hr/>
            <EditableInput
                name="nickname" 
                initialValue={profile.name}
                onSave={onSave}
                label={<h6>Nickname</h6>}
            />
        </div>
        <AvatarUploadBtn/>
        <footer>
            <button onClick={onSignOut}>Sign Out</button>
        </footer>

    </>;
    
}

export default Dashboard;

