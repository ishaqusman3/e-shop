import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn : false,
    email : null,
    useName: null,
    userId: null,
} 

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER:(state, action)=>{
        console.log(action.payload)
        const {email, userName, userId} = action.payload
        state.isLoggedIn = true
        state.email = email
        state.userName = userName
        state.userId - userId
    }
  }
});

export const {SET_ACTIVE_USER} = authSlice.actions
export const selectIsLoggedIn = (state)=> state.auth.isLoggedIn
export const selectEmail = (state)=> state.auth.email
export const selectUserName= (state)=> state.auth.useName
export const selectUserId= (state)=> state.auth.userId
export default authSlice.reducer