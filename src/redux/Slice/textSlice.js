
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    text:""
}
export const TextSlice=createSlice({

    name:"Text",
    initialState,
    reducers:{
        setText:(state,action)=>{
            state.text=action.payload
        }
     
      
    }
})
export const { setText} =TextSlice.actions
export default TextSlice.reducer