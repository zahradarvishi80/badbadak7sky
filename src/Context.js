
import React,{createContext, useState} from "react";

export const MyClick=createContext()

export const ContextProvider=({children})=>{

    const[click,setClick]=useState(0)
    return(
        <MyClick.Provider value={[click,setClick]} >
        {children}
        </MyClick.Provider>
    )
}