import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import getUserAvatar from "@/Appwrite/User/getAvatar";
import getUser from "@/Appwrite/User/getUser";
import LogoutUser from "@/Appwrite/User/SigninOut";
import UpdateUsername from "@/Appwrite/User/updateName";





// eslint-disable-next-line no-unused-vars
export const getUserThunk = createAsyncThunk( "User/create", async () => {
  const userData = await getUser();
  const AvatarData = await getUserAvatar(userData.name,300,300)
  return {
    ...userData,
    avatar: AvatarData
  };
}
);

// eslint-disable-next-line no-unused-vars
export const LogOutUserDash = createAsyncThunk( "User/logout", async () => {
  const task = await LogoutUser()
  return task
}
);

// eslint-disable-next-line no-unused-vars
export const UpdateUserName = createAsyncThunk( "User/update/name", async (name) => {
  const task = toast.promise(()=>{
    return UpdateUsername(name)
  },{
    pending:"Updating Name...",
    success:"Name Updated Successfully!",
    error:"Name Update Failed!"
  
  })
  return await task
}
);




const initialState = {
  isLoggedIn:null,
  isJustLoggedOut:null
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
    // eslint-disable-next-line no-unused-vars
    setIsJustLoggedOut:(state,action)=>{
      return {
        ...state,
        isJustLoggedOut : null
      
      }
    }
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
    builder.addCase(LogOutUserDash.fulfilled,(state,action)=>{
      toast.success("Successfully Signed Out!")
        // eslint-disable-next-line no-unused-vars
        return {
          isLoggedIn:false,
          isJustLoggedOut:true
        }
    });
    
    // eslint-disable-next-line no-unused-vars
    builder.addCase(LogOutUserDash.rejected      ,(state,action)=>{
      toast.error("Signout Failed!")
        // eslint-disable-next-line no-unused-vars
        return state
    });

    builder.addCase(UpdateUserName.fulfilled,(state,action)=>{
      return {
        ...state,
        name:action.payload.name
      }
    
    })



  },
});

export const { setName, setEmail, setPassword, setEmailVerified, setIsJustLoggedOut } = UserSlice.actions;
export default UserSlice.reducer;