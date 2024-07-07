import "./heroSection.css";

import { useEffect, useRef } from "react";
import { SiReaddotcv } from "react-icons/si";

import Hero_2 from "./Hero-2";
function HeroSection() {
  const fadeInRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    if (fadeInRef.current) {
      observer.observe(fadeInRef.current);
    }

    // Clean up the observer on unmount
    return () => {
      if (fadeInRef.current) {
        observer.unobserve(fadeInRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex justify-center">
          <div className="ball mainBgC flex items-center justify-center text-white text-2xl">
            <SiReaddotcv />
          </div>
        </div>

        <div
          className="flex flex-col items-center text-center fade-in"
          ref={fadeInRef}
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Welcome to Ublog
          </h1>
          <p className="text-lg lg:text-2xl text-gray-700 mb-8">
            Discover amazing content and enjoy a seamless experience.
          </p>
          <a
            href="#"
            className="mainBgC text-white px-8 py-3 rounded-md text-lg lg:text-xl hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      </div>
        <Hero_2/>
     
    </section>
  );
}

export default HeroSection;
