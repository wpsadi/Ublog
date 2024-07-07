import "./blogs.css";

import  { useEffect, useRef, useState } from 'react';



function DiscoverBlogs() {

    const targetRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // Adjust threshold as needed (0 means fully hidden, 1 means fully visible)
        }
      );
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, []);



  return (
    <>
  
      <section className="text-center py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold pb-4 text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text">
            Discover Content
          </h2>
          <p className="text-lg mb-12 text-gray-700 italic">
            Read through all the informative content written by experienced write with lots of research 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Blog Card 1 --> */}
            <div ref={targetRef} className="blog-card fade-in">
              <img
                src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                alt="Blog Image 1"
              />
              <div className="blog-card-content">
                <span>
                  <img src="https://via.placeholder.com/30" alt="Author 1" />
                  Mar 16, 2020 &middot; Michael Foster
                </span>
                <h3>Boost your conversion rate</h3>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default DiscoverBlogs;
