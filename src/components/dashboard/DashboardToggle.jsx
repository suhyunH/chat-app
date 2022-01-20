import { signOut } from 'firebase/auth';
import React,{useCallback} from 'react'
import Dashboard from '.';
import{auth} from "../../misc/firebase";
import { useModalState, useMediaQuery } from '../../misc/custom-hooks';
import ProfileAvatar from '../ProfileAvatar';
import { useProfile } from '../../context/profile.context';


const DashboardToggle=()=> {
    const {profile} = useProfile();

    const { isOpen, close, open } = useModalState();
    const isMobile = useMediaQuery('(max-width: 992px)');
    
    const onSignOut = useCallback(() => { 
        signOut(auth);
        alert("signed Out");
    },[]);
    return (
        <>
         <button onClick={open}><ProfileAvatar src={profile.avatar} name={profile.name} />
</button>
         {isOpen?
         
         <div>
             <Dashboard onSignOut={onSignOut}/>
             <button onClick={close}>x</button>
         </div>
        : null}
        </>
    )
}

export default DashboardToggle
