

import Footer from "@/componnts/footer"
import HeroSection from "@/componnts/heroSection"
import WhyUS from "@/componnts/whyUS"
import MainLayout from "@/layout/MainLayout"

function HomePage(){
    return (<>
    <MainLayout>
    <HeroSection/>
    <WhyUS/>
    <Footer/>
    </MainLayout>
    </>)
}

export default HomePage