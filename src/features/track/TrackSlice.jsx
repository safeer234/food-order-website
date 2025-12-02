import { createSlice } from "@reduxjs/toolkit";

export const trackSlice = createSlice({
    name:'track',
    initialState:{
        tracks:[]
    },
    reducers:{
        trackOrder:(state,action)=>{
            state.tracks=[action.payload]
        }
    }
})
export const {trackOrder} = trackSlice.actions
export default trackSlice.reducer