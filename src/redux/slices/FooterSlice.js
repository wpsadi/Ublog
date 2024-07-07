import { createSlice } from "@reduxjs/toolkit"

const inittialState = true

 const FooterSlice = createSlice({
    name:"Footer",
    initialState:inittialState,
    reducers:{
        setFooter:(state,action)=>{
            return action.payload
        }
    }
})

export const {setFooter} = FooterSlice.actions
export default FooterSlice.reducer
