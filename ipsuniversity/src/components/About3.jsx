import React from "react";

import Potgr from "../images1/chairmanimage3.jpeg";
import ctm from "../images1/ctm.jpg";

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

      feature1: "80 Acres Campus",
      feature2: "3 Colleges",
      feature3: "AICTE Approved",
      feature4: "100% Placement",
    },

    hi: {
      about: "🌿 हमारे बारे में",
      title: "आईपीएस यूनिवर्सिटी",

      para1:
        "दीनदयाल कृषि एवं ग्रामीण प्रौद्योगिकी विकास संस्थान को समाज के विकास के उद्देश्य से परोपकारी व्यक्तियों के समूह द्वारा स्थापित किया गया था।",

      para2:
        "इंस्टीट्यूट ऑफ प्रोफेशनल स्टडीज़ (IPS), जिसकी स्थापना 2005 में हुई, हमेशा भावनात्मक, बौद्धिक और शारीरिक विकास को साथ लेकर चलने में विश्वास रखता है।",

      feature1: "80 एकड़ परिसर",
      feature2: "3 कॉलेज",
      feature3: "AICTE स्वीकृत",
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
      feature2: "3 Collèges",
      feature3: "Approuvé par AICTE",
      feature4: "100% Placement",
    },
  };

  const t = content[language];

  return (
    <section
      id="about"
      className="w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-10 py-16 overflow-hidden pt-35"
    >
      {/* LEFT IMAGE */}
      <div
        className="
          relative
          w-[90%]
          sm:w-[80%]
          lg:w-[30%]
          h-[250px]
          sm:h-[320px]
          lg:h-[400px]
          lg:rounded-r-2xl
          bg-cover
          bg-center
          shadow-xl
        "
        style={{
          backgroundImage: `url(${ctm})`,
        }}
      >
        <div className="absolute inset-0 bg-[var(--inset)] lg:rounded-r-2xl"></div>
      </div>

      {/* CENTER CONTENT */}
      <div
        className="
          relative
          w-full
          lg:w-1/2
          px-5
          sm:px-8
          lg:px-4
          text-left
          z-20
        "
      >
        <p className="text-sm mb-2 flex justify-start items-center gap-2 text-[var(--grass)]">
          {t.about}
        </p>

        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-[var(--forest)] leading-tight">
          {t.title}
        </h2>

        <p className="text-sm sm:text-[15px] mb-4 text-gray-600 leading-7 text-justify">
          {t.para1}
        </p>

        <p className="text-sm sm:text-[15px] mb-4 text-gray-600 leading-7 text-justify">
          {t.para2}
        </p>

        {/* FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">

          <div className="flex items-center gap-2 bg-[var(--grass)]/30 p-2 rounded-full">
            <span className="text-[var(--grass)] bg-[var(--grass)]/20 p-1 rounded-full">
              <Check absoluteStrokeWidth />
            </span>

            <p className="text-sm text-[var(--forest)]">
              {t.feature1}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[var(--grass)]/30 p-2 rounded-full">
            <span className="text-[var(--grass)] bg-[var(--grass)]/20 p-1 rounded-full">
              <Check absoluteStrokeWidth />
            </span>

            <p className="text-sm text-[var(--forest)]">
              {t.feature2}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[var(--grass)]/30 p-2 rounded-full">
            <span className="text-[var(--grass)] bg-[var(--grass)]/20 p-1 rounded-full">
              <Check absoluteStrokeWidth />
            </span>

            <p className="text-sm text-[var(--forest)]">
              {t.feature3}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[var(--grass)]/30 p-2 rounded-full">
            <span className="text-[var(--grass)] bg-[var(--grass)]/20 p-1 rounded-full">
              <Check absoluteStrokeWidth />
            </span>

            <p className="text-sm text-[var(--forest)]">
              {t.feature4}
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
          relative
          w-[90%]
          sm:w-[85%]
          lg:w-[60%]
          h-[250px]
          sm:h-[320px]
          lg:h-[400px]
          lg:rounded-l-2xl
          bg-cover
          bg-left
          shadow-xl
          hidden
          xl:block
        "
        style={{
          backgroundImage: `url(${Potgr})`,
        }}
      >
        <div className="absolute inset-0 bg-[var(--inset)]/50 lg:rounded-l-2xl"></div>
      </div>
    </section>
  );
};

export default About3;