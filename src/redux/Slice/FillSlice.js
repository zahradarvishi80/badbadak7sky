import { createSlice } from "@reduxjs/toolkit";

const initialState={ 

    value:{
        fill:true,
    },
}
export const FillSlice=createSlice({
    name:"Fill",
    initialState,
    reducers:{

        setFill:(state,action)=>{
        state.value.fill=!state.value.fill
    
        },
     
    }
})
export const {setFill} =FillSlice.actions
export default FillSlice.reducer