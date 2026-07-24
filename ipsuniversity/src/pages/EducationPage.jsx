import React from 'react'

import EducationHero from '../components/Education-components/EducationHero'
import Navbar2 from '../components/Navbar3'
import ApprovalRecognition from '../components/ApprovalRecognition'
import Footer from '../components/Footer'
import PrincipalDesk from '../components/Education-components/Principal'
import AcademicsSection from '../components/ctm-component/AcademicsSection'
import EducationGallery from '../components/Education-components/EducationGallery'
import PlacementsSection from '../components/ctm-component/PlacementsSection'
import AdmissionContact from '../components/Education-components/AddmissionContect'
import TestimonialsSection from '../components/ctm-component/TestimonialsSection'
import RecruitersSection from '../components/ctm-component/RecruitersSection'
import About5 from '../components/Aboute5'
import EducationImg from '../images1/edubuild8.png'


export const coursesData = {
  UG: [
    { name: "B.Ed. (Bachelor of Education)", route: "/school-of-education/b-ed" },
    { name: "B.A. B.Ed. Integrated" },
    { name: "B.Sc. B.Ed. Integrated" },
  ],

  PG: [
    { name: "M.Ed. (Master of Education)" },
    { name: "M.A. in Education" },
  ],

  PhD: [
    { name: "Ph.D. in Education" },
  ],

  Diploma: [
    { name: "Diploma in Guidance & Counselling" },
    { name: "Diploma in Educational Technology" },
  ],

  Certificate: [
    { name: "Certificate in Inclusive Education" },
    { name: "Certificate in Classroom Management" },
    { name: "Certificate in Educational Psychology" },
    { name: "Certificate in Digital Teaching Skills" },
  ],
};

export const courseImages = {
  "B.Ed. (Bachelor of Education)":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",

  "B.A. B.Ed. Integrated":
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",

  "B.Sc. B.Ed. Integrated":
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",

  "M.Ed. (Master of Education)":
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",

  "M.A. in Education":
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",

  "Ph.D. in Education":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",

  "Diploma in Guidance & Counselling":
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",

  "Diploma in Educational Technology":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",

  "Certificate in Inclusive Education":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",

  "Certificate in Classroom Management":
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",

  "Certificate in Educational Psychology":
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80",

  "Certificate in Digital Teaching Skills":
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
};

const EducationPage = () => {
  return (
    <>
    
    <Navbar2/>
    <div className='mt-30'>

        <EducationHero/>
        <PrincipalDesk/>
            <AcademicsSection
  coursesData={coursesData}
  courseImages={courseImages}
/>

<EducationGallery/>
<PlacementsSection/>

<TestimonialsSection GalleryBg={EducationImg} />
<RecruitersSection/>
      
    </div>

    {/* <ApprovalRecognition/> */}
    <AdmissionContact/>
    <Footer/>
    
    
    </>
  )
}

export default EducationPage
