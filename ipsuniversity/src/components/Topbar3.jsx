// Topbar3.jsx

import React from "react";
import { Phone, Globe } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import edubuild3 from "../images1/edubuild3.png";

import { useLanguage } from "../context/LanguageContext";
import { IoEarthSharp ,IoGlobeOutline } from "react-icons/io5";

const Topbar3 = () => {
  const { t, setLanguage } = useLanguage();

  return (
    <div className="w-full bg-[var(--grass)] text-[var(--white)] text-[13px] font-medium z-50">
      <div
        className="max-w-[1350px] relative mx-auto px-4 lg:px-6 h-[35px] flex items-center justify-between"
        style={{
          backgroundImage: `url(${edubuild3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[var(--inset)]"></div>

        {/* LEFT */}
      <div className="flex items-center gap-5 z-10 flex-nowrap">
  
  {/* WhatsApp */}
  <a
    href="https://wa.me/919876543210"
    className="inline-flex items-center gap-2 hover:-translate-y-1 transition-all duration-200 whitespace-nowrap"
  >
    <FaWhatsapp size={16} />
  </a>

  {/* Phone */}
  <a
    href="tel:+919876543210"
    className="inline-flex items-center gap-2 hover:scale-[1.03] transition-all duration-200 whitespace-nowrap"
  >
    <Phone size={14} />
    <span className="whitespace-nowrap">+91 9876543210</span>
  </a>

  
          {/* Language Dropdown */}
          <div className="relative group z-50">
            <button
              className="
                flex items-center gap-2
                cursor-pointer
                hover:scale-[1.06]
                transition-all duration-200
              "
            >
               <IoGlobeOutline size={16} />
                   
              {t.lang||"Eng"}
            </button>

            {/* Dropdown */}
            <div
              className="
                absolute
                top-full
                right-0
                mt-3
                w-44
                bg-white
                rounded-2xl
                shadow-2xl
                overflow-hidden
                opacity-0
                invisible
                group-hover:opacity-100
                group-hover:visible
                transition-all
                duration-300
              "
            >
              <button
                onClick={() => setLanguage("en")}
                className="
                  w-full text-left px-4 py-3 text-sm
                  hover:bg-gray-100
                  transition-all
                  text-[var(--forest)]
                "
              >
                🇺🇸 English
              </button>

              <button
                onClick={() => setLanguage("hi")}
                className="
                  w-full text-left px-4 py-3 text-sm
                  hover:bg-gray-100
                  transition-all
                  text-[var(--forest)]
                "
              >
                🇮🇳 हिन्दी
              </button>

              <button
                onClick={() => setLanguage("es")}
                className="
                  w-full text-left px-4 py-3 text-sm
                  hover:bg-gray-100
                  transition-all
                  text-[var(--forest)]
                "
              >
                🇪🇸 Español
              </button>

              <button
                onClick={() => setLanguage("fr")}
                className="
                  w-full text-left px-4 py-3 text-sm
                  hover:bg-gray-100
                  transition-all
                  text-[var(--forest)]
                "
              >
                🇫🇷 Français
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE */}
        <div
          className="
            relative
            ml-10
            w-[65%]
            h-52
            hidden md:flex
            items-center
            justify-center
            gap-5
            px-2
            rounded-full
            overflow-hidden
            z-10
          "
          style={{
            backgroundImage: `url(${edubuild3})`,
            backgroundSize: "contain",
          }}
        >
          <div className="absolute inset-0 bg-[var(--inset)] rounded-full"></div>

          <a
            href="#"
            className="
              text-[14.5px]
              hover:scale-[1.03]
              transition-all duration-200
              z-10
            "
          >
            {t.scholarship||"Scholarship Policy"}
          </a>

          <a
            href="#"
            className="
              text-[14.5px]
              hover:scale-[1.03]
              transition-all duration-200
              z-10
            "
          >
            {t.calendar ||"Acadmic Calendar"}
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 lg:gap-6 ml-auto z-10">
          <a
            href="#"
            className="
              text-[13.5px]
              hover:scale-[1.03]
              transition-all duration-200
            "
          >
            {t.admission||"Admission Portal"}
          </a>

          <a
            href="#"
            className="
              hidden md:block
              text-[13.5px]
              hover:scale-[1.03]
              transition-all duration-200
            "
          >
            {t.login||"Login"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar3;