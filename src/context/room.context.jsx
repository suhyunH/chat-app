import React, { useState, createContext, useEffect, useContext } from 'react';
import{ref,  off, onValue} from"firebase/database";
import { database } from '../misc/firebase';
import { transformToArryWithId } from '../misc/helpers';

const RoomsContext = createContext();

export const RoomsProvider =({children})=>{
    const [rooms, setRooms] =useState("");
    useEffect(()=>{
        const roomListRef = ref(database, 'rooms');
        onValue(roomListRef, DataSnapshot =>{
            const data = transformToArryWithId(DataSnapshot.val());
            setRooms(data);
        });
        return ()=>{
            off(roomListRef);
        }
    },[]);
    return <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
}

export const useRooms =()=>useContext(RoomsContext);