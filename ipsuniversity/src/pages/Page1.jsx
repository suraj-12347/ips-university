import React from 'react'
import Navbar2 from '../components/Navbar2'
import Herosec from '../components/Herosec'
import ChatBot from '../components/ChatBot'
import About4 from '../components/About4'
import ThemeSwitcher from '../components/ThemeSwitcher'
import StatusBar from '../components/StatusBar'
import AboutUs from '../components/AboutUs'
import SchoolsSection2 from '../components/SchoolSecction2'
import LatestBanner from '../components/LatestBanner'
import NoticeSection3 from '../components/NoticeSection3'
import Navbar4 from '../components/Navbar4'
import EnquiryPopup from '../components/EnquiryPopup'

import ReviewCard1 from '../components/student-rev/ReviewCard'
import ReviewCard2 from '../components/student-rev/ReviewCard2'
import ReviewCard3 from '../components/student-rev/ReviewCard3'
import ReviewCard4 from '../components/student-rev/ReviewCard4'
import ReviewCard5 from '../components/student-rev/ReviewCard5'
import StudentReviews2 from '../components/student-rev/StudentReview2'
import CompanySection from '../components/CompanySection'
import { Import } from 'lucide-react'
import Footer from '../components/Footer'
import Brochure from '../components/Broucher'
import SocialMedia from '../components/SocialMedia'


const Page1 = () => {
  return (
    <>
    {/* <Navbar2/> */}
    <Navbar4/>
    <Herosec/>
    <ChatBot/>
    <About4/>
    <StatusBar/>
    <LatestBanner/>
    {/* <AboutUs/> */}
    <SchoolsSection2/>

    <ThemeSwitcher/>

    <NoticeSection3/>
    <EnquiryPopup/>
    {/* <GalleryCarousel/> */}

    
    <StudentReviews2/>   
    <CompanySection/> 
    <Brochure/>
    <SocialMedia/>
    <Footer/>
   
    </>
  )
}

export default Page1
