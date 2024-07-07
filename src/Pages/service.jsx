
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import Hero_2 from "@/componnts/HeroSection/Hero-2"
import OurServices from "@/componnts/Service/Services"
import MainLayout from "@/layout/MainLayout"
import { setActiveNavItem } from "@/redux/slices/NavbarSlice"

function ServicePage(){



    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setActiveNavItem({
            name:"Service"
        }))
    },[dispatch])
    
    return (<>
    <MainLayout>
        <OurServices/>
    <Hero_2/>
    
    </MainLayout>
    </>)
}

export default ServicePage