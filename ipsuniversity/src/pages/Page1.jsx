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
import CompanySection2 from '../components/CompanySection2'
import SocialMedia2 from '../components/SocialMedia'
import Brochure2 from '../components/Brochure2'
import Footer from '../components/Footer'
import Topbar3 from '../components/Topbar3'
import pharma from "../images1/pharmaflowertree4.png";

import About from '../components/About'
import ApprovalRecognition from '../components/ApprovalRecognition'

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
    <StudentReviews/>
    <CompanySection2/>
    <Brochure2/>
    <SocialMedia2/>

    <EnquiryPopup2/>



    <ApprovalRecognition/>
    <Footer/>

    
    </>
  )
}

export default Page2
