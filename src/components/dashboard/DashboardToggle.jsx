import React from 'react'
import Dashboard from '.';
import { useModalState } from '../../misc/custom-hooks'

const DashboardToggle=()=> {
    const{isOpen, open, close} = useModalState();
    return (
        <>
         <button>DashBoard</button>
         <div>
             <Dashboard />
             fold/unfold dashboad
         </div>
        </>
    )
}

export default DashboardToggle
