

import { useEffect } from "react"
import { useDispatch} from "react-redux"

import HeroSection from "@/componnts/HeroSection/heroSection"
import Footer from "@/componnts/Home/footer"
import WhyUS from "@/componnts/Home/whyUS"
import MainLayout from "@/layout/MainLayout"
import { setActiveNavItem } from "@/redux/slices/NavbarSlice"

function HomePage(){
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setActiveNavItem({
            name:"Home"
        }))
    },[dispatch])

    
    return (<>
    <MainLayout>
    <HeroSection/>
    <WhyUS/>
    
    <Footer/> 
    </MainLayout>
    </>)
}

export default HomePage