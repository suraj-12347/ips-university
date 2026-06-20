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
import GalleryCarousel2 from '../components/GalleryCarousel2'
import StudentReviews from '../components/student-rev/StudentReview'
import About5 from '../components/Aboute5'
import CompanySection2 from '../components/CompanySection2'
import SocialMedia2 from '../components/SocialMedia2'
import Brochure2 from '../components/Brochure2'
import Footer from '../components/Footer'
import Topbar3 from '../components/Topbar3'

const Page2 = () => {
  return (
    <>
     {/* <Topbar3/>  */}
    
    <Navbar3/>
   
    <Herosec/>
    <ChatBot/>
    <About3/>
    {/* <About5/> */}
    <StatsBar/>
    <LatestBanner/>
    
    <SchoolsSection/>
    {/* <ThemeSwitcher/> */}

    <NoticeSection2/>
    <EnquiryPopup2/>
    <GalleryCarousel2/>
    <StudentReviews/>
    <CompanySection2/>
    <Brochure2/>
    <SocialMedia2/>
    <Footer/>

    
    </>
  )
}

export default Page2
