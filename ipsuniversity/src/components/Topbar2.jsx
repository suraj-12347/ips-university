// Topbar.jsx

import React from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { IoEarthSharp ,IoGlobeOutline } from "react-icons/io5";

const Topbar2 = () => {
  return (
    <div className="w-full bg-[var(--forest)]  text-[var(--white)] text-[13px] font-medium  z-50 scrollb">

      <div className="max-w-[1350px] mx-auto px-4 lg:px-6 h-[35px] flex items-center justify-between"
      
       
      >

        {/* Left */}
        <div className="flex items-center gap-5">

          <a
            href="https://wa.me/+919876543210"
            className="flex items-center gap-2 text-[13px] font-medium text-[var(--white)] hover:-translate-y-1 transition-all duration-200 text-[var(--white)] z-10"
          >
            <FaWhatsapp size={16} />
            
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[13px] font-medium text-[var(--white)]  hover:-translate-y-1   transition-all duration-200"
          >
            <Phone size={14} />
            +91 98765 43210
          </a>

           <div className="relative group z-20">
    
    <button
      className="
        flex items-center gap-2
        text-[13px]
        font-medium
        text-[var(--white)]
        cursor-pointer
        hover:-translate-y-1
        transition-all
        duration-200
      "
    >
      <IoGlobeOutline size={16} />
      Eng
    </button>

    {/* Dropdown */}
    <div
      className="
        absolute
        top-full
        right-0
        mt-3
        w-40
        bg-white
        rounded-xl
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
      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-all text-[var(--forest)]">
        English
      </button>

      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-all text-[var(--forest)]">
        हिन्दी
      </button>

      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-all text-[var(--forest)]">
        Español
      </button>

      <button className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-all text-[var(--forest)]">
        Français
      </button>
    </div>
  </div>

        </div>
        {/* middle */}



        <div className=" ml-10 flex w-[65%] items-center gap-5 h-52 bg-[var(--forest)] text-[var(--forest)] text-[13px] font-medium px-2 rounded z-10 rounded-full md:flex items-center justify-center hidden">
          
          <a
            href="#"
            className="hidden sm:block text-[12.5px] font-medium text-[var(--white)] hover:-translate-y-1 transition-all duration-200"
          >
            Scholarship Policy
          </a>

          <a
            href="#"
            className="hidden md:block text-[12.5px] font-medium text-[var(--white)] hover:-translate-y-1 transition-all duration-200"
          >
            Academic Calendar
          </a>
          <span className="text-[13px]  font-medium bg-[var(--white)]  z-10">
           
            
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 lg:gap-6 ml-auto ">

          <a
            href="#"
            className="text-[12.5px] hidden md:inline-block font-medium text-[var(--white)] hover:-translate-y-1 transition-all duration-200 mt-2 md:mt-0"
          >
            Admission Portal
          </a>
          

          {/* <a
            href="#"
            className="hidden md:block text-[12.5px] font-medium text-[var(--white)] hover:text-[var(--grass)] transition-all duration-200"
          >
            Academic Calendar
          </a> */}

          <a
            href="#"
            className=" block text-[12.5px] font-medium text-[var(--white)] hover:-translate-y-1 transition-all duration-200"
            
          >
            Login →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar2;