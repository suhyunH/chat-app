import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

const PrivateRoute=({children, ...routeProps})=> {
    const {profile, isLoading} = useProfile();

    if(isLoading&&!profile){
        return <div>
            Loading...
        </div>
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
