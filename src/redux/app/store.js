

import { configureStore } from "@reduxjs/toolkit";
import BucketReducer from "../Slice/BucketSlice"
import FillReducer from "../Slice/FillSlice"
import TextReducer from "../Slice/textSlice"
export const store=configureStore({
    reducer:{
        Bucket:BucketReducer,
        Fill:FillReducer,
        Text:TextReducer
    }
})