import React from 'react'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useProfile } from '../context/profile.context';

const PublicRoute=({children, ...routeProps})=> {
    const {profile,isLoading} = useProfile();
    if(isLoading &&!profile ){
        return<div>
            loading...
        </div>
    }
    if(profile &&!isLoading){
        return <Redirect to="/"/>
    }
    
    return (
        <Route {...routeProps}>
            {children}
        </Route>
    )
}

export default PublicRoute
