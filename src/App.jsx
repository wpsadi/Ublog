import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import { getUserThunk } from "./redux/slices/UserSlice"
import CustomRouter from "./Router/CustomRouter"



function App(){
    const dispatch = useDispatch()

    useEffect(()=>{
        (async()=>{
            await dispatch(getUserThunk())
        })()
        
    },[dispatch])

    return (<>
        <BrowserRouter>
            <CustomRouter/>
            <Toaster/>
        </BrowserRouter>
    </>
    )
}

export default App