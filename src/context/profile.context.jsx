import React, { createContext ,useState, useContext, useEffect} from 'react';
import { auth, database } from '../misc/firebase';
import {
    serverTimestamp,
    ref,
    onValue,
    onDisconnect,
    set,
    off,
    DataSnapshot,
  } from 'firebase/database';
  import { onAuthStateChanged } from 'firebase/auth';

const ProfileContext = createContext();

export const ProfileProvider = ({children})=>{
    const[profile, setProfiles] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        let userRef;
        
         const authUnsub = onAuthStateChanged(auth, async authObj =>{
            if(authObj){
               userRef = ref(database, `/profiles/${authObj.uid}`)
               onValue(userRef, DataSnapshot=>{
                   const {name, createdAt, avatar} = DataSnapshot.val();

                   const data ={
                       name,
                       createdAt,
                       avatar,
                       uid: authObj.uid,
                       email: authObj.email
                    };
                    setProfiles(data);
                    setIsLoading(false);
               }); 
            }else{
                if(userRef){
                    off(userRef);
                }
                setProfiles(null);
                setIsLoading(false);
            }
        });
        return ()=>{
            authUnsub();
            if(userRef){
                off(userRef);
            }
        }
    },[]);

    return<ProfileContext.Provider value={{isLoading, profile}}>{children}</ProfileContext.Provider>;
};

export const useProfile = ()=>useContext(ProfileContext);