import { configureStore } from "@reduxjs/toolkit";

import FooterSlice  from "./slices/FooterSlice";
import NavbarSlice from "./slices/NavbarSlice";
import UserSlice from "./slices/UserSlice";



export const store = configureStore({
    reducer:{
        user:UserSlice,
        nav:NavbarSlice,
        footer:FooterSlice
        // Add your reducers here    
    },
    devTools:true
})

