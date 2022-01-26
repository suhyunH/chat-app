import { AuthErrorCodes, signOut } from 'firebase/auth';
import React,{useCallback} from 'react'
import Dashboard from '.';
import{auth, database} from "../../misc/firebase";
import { useModalState} from '../../misc/custom-hooks';
import ProfileAvatar from '../ProfileAvatar';
import { useProfile , isOfflineForDatabase } from '../../context/profile.context';
import Modal from 'react-modal';
import { ref, set } from 'firebase/database';
import { modalStyle, SideProfileSt } from '../SidebarStyled';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


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
        <SideProfileSt>
        <div className='sideProfile'>
            <button onClick={open} className='toggleBtn'>
                <ProfileAvatar src={profile.avatar} name={profile.name} />
            </button>
            <div>
                <h3>Hello,</h3>
                <h2>{profile.name}.</h2>
            </div>
        </div>
        <Modal isOpen={isOpen} ariaHideApp={false} style={modalStyle}>
             <button onClick={close} style={{border:'none',backgroundColor: 'white', cursor:'pointer'}}><FontAwesomeIcon icon={faTimes}/></button>
             <Dashboard onSignOut={onSignOut}/> 
        </Modal>
         


        </SideProfileSt>
    )
}

export default DashboardToggle
