import React from 'react'


import Navbar2 from '../components/Navbar3'
import ApprovalRecognition from '../components/ApprovalRecognition'
import Footer from '../components/Footer'
import PrincipalDesk from '../components/Pharmacy-components/PrincipalDeskPharma'
import AcademicsSection from '../components/ctm-component/AcademicsSection'
import EducationGallery from '../components/Education-components/EducationGallery'
import PlacementsSection from '../components/ctm-component/PlacementsSection'
import AdmissionContact from '../components/Pharmacy-components/AdmissionContect2'
import TestimonialsSection from '../components/ctm-component/TestimonialsSection'
import RecruitersSection from '../components/ctm-component/RecruitersSection'
import About5 from '../components/Aboute5'
import PharmacyHero from '../components/Pharmacy-components/PharmacyHero'
import PharmaGallery from '../components/Pharmacy-components/PharmaGallery'
import StudentsCouncil from '../components/student-components/StudentsCounsil'


export const coursesData = {
  UG: [
    {
      name: "B.Pharm. (Bachelor of Pharmacy)",
      route: "/school-of-pharmacy/b-pharm",
    },
    {
      name: "D.Pharm. (Diploma in Pharmacy)",
      route: "/school-of-pharmacy/d-pharm",
    },
  ],

  PG: [
    {
      name: "M.Pharm. (Pharmaceutics)",
      route: "/school-of-pharmacy/m-pharm-pharmaceutics",
    },
    {
      name: "M.Pharm. (Pharmacology)",
      route: "/school-of-pharmacy/m-pharm-pharmacology",
    },
    {
      name: "M.Pharm. (Pharmaceutical Chemistry)",
      route: "/school-of-pharmacy/m-pharm-pharmaceutical-chemistry",
    },
    {
      name: "M.Pharm. (Quality Assurance)",
      route: "/school-of-pharmacy/m-pharm-quality-assurance",
    },
  ],

  PhD: [
    {
      name: "Ph.D. in Pharmaceutical Sciences",
      route: "/school-of-pharmacy/phd",
    },
  ],

  Diploma: [
    {
      name: "Diploma in Pharmacy (D.Pharm.)",
      route: "/school-of-pharmacy/d-pharm",
    },
  ],

  Certificate: [
    {
      name: "Certificate in Clinical Pharmacy",
      route: "/school-of-pharmacy/clinical-pharmacy",
    },
    {
      name: "Certificate in Pharmacovigilance",
      route: "/school-of-pharmacy/pharmacovigilance",
    },
    {
      name: "Certificate in Drug Regulatory Affairs",
      route: "/school-of-pharmacy/drug-regulatory-affairs",
    },
    {
      name: "Certificate in Pharmaceutical Quality Control",
      route: "/school-of-pharmacy/quality-control",
    },
  ],
};

export const courseImages = {
  "B.Pharm. (Bachelor of Pharmacy)":
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",

  "D.Pharm. (Diploma in Pharmacy)":
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",

  "M.Pharm. (Pharmaceutics)":
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=80",

  "M.Pharm. (Pharmacology)":
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",

  "M.Pharm. (Pharmaceutical Chemistry)":
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80",

  "M.Pharm. (Quality Assurance)":
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",

  "Ph.D. in Pharmaceutical Sciences":
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80",

  "Diploma in Pharmacy (D.Pharm.)":
    "https://images.unsplash.com/photo-1580281657527-47b8b2b2f91f?auto=format&fit=crop&w=900&q=80",

  "Certificate in Clinical Pharmacy":
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",

  "Certificate in Pharmacovigilance":
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",

  "Certificate in Drug Regulatory Affairs":
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=900&q=80",

  "Certificate in Pharmaceutical Quality Control":
    "https://images.unsplash.com/photo-1582719368391-7f7f9b1c48b3?auto=format&fit=crop&w=900&q=80",
};

const EducationPage = () => {
  return (
    <>
    
    <Navbar2/>
    <div className='mt-30'>

       <PharmacyHero/>
       <PrincipalDesk/>
            <AcademicsSection
  coursesData={coursesData}
  courseImages={courseImages}
/>

<PharmaGallery/>

{/* <EducationGallery/>



 */}

<PlacementsSection/>

<TestimonialsSection/>
<RecruitersSection/>
      
    </div>

    {/* <ApprovalRecognition/> */}
    <AdmissionContact/>
    
    <Footer/>

   
    
   
    
    </>
  )
}

export default EducationPage
