import React from 'react'

import EducationHero from '../components/Education-components/EducationHero'
import Navbar2 from '../components/Navbar3'
import ApprovalRecognition from '../components/ApprovalRecognition'
import Footer from '../components/Footer'

const EducationPage = () => {
  return (
    <>
    
    <Navbar2/>
    <div className='mt-30'>

        <EducationHero/>
      
    </div>

    <ApprovalRecognition/>
    <Footer/>
    
    </>
  )
}

export default EducationPage
