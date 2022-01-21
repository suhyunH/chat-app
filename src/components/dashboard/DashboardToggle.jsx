import { signOut } from 'firebase/auth';
import React,{useCallback} from 'react'
import Dashboard from '.';
import{auth, database} from "../../misc/firebase";
import { useModalState} from '../../misc/custom-hooks';
import ProfileAvatar from '../ProfileAvatar';
import { useProfile , isOfflineForDatabase } from '../../context/profile.context';
import Modal from 'react-modal';
import { ref, set } from 'firebase/database';

const DashboardToggle=()=> {
    const {profile} = useProfile();

    const { isOpen, close, open } = useModalState();
    
    const onSignOut = useCallback(() => { 
        set(ref(database, `/status/${auth.currentUser.uid}`), isOfflineForDatabase)
        .then(()=>{
            signOut(auth);
            alert("signed Out");
            close();
        }).catch(err=>{
            alert(err.messages);
        });
    },[]);
    return (
        <>
         <button onClick={open}>
             <ProfileAvatar src={profile.avatar} name={profile.name} />
        </button>
        <Modal isOpen={isOpen}>
             <Dashboard onSignOut={onSignOut}/> 
             <button onClick={close}>close</button>
        </Modal>
         


        </>
    )
}

export default DashboardToggle
