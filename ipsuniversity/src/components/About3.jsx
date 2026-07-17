import React from "react";

import Potgr from "../images1/chairmanimage3.jpeg";
import ctm from "../images1/aboutleft.png";

import { Check } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import {
  Leaf,
  Building2,
  GraduationCap,
  BadgeCheck,
  Users,
} from "lucide-react";

const About3 = () => {

  const { language } = useLanguage();

  const content = {
    en: {
      about: "🌿 About Us",
      title: "IPS UNIVERSITY",

      para1:
        "The Deendayal Krishi Avam Gramin Proudyogiki Vikas Sansthan was registered under the MP Society Registration Act by a group of philanthropically inclined individuals who decided to work together for the betterment of society.",

      para2:
        "The Institute of Professional Studies (IPS), founded in 2005, has always promoted the belief that emotional, intellectual, and physical lives are interconnected.",

      feature1: "80 Acre Campus",
      feature2: "9 Schools",
      feature3: "UGC Approved",
      feature4: "100% Placement Support",
    },

    hi: {
      about: "🌿 हमारे बारे में",
      title: "आईपीएस यूनिवर्सिटी",

      para1:
        "दीनदयाल कृषि एवं ग्रामीण प्रौद्योगिकी विकास संस्थान को समाज के विकास के उद्देश्य से परोपकारी व्यक्तियों के समूह द्वारा स्थापित किया गया था।",

      para2:
        "इंस्टीट्यूट ऑफ प्रोफेशनल स्टडीज़ (IPS), जिसकी स्थापना 2005 में हुई, हमेशा भावनात्मक, बौद्धिक और शारीरिक विकास को साथ लेकर चलने में विश्वास रखता है।",

      feature1: "80 एकड़ परिसर",
      feature2: "9 कॉलेज",
      feature3: "UGC स्वीकृत",
      feature4: "100% प्लेसमेंट",
    },

    es: {
      about: "🌿 Sobre Nosotros",
      title: "UNIVERSIDAD IPS",

      para1:
        "El Instituto Deendayal Krishi Avam Gramin Proudyogiki Vikas fue establecido para el desarrollo de la sociedad.",

      para2:
        "El Instituto de Estudios Profesionales (IPS), fundado en 2005, siempre ha promovido el desarrollo emocional, intelectual y físico.",

      feature1: "Campus de 80 Acres",
      feature2: "3 Colegios",
      feature3: "Aprobado por AICTE",
      feature4: "100% Colocación",
    },

    fr: {
      about: "🌿 À Propos De Nous",
      title: "UNIVERSITÉ IPS",

      para1:
        "L'Institut Deendayal Krishi Avam Gramin Proudyogiki Vikas a été créé pour le développement de la société.",

      para2:
        "L'Institut des Études Professionnelles (IPS), fondé en 2005, promeut le développement émotionnel, intellectuel et physique.",

      feature1: "Campus de 80 Acres",
      feature2: "9 Collèges",
      feature3: "Approuvé par UGC",
      feature4: "100% Placement Assistence",
    },
  };

  const t = content[language];

  return (
    <section
      id="about"
      className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-8 py-16 overflow-hidden pt-35"
    >
      {/* LEFT IMAGE */}
     <div
  className="
    group
    relative
    w-[100%]
    
    lg:w-[25%]
    h-[250px]
    sm:h-[320px]
    lg:h-[450px]
    max-h-[500px]
    overflow-hidden
    lg:rounded-r-2xl
    shadow-xl
  "
>
  <img
    src={ctm}
    alt="Campus"
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
  />

  <div className="absolute inset-0 bg-[var(--inset)] lg:rounded-r-2xl"></div>
</div>

      {/* CENTER CONTENT */}
    <div className="lg:col-span-5 w-full max-w-[800px] lg:w-[40%] lg:h-[470px] flex flex-col justify-between px-5 lg:px-0 ">

  {/* Heading */}
  <div>
    <div className="flex items-center gap-3 text-[#7FAE46] uppercase font-semibold tracking-wider">
      
      <span>{t.about}</span>
    </div>

    <h2 className="mt-2 text-4xl xl:text-3xl font-bold font-serif text-[var(--forest)] leading-tight">
      {t.title}
    </h2>

    <p className="mt-2 text-[13px] xl:text-[15px] leading-6 text-gray-600 text-justify">
      IPS University is established under the aegis of Deendayal Krishi Avam
      Gramin Proudyogiki Vikas Sansthan, a society registered under the
      Madhya Pradesh Society Registration Act by visionary philanthropists
      dedicated to quality education and social development.
    </p>

    <p className="mt-2  text-[13px] xl:text-[15px]  leading-6 text-gray-600 text-justify">
      Since the establishment of the Institute of Professional Studies (IPS)
      in 2005, the institution has remained committed to academic excellence,
      innovation, multidisciplinary education, research, industry
      collaboration and value-based learning to prepare future-ready
      professionals.
    </p>
  </div>

  {/* Stats Cards */}

  <div className="grid grid-cols-2 gap-3 mt-1 xl:mt-2">

    {/* Card 1 */}
    <div className="flex items-center gap-4 rounded-2xl bg-[#F4F8EC] px-5 py-2 shadow-sm hover:shadow-md transition">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCECC8]">
        <Building2 size={24} className="text-[#2F6B37]" />
      </div>

      <div>
        <h3 className="text-md  font-bold text-[var(--forest)] leading-none">
          80 Acre Campus
        </h3>

       
      </div>

    </div>

    {/* Card 2 */}

    <div className="flex items-center gap-4 rounded-2xl bg-[#F4F8EC] px-5 py-4 shadow-sm hover:shadow-md transition">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCECC8]">
        <GraduationCap size={24} className="text-[#2F6B37]" />
      </div>

      <div>
        <h3 className="text-md  font-bold text-[var(--forest)] leading-none">
          9+ Schools
        </h3>

       
      </div>

    </div>

    {/* Card 3 */}

    <div className="flex items-center gap-4 rounded-2xl bg-[#F4F8EC] px-5 py-4 shadow-sm hover:shadow-md transition">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCECC8]">
        <BadgeCheck size={24} className="text-[#2F6B37]" />
      </div>

      <div>
        <h3 className="text-md  font-bold text-[var(--forest)] leading-none">
          UGC Approved
        </h3>

       
      </div>

    </div>

    {/* Card 4 */}

    <div className="flex items-center gap-4 rounded-2xl bg-[#F4F8EC] px-5 py-4 shadow-sm hover:shadow-md transition">

      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#DCECC8]">
        <Users size={24} className="text-[#2F6B37]" />
      </div>

      <div>
        <h3 className="text-md font-bold text-[var(--forest)] leading-none">
          100% Placement Assistence
        </h3>

        
      </div>

    </div>

  </div>

