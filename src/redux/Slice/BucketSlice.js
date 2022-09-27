
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    listBucket:[],
    id:new Date()

}
export const BucketSlice=createSlice({

    name:"Bucket",
    initialState,
    reducers:{
        setListBucket:(state,action)=>{
            
            state.listBucket=action.payload
        },
       
        deleteItem: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
          },
    }
})
export const { setListBucket,deleteItem} =BucketSlice.actions
export default BucketSlice.reducer