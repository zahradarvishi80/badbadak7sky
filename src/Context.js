
import React,{createContext, useState} from "react";

export const MyBucket=createContext()

export const ContextProvider=({children})=>{

    const[listBucket,setListBucket]=useState([])
    return(
        <MyBucket.Provider value={[listBucket,setListBucket]} >
        {children}
        </MyBucket.Provider>
    )
}