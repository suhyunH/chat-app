import { signOut } from 'firebase/auth';
import React,{useCallback} from 'react'
import Dashboard from '.';
import{auth} from "../../misc/firebase";

const DashboardToggle=()=> {
    
    const onSignOut = useCallback(() => { 
        signOut(auth);
        alert("signed Out");
    },[]);
    return (
        <>
         <button>DashBoard</button>
         <div>
             <Dashboard onSignOut={onSignOut}/>
             fold/unfold dashboad
         </div>
        </>
    )
}

export default DashboardToggle
