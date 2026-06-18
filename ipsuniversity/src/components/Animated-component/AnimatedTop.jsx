// Topbar.jsx

import React from "react";
import { Mail, Phone, Globe } from "lucide-react";
import edubuild3 from '../../images1/edubuild3.png'

const Topbar2 = () => {
  return (
    <div className=" w-full bg-[var(--grass)]  text-[var(--white)] text-[13px] font-medium  z-50"
    >

      <div className="max-w-[1350px] relative mx-auto px-4 lg:px-6 h-[35px] flex items-center justify-between"
      
        style={{
                  backgroundImage: `url(${edubuild3})`,
                  backgroundSize:"cover",
                  backgroundPosition:"center"
                }} 

      >
        {/* <div className="absolute inset-0  bg-[var(--forest)]/60 "></div> */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Left */}
        

 <div className="flex items-center gap-5">

  {/* MAIL */}
  <a
    href="mailto:admission@ipsuniversity.edu"
    className="flex items-center gap-2 text-[13px] font-medium text-[var(--white)] hover:scale-[1.3] transition-all duration-200 z-10"
  >
    <Mail size={14} />
  </a>

  {/* PHONE */}
  <a
    href="tel:+919876543210"
    className="flex items-center gap-2 text-[13px] font-medium text-[var(--white)] hover:scale-[1.03] transition-all duration-200 z-10"
  >
    <Phone size={14} />
    +91 98765 43210
  </a>

  {/* LANGUAGE DROPDOWN */}
  <div className="relative group z-20">
    
    <button
      className="
        flex items-center gap-2
        text-[13px]
        font-medium
        text-[var(--white)]
        cursor-pointer
        hover:scale-[1.1]
      "
    >
      <Globe size={15} />
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



      <div
  className="relative ml-10 flex w-[65%] items-center gap-5 text-[var(--grass)] text-[13px] font-medium px-2 rounded-full hidden md:flex justify-center"
  style={{
    backgroundImage: `url(${edubuild3})`,
    backgroundSize: "contain",
    animation: "floatIn 0.9s ease-out forwards",
  }}
>

            {/* <div className="absolute inset-0  bg-[var(--forest)]/60 rounded-full"></div> */}
            <div className="absolute inset-0 bg-black/45 rounded-full"></div>
          
          <a
            href="#"
            className="hidden sm:block text-[12.5px] font-medium text-[var(--white)] hover:scale-[1.03] transition-all duration-200 z-10"
          >

            Scholarship Policy
          </a>

          <a
            href="#"
            className="hidden md:block text-[12.5px] font-medium text-[var(--white)] hover:scale-[1.03] transition-all duration-200 z-10"
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
            className="text-[12.5px] font-medium text-[var(--white)]  transition-all duration-200 z-10 hover:scale-[1.03]"
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
            className="hidden md:block text-[12.5px] font-medium text-[var(--white)] hover:scale-[1.03] transition-all duration-200 z-10"
            
          >
            Login →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar2;