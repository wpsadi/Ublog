

import { useEffect } from "react"
import { useDispatch } from "react-redux"

import AboutCards from "@/componnts/AboutUs/AboutCards"
import AboutHero from "@/componnts/AboutUs/Hero_3"
import Hero_2 from "@/componnts/HeroSection/Hero-2"
import MainLayout from "@/layout/MainLayout"
import { setActiveNavItem } from "@/redux/slices/NavbarSlice"

function AboutPage(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setActiveNavItem({
            name:"About"
        }))
    },[dispatch])
    
    return (<>
    <MainLayout>
        <AboutCards/>
        <AboutHero/>
    <Hero_2/>
    
    </MainLayout>
    </>)
}

export default AboutPage