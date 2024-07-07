import Hero_2 from "@/componnts/HeroSection/Hero-2";
import SignInBox from "@/componnts/SiginIn/signinBOX";
import MainLayout from "@/layout/MainLayout";

function SiginPage(){
    return (
        <>
    
        <MainLayout>
            <SignInBox/>
          <Hero_2 />
        </MainLayout>
      </>
    )
}

export default SiginPage