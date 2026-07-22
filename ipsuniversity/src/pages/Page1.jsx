import React from 'react'
import Navbar3 from '../components/Navbar3'
import Herosec from '../components/Herosec'
import ChatBot from '../components/ChatBot'
import About3 from '../components/About4'
import ThemeSwitcher from '../components/ThemeSwitcher'
import StatsBar from '../components/StatusBar2'
import AboutUs from '../components/AboutUs'
import SchoolsSection from '../components/SchoolSecction2'
import LatestBanner from '../components/LatestBanner2'
import NoticeSection2 from '../components/NoticeSection2'
import EnquiryPopup2 from '../components/EnquiryPopup2'
import GalleryCarousel2 from '../components/GalleryCrousel'
import StudentReviews from '../components/student-rev/StudentReview2'
import About5 from '../components/Aboute5'
import CompanySection2 from '../components/CompanySection'
import SocialMedia2 from '../components/SocialMedia'
import Brochure2 from '../components/Broucher'
import Footer from '../components/Footer'
import Topbar3 from '../components/Topbar3'
import pharma from "../images1/pharmaflowertree4.png";

import About from '../components/About'
import ApprovalRecognition from '../components/ApprovalRecognition'
import Leadership from '../components/AboutComponents/Leadership'
import Navbar5 from '../components/Navbar'
import { useEffect, useState } from "react";
import FAQ from '../components/FAQ'

import multiFlower from '../images1/treepng2.png'

const Page2 = () => {

   const [showNavbar5, setShowNavbar5] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 100) {
        setShowNavbar5(true);
      } else {
        setShowNavbar5(false);
      }

    };


    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  return (
    <>
     {/* <Topbar3/>  */}
    
   <div
  className={`
    fixed
    top-0
    left-0
    w-full
    z-40
    transition-all
    duration-700
    ease-[cubic-bezier(0.4,0,0.2,1)]
    ${
      showNavbar5
      ? "opacity-0 -translate-y-5 pointer-events-none"
      : "opacity-100 translate-y-0"
    }
  `}
>
  <Navbar3/>
</div>


<div
  className={`
    fixed
    top-0
    left-0
    w-full
    z-50
    transition-all
    duration-700
    ease-[cubic-bezier(0.4,0,0.2,1)]
    ${
      showNavbar5
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-5 pointer-events-none"
    }
  `}
>
  <Navbar5/>
</div>
   
    <Herosec/>
    <ChatBot/>
    <About3/>
    {/* <About/> */}
    {/* <About5/> */}
    <StatsBar/>
    <LatestBanner/>
    
    
    {/* <ThemeSwitcher/> */}

   <div
  className="relative w-full "
  style={{
    backgroundImage: `url(${pharma})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/50 backdrop-blur-[4px] z-0"></div>

  {/* Content */}
  <div className="relative z-10">
    <SchoolsSection/>
    <NoticeSection2 />
    <GalleryCarousel2 />
  </div>
</div>
<FAQ/>
    <StudentReviews/>
      
   
   
  
    {/* <SocialMedia2/> */}

    <EnquiryPopup2/>
    

     <div
  className="relative w-full "
  style={{
    backgroundImage: `url(${multiFlower})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/70 backdrop-blur-[4px] z-0"></div>

  {/* Content */}
  <div className="relative z-10">
     <Brochure2/>
    <CompanySection2/>
   
  </div>
</div>

   



    <ApprovalRecognition/>
    <Footer/>

    
    </>
  )
}

export default Page2
