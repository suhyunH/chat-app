import React from 'react'
import { useProfile } from '../../context/profile.context';

const Dashboard=({onSignOut})=> {
    const {profile} =useProfile(); 
    return <>
        <header>
            <div>
                <h4>dashboard</h4>
            </div>
        </header>
        <div>
            <h3>hey, {profile.name}</h3>
        </div>
        <footer>
            <button onClick={onSignOut}>Sign Out</button>
        </footer>

    </>;
    
}

export default Dashboard;

