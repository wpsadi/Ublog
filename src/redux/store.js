import { configureStore } from "@reduxjs/toolkit";

import  DashNavbarSlice from "./slices/DashNav";
import FooterSlice  from "./slices/FooterSlice";
import NavbarSlice from "./slices/NavbarSlice";
import UserSlice from "./slices/UserSlice";



export const store = configureStore({
    reducer:{
        user:UserSlice,
        nav:NavbarSlice,
        footer:FooterSlice,
        dash:DashNavbarSlice
        // Add your reducers here    
    },
    devTools:true
})