</div>

      {/* RIGHT IMAGE */}
    <div className="relative  h-[450px] lg:w-[600px] w-full lg:rounded-l-2xl overflow-hidden  group">

  {/* Image */}
  <img
    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    alt="Chairperson"
    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
  />

  {/* Bottom Green Card */}
  <div className="absolute -bottom-3 left-0 w-full hidden lg:block">

    <svg
      viewBox="0 0 500 120"
      className="w-full h-16 block"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 C120,20 300,130 500,40 L500,120 L0,120 Z"
        fill="#3a6d33"
      />
    </svg>

    <div className="bg-[var(--forest)]  px-10 pb-7 pt-3 relative">

      <div className="absolute -top-12 left-8 w-10 h-10 rounded-full bg-[#DCE5A7] flex items-center justify-center shadow-lg">
        <span className="text-[var(--forest)] text-3xl font-bold">❝</span>
      </div>

      <h3 className=" text-white text-[22px] font-serif font-semibold">
        Mrs.XYZ
      </h3>

      <div className="flex items-center gap-3 mt-2">
        <p className="uppercase tracking-[3px] text-[#D7D59C] text-sm">
          Chairperson
        </p>

        <span className="w-10 h-[2px] bg-[#D7D59C]"></span>
      </div>

    </div>
  </div>

</div>
    </section>
  );
};

export default About3;