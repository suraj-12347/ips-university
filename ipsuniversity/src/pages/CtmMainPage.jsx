import Navbar3 from "../components/Navbar3";
import HeroSection from "../components/ctm-component/HeroSection";

import AcademicsSection from "../components/ctm-component/AcademicsSection";
import NewsEventsSection from "../components/ctm-component/NewsEventsSection";
import GallerySection from "../components/ctm-component/GallerySection";
import PlacementsSection from "../components/ctm-component/PlacementsSection";
import TestimonialsSection from "../components/ctm-component/TestimonialsSection";
import RecruitersSection from "../components/ctm-component/RecruitersSection";
import AboutSection from "../components/ctm-component/AboutSection2";
import Footer from "../components/Footer";
import Chatbot from "../components/ChatBot";
import AdmissionContact from "../components/ctm-component/AdmissionContect3";
import ctmImg from '../images1/ctmlongpng4.png'


 const coursesData = {
  UG: [
    { name: "Computer Science Engineering", route: "/page5" },
    { name: "Civil Engineering" },
    { name: "Electrical Engineering" },
    { name: "Mechanical Engineering" },
    { name: "Electronics & Communication Engineering" },
  ],

  PG: [
    { name: "Civil Engineering (CTM)" },
    { name: "Mechanical Engineering (Machine Design)" },
    { name: "MBA (Dual Specialization)" },
  ],

  PhD: [
    { name: "Civil Engineering (CTM)" },
    { name: "Mechanical Engineering (Machine Design)" },
    { name: "Computer Science Engineering" },
    { name: "Electrical Engineering" },
  ],

  Diploma: [
    { name: "Diploma in Civil Engineering" },
    { name: "Diploma in Mechanical Engineering" },
    { name: "Diploma in Electrical Engineering" },
    { name: "Diploma in Computer Science Engineering" },
  ],

  Certificate: [
    { name: "Certificate in AutoCAD" },
    { name: "Certificate in Programming & Web Development" },
    { name: "Certificate in Industrial Safety" },
    { name: "Certificate in Data Analytics" },
  ],
};

 const courseImages = {
  "Computer Science Engineering":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",

  "Civil Engineering":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",

  "Electrical Engineering":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",

  "Mechanical Engineering":
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",

  "Electronics & Communication Engineering":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",

  "MBA (Dual Specialization)":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",

  "Civil Engineering (CTM)":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",

  "Mechanical Engineering (Machine Design)":
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",

  "Diploma in Civil Engineering":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",

  "Diploma in Mechanical Engineering":
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",

  "Diploma in Electrical Engineering":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",

  "Diploma in Computer Science Engineering":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",

  "Certificate in AutoCAD":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",

  "Certificate in Programming & Web Development":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",

  "Certificate in Industrial Safety":
    "https://images.unsplash.com/photo-1581092918484-8313d7e48074?auto=format&fit=crop&w=800&q=80",

  "Certificate in Data Analytics":
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
};


const CtmMainPage = () => {
  return (
    <>
     <div className="w-full  md:mt-10  ">
       <Navbar3 />
      <HeroSection />
      <AboutSection />
      <AcademicsSection
  coursesData={coursesData}
  courseImages={courseImages}
/>
      {/* <NewsEventsSection /> */}
       <GallerySection />
      
      <PlacementsSection />
     
      <TestimonialsSection GalleryBg={ctmImg} />
      <RecruitersSection />
      <AdmissionContact/>

    
      {/* <Chatbot/> */}
      <Footer/>
     </div>
    </>
  );
};

export default CtmMainPage;
