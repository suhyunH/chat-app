import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useProfile } from '../context/profile.context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LoadingSt } from './SidebarStyled';


const PrivateRoute=({children, ...routeProps})=> {
    const {profile, isLoading} = useProfile();

    if(isLoading&&!profile){
        return <LoadingSt>
           <div className='loadingContainer'> <FontAwesomeIcon icon={faSpinner} style={{fontSize:'150px', color: "gray"}}/></div>
        </LoadingSt>
    }
    if(!profile && !isLoading){
        return <Redirect to="/signin"/>
    }
    
    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}

export default PrivateRoute
