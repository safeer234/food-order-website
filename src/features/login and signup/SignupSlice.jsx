import { createSlice } from "@reduxjs/toolkit";
export const signSlice = createSlice ({
    name:'Sign',
    initialState:{
value:false,
isAuthenticated:false
    },
    reducers:{
        showSign: (state)=> {
            state.value = !state.value

        },
           hideSign: (state) => {
      state.value = false;
    },
    loginSuccess:(state) =>{
        state.value = false
        state.isAuthenticated=true
    },
    logOut:(state) =>{
        state.isAuthenticated=false
    }
       
    }
})
export const {showSign, hideSign, loginSuccess, logOut} = signSlice.actions
export default signSlice.reducer