import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Curriculum from './Curriculam'
import CareerOpportunities from './Career'
import Labs from './Labs'
import BpharmFaq from './BpharmFaq'
import BpharmGallery from './BpharmGallery'
import ApplyNow from './Applynow'
import Navbar3 from '../Navbar3'
import Footer from '../Footer'

const Bpharm = () => {
  return (
    <div>
      <Navbar3/>
        <HeroSection/>
        <About/>
          <CareerOpportunities/>
    
        <Labs/>
        <BpharmFaq/>
            <Curriculum/>
            <BpharmGallery/>
            <ApplyNow/>
            <Footer/>
      
      
    </div>
  )
}

export default Bpharm
