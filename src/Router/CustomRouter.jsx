
import {Route,Routes} from "react-router-dom"

import HomePage from "@/Pages/Home"
function CustomRouter(){
    return (<>
    <Routes>
        <Route path="/" element={<HomePage />} />
        
    </Routes>
    </>)

}

export default CustomRouter