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
import BpharmNav from './BpharmNav'
import CourceCluster from './CourceCluster'
import ExperientalLearning from './ExperientalLearning'
import BpharmFaculty from './BpharmFaculty'

const Bpharm = () => {
  return (
    <div>
      <Navbar3/>
        <HeroSection/>
        <BpharmNav/>
        <About/>
        <div>
          <Curriculum/>
            <CourceCluster/>
            <ExperientalLearning/>
        </div>
          <CareerOpportunities/>
    
        <Labs/>
        <BpharmFaculty/>
        <BpharmFaq/>
            
            <BpharmGallery/>
            <ApplyNow/>
            <Footer/>
      
      
    </div>
  )
}

export default Bpharm
