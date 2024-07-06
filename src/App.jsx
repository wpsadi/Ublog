import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

import { env } from "./helpers/env";
import CustomRouter from "./Router/CustomRouter"

const apiKey = env.VITE_API_KEY;
const apiUrl = env.VITE_API_URL;

function App(){
    console.log(apiKey,apiUrl)
    return (<>
        <BrowserRouter>
            <CustomRouter/>
            <Toaster/>
        </BrowserRouter>
    </>
    )
}

export default App