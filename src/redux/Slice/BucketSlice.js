
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    listBucket:[],
   

}
export const BucketSlice=createSlice({

    name:"Bucket",
    initialState,
    reducers:{
        setListBucket:(state,action)=>{
            state.listBucket=action.payload
        },
      
    }
})
export const { setListBucket} =BucketSlice.actions
export default BucketSlice.reducer