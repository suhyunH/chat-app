import { ref , update} from 'firebase/database';
import React from 'react'
import { useProfile } from '../../context/profile.context';
import { database } from '../../misc/firebase';
import { getUserUpdate } from '../../misc/helpers';
import { ProfileModal } from '../../styled';
import EditableInput from '../EditableInput';
import ProfileAvatar from '../ProfileAvatar';
import AvatarUploadBtn from './AvatarUploadBtn';
import { DashSt } from './dashboard.styled';
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
    return <DashSt>
        <header>
            <div>
                <h4>{profile.name}'s Profile</h4>
            </div>
            {/* <ProfileAvatar src={profile.avatar} name={profile.name} /> */}
        </header>
            <AvatarUploadBtn/>
        <div>
            <ProviderBlock />
            <EditableInput
                name="nickname" 
                initialValue={profile.name}
                onSave={onSave}
            />
        </div>
        <footer>
            <button className='signOutbtn' onClick={onSignOut}>Sign Out</button>
        </footer>
        </DashSt>
 
    
}

export default Dashboard;

