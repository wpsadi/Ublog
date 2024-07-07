import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import getUser from "@/Appwrite/User/getUser";





// eslint-disable-next-line no-unused-vars
export const getUserThunk = createAsyncThunk( "User/create", async () => {
  const userData = await getUser();
  return userData;
}
);

// // eslint-disable-next-line no-unused-vars
// const LogoutUser = createAsyncThunk( "User/logout", async () => {

// }
// );




const initialState = {
  isLoggedIn:null
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setName: (state, action) => {
        return {
            ...state,
            name : action.payload
          }
    },
    setEmail: (state, action) => {
        return {
            ...state,
            email : action.payload
          }
    },
    setPassword: (state, action) => {
        return {
            ...state,
            password : action.payload
          }
    },
    setEmailVerified: (state, action) => {
      return {
        ...state,
        isEmailVerified :action.payload
      }
    },
  },
  extraReducers: (builder) => {

    builder.addCase(getUserThunk.fulfilled,(state,action)=>{
      return {
        isLoggedIn:true,
      ...action.payload
      }
    });
    builder.addCase(getUserThunk.rejected,()=>{
      return {
        isLoggedIn:false,
      }
    });

    // eslint-disable-next-line no-unused-vars
    // builder.addCase(LogoutUser.fulfilled,(state,action)=>{
    //     // eslint-disable-next-line no-unused-vars
    //     state=initialState
    // });



  },
});

export default UserSlice.reducer;