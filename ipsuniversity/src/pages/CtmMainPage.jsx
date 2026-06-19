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

const CtmMainPage = () => {
  return (
    <>
     <div className="w-full md:mt-30 lg:mt-30 ">
       <Navbar3 />
      <HeroSection />
      <AboutSection />
      <AcademicsSection />
      {/* <NewsEventsSection /> */}
       <GallerySection />
      
      <PlacementsSection />
     
      <TestimonialsSection />
      <RecruitersSection />
      <Chatbot/>
      <Footer/>
     </div>
    </>
  );
};

export default CtmMainPage;
