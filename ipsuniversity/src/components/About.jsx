import React from "react";

import Potgr from "../images1/chairmanimage3.jpeg";
import ctm from "../images1/aboutleft.png";
import {
  Leaf,
  Building2,
  GraduationCap,
  BadgeCheck,
  Users,
} from "lucide-react";

import { Check } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

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
      feature4: "100% Placement Support",
    },
  };

  const t = content[language];

  return (
    <section
  id="about"
  className="relative overflow-hidden bg-[#FCFBF8] py-24"
>
  {/* Background Blur */}

  <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-green-100 blur-[120px] opacity-60"></div>

  <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-orange-50 blur-[120px] opacity-70"></div>

  <div className="max-w-[1450px] mx-auto px-5 lg:px-10">

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

      {/* LEFT COLUMN */}

      <div className="lg:col-span-3 flex flex-col gap-7">

        {/* Chairperson */}

        <div className="relative overflow-hidden rounded-[28px] shadow-xl group">

          <img
            src={Potgr}
            alt="Chairperson"
            className="w-full h-[470px] object-cover duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#184D2C]/90 via-[#184D2C]/30 to-transparent"></div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#1F5B34] to-[#2F7641] p-6">

            <h3 className="text-white text-3xl font-bold font-serif">
              Mrs. Shobha Mishra
            </h3>

            <p className="text-green-100 uppercase tracking-widest text-sm mt-1">
              Chairperson
            </p>

            <Leaf
              size={42}
              className="absolute right-5 bottom-5 text-[#A7D36A]"
              fill="#A7D36A"
            />

          </div>

        </div>

        {/* Campus */}

        <div className="overflow-hidden rounded-[28px] shadow-xl">

          <img
            src={ctm}
            alt="Campus"
            className="w-full h-[360px] object-cover duration-500 hover:scale-105"
          />

        </div>

      </div>

      {/* CENTER IMAGE */}

      <div className="lg:col-span-4">

        <div className="overflow-hidden rounded-[30px] shadow-2xl">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
            alt="Students"
            className="w-full h-[840px] object-cover duration-500 hover:scale-105"
          />

        </div>

      </div>

      {/* RIGHT CONTENT */}

      <div className="lg:col-span-5">

        <div className="flex items-center gap-3 text-[#76A43F] uppercase font-semibold tracking-wider">

          <Leaf size={22} fill="#93C45A" />

          <span>{t.about}</span>

        </div>

        <h2 className="mt-6 text-5xl xl:text-6xl font-bold font-serif text-[#184D2C] leading-tight">
          {t.title}
        </h2>

        <p className="mt-8 text-[17px] leading-9 text-gray-600 text-justify">

          IPS University is established under the aegis of
          Deendayal Krishi Avam Gramin Proudyogiki Vikas Sansthan,
          a society registered under the Madhya Pradesh Society
          Registration Act by visionary philanthropists dedicated
          to quality education and social development.

        </p>

        <p className="mt-8 text-[17px] leading-9 text-gray-600 text-justify">

          Since the establishment of the Institute of Professional
          Studies (IPS) in 2005, the institution has remained
          committed to academic excellence, innovation,
          multidisciplinary education, research, industry
          collaboration and value-based learning to prepare
          future-ready professionals.

        </p>

        {/* Stats Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">


                    {/* Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">

            <div className="w-14 h-14 rounded-2xl bg-[#EEF6E7] flex items-center justify-center mb-4">
              <Building2 size={30} className="text-[#2F6B37]" />
            </div>

            <h3 className="text-2xl font-bold text-[#184D2C]">
              80 Acres
            </h3>

            <p className="text-gray-500 mt-1">
              {t.feature1}
            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">

            <div className="w-14 h-14 rounded-2xl bg-[#EEF6E7] flex items-center justify-center mb-4">
              <GraduationCap size={30} className="text-[#2F6B37]" />
            </div>

            <h3 className="text-2xl font-bold text-[#184D2C]">
              9+
            </h3>

            <p className="text-gray-500 mt-1">
              {t.feature2}
            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">

            <div className="w-14 h-14 rounded-2xl bg-[#EEF6E7] flex items-center justify-center mb-4">
              <BadgeCheck size={30} className="text-[#2F6B37]" />
            </div>

            <h3 className="text-2xl font-bold text-[#184D2C]">
              UGC
            </h3>

            <p className="text-gray-500 mt-1">
              {t.feature3}
            </p>

          </div>

          {/* Card 4 */}

          <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">

            <div className="w-14 h-14 rounded-2xl bg-[#EEF6E7] flex items-center justify-center mb-4">
              <Users size={30} className="text-[#2F6B37]" />
            </div>

            <h3 className="text-2xl font-bold text-[#184D2C]">
              100%
            </h3>

            <p className="text-gray-500 mt-1">
              {t.feature4}
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
  );
};



export default About3;