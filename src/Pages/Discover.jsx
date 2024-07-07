import { useEffect } from "react";
import { useDispatch } from "react-redux";

import DiscoverBlogs from "@/componnts/Discover/discover";
import Hero_2 from "@/componnts/HeroSection/Hero-2";
import MainLayout from "@/layout/MainLayout";
import { setActiveNavItem } from "@/redux/slices/NavbarSlice";

function DiscoverPage() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(
      setActiveNavItem({
        name: "Discover",
      })
    );
  },[dispatch])

  return (
    <>
    
      <MainLayout>
        <DiscoverBlogs />
        <Hero_2 />
      </MainLayout>
    </>
  );
}

export default DiscoverPage;
