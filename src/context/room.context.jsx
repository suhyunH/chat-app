import React, { useState, createContext, useEffect } from 'react';
import{ref,  off, onValue} from"firebase/database";
import { database } from '../misc/firebase';
import { transformToArryWithId } from '../misc/helpers';

const RoomsContext = createContext();

export const RoomsProvider =({children})=>{
    const [rooms, setRooms] =useState("");
    useEffect(()=>{
        const roomListRef = ref(database, 'rooms');
        onValue(roomListRef, snap =>{
            const data = transformToArryWithId(snap.val());
            setRooms(data);
        });
        return ()=>{
            off(roomListRef);
        }
    },[]);
    return <RoomsContext.Provider value={rooms}>{children}</RoomsContext.Provider>
}