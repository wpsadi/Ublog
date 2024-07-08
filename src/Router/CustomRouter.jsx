
import {Route,Routes} from "react-router-dom"

import RequireSignin from "@/helpers/requireSignIn"
import ErrorPage from "@/Pages/404"
import AboutPage from "@/Pages/About"
import DashboardPage from "@/Pages/DashBoard/mainDashboard"
import UserProfilePage from "@/Pages/DashBoard/UserProfile"
import DiscoverPage from "@/Pages/Discover"
import HomePage from "@/Pages/Home"
import ServicePage from "@/Pages/service"
import SiginPage from "@/Pages/Signin"
function CustomRouter(){
    return (<>
    <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/signin" element={<SiginPage/>}/>


        {/* Dashboard */}
        <Route element={<RequireSignin/>}>
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/user" element={< UserProfilePage/>} />
        </Route>
       


        <Route path="*" element={<ErrorPage/>}/>


    </Routes>
    </>)

}

export default CustomRouter