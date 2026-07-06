import React from 'react'
import Navbar3 from '../components/Navbar3'
import Herosec from '../components/Herosec'
import ChatBot from '../components/ChatBot'
import About3 from '../components/About3'
import ThemeSwitcher from '../components/ThemeSwitcher'
import StatsBar from '../components/StatusBar'
import AboutUs from '../components/AboutUs'
import SchoolsSection from '../components/SchoolsSection'
import LatestBanner from '../components/LatestBanner'
import NoticeSection2 from '../components/NoticeSection2'
import EnquiryPopup2 from '../components/EnquiryPopup2'
import GalleryCarousel2 from '../components/GalleryCrousel'
import StudentReviews from '../components/student-rev/StudentReview2'
import About5 from '../components/Aboute5'
import CompanySection2 from '../components/CompanySection2'
import SocialMedia2 from '../components/SocialMedia'
import Brochure2 from '../components/Brochure2'
import Footer from '../components/Footer'
import Topbar3 from '../components/Topbar3'
import pharma from "../images1/pharmaflowertree4.png";

import About from '../components/About'

const Page2 = () => {
  return (
    <>
     {/* <Topbar3/>  */}
    
    <Navbar3/>
   
    <Herosec/>
    <ChatBot/>
    <About3/>
    {/* <About/> */}
    {/* <About5/> */}
    <StatsBar/>
    <LatestBanner/>
    
    <SchoolsSection/>
    {/* <ThemeSwitcher/> */}

   <div
  className="relative w-full "
  style={{
    backgroundImage: `url(${pharma})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px] z-0"></div>

  {/* Content */}
  <div className="relative z-10">
    <NoticeSection2 />
    <GalleryCarousel2 />
  </div>
</div>
    <StudentReviews/>
    <CompanySection2/>
    <Brochure2/>
    <SocialMedia2/>

    <EnquiryPopup2/>

    
    <Footer/>

    
    </>
  )
}

export default Page2
