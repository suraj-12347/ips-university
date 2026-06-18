import React from "react";

import DotedRing from "./DotedRing";

import { useLanguage } from "../context/LanguageContext";

const Brochure = () => {

  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Admissions Open 2025–26",

      heading: "Ready to Plant Your Future?",

      para:
        "Join thousands of students who chose IPS University, Gwalior to transform their lives and build meaningful careers with quality education and innovation.",

      btn1: "Apply for Admission",

      btn2: "Download Brochure",
    },

    hi: {
      badge: "प्रवेश खुले हैं 2025–26",

      heading: "क्या आप अपना भविष्य बनाने के लिए तैयार हैं?",

      para:
        "हजारों छात्रों की तरह IPS University, Gwalior से जुड़ें और गुणवत्तापूर्ण शिक्षा व नवाचार के साथ अपने भविष्य को नई दिशा दें।",

      btn1: "प्रवेश के लिए आवेदन करें",

      btn2: "ब्रोशर डाउनलोड करें",
    },

    es: {
      badge: "Admisiones Abiertas 2025–26",

      heading: "¿Listo para Construir Tu Futuro?",

      para:
        "Únete a miles de estudiantes que eligieron IPS University, Gwalior para transformar sus vidas y construir carreras exitosas.",

      btn1: "Solicitar Admisión",

      btn2: "Descargar Folleto",
    },

    fr: {
      badge: "Admissions Ouvertes 2025–26",

      heading: "Prêt à Construire Votre Avenir ?",

      para:
        "Rejoignez des milliers d'étudiants qui ont choisi IPS University, Gwalior pour transformer leur vie grâce à une éducation de qualité.",

      btn1: "Postuler à l'Admission",

      btn2: "Télécharger la Brochure",
    },
  };

  const t = content[language];

  return (
    <section className="w-full py-10 mt-10">

      <div
        className="
          w-full
          max-w-8xl
          mx-auto
          min-h-[420px]
          md:min-h-[380px]
          lg:min-h-[340px]
          relative
          overflow-hidden
          flex
          items-center
          justify-center
        "
        style={{
          background: `
            linear-gradient(
              135deg,
              var(--forest) 0%,
              var(--grass) 100%
            )
          `,
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Rings */}
        <div className="absolute -top-32 -left-16 scale-125  hidden md:block">
          <DotedRing width={320} height={320} />
        </div>

        <div className="absolute -bottom-28 -right-10 rotate-180 scale-125  hidden md:block">
          <DotedRing width={320} height={320} />
        </div>

        {/* Glow */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

        {/* Content */}
        <div
          className="
            relative
            z-10
            w-full
            flex
            flex-col
            items-center
            text-center
            px-5
            sm:px-8
            py-14
          "
        >

          {/* Badge */}
          <span
            className="
              px-5
              py-2
              rounded-full
              border
              border-white/20
              bg-white/10
              backdrop-blur-md
              text-xs
              sm:text-sm
              tracking-wide
              text-white
              mb-5
            "
          >
            {t.badge}
          </span>

          {/* Heading */}
          <h2
            className="
              text-white
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
              max-w-4xl
            "
          >
            {t.heading}
          </h2>

          {/* Paragraph */}
          <p
            className="
              text-white/75
              text-sm
              md:text-base
              leading-7
              max-w-3xl
              mt-5
            "
          >
            {t.para}
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-center
              gap-4
              mt-8
              w-full
              sm:w-auto
            "
          >

            <a
              href="#"
              className="
                h-12
                px-7
                w-full
                sm:w-auto
                rounded-full
                bg-white
                text-[var(--forest)]
                font-semibold
                flex
                items-center
                justify-center
                hover:scale-105
                duration-300
                shadow-lg
              "
            >
              {t.btn1}
            </a>

            <a
              href="#"
              className="
                h-12
                px-7
                w-full
                sm:w-auto
                rounded-full
                border
                border-white/20
                text-white
                font-semibold
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-[var(--forest)]
                duration-300
                backdrop-blur-md
              "
            >
              {t.btn2}
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;