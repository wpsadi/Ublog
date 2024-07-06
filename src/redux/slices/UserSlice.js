import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line no-unused-vars
const createUser = createAsyncThunk( "User/create", async (email, password, Name) => {

}
);

// eslint-disable-next-line no-unused-vars
const SignInUser = createAsyncThunk( "User/create", async (email, password) => {

}
);

// eslint-disable-next-line no-unused-vars
const LogoutUser = createAsyncThunk( "User/logout", async () => {

}
);

// eslint-disable-next-line no-unused-vars
const VerifyEmail = createAsyncThunk( "User/verifyEmail", async (userId,secret) => {

}
);




const initialState = {
  name: null,
  email: null,
  password: null,
  isEmailVerified: null,
};

export const UserSlice = createSlice({
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
    builder.addCase(createUser.fulfilled,(state,action)=>{
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.password = "**********";
        state.isEmailVerified = action.payload.isEmailVerified;
    });

    builder.addCase(SignInUser.fulfilled,(state,action)=>{
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.password = "**********";
        state.isEmailVerified = action.payload.isEmailVerified;
    });

    // eslint-disable-next-line no-unused-vars
    builder.addCase(LogoutUser.fulfilled,(state,action)=>{
        // eslint-disable-next-line no-unused-vars
        state=initialState
    });

    builder.addCase(VerifyEmail.fulfilled,(state,action)=>{
        state.isEmailVerified = action.payload.isEmailVerified;
    });

  },
});
