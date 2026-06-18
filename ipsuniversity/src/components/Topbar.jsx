// Topbar.jsx

import React from "react";
import { Mail, Phone } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full bg-[var(--grass)]  text-[var(--white)] text-[13px] font-medium  z-50">

      <div className="max-w-[1350px] mx-auto px-4 lg:px-6 h-[35px] flex items-center justify-between"
      
       
      >

        {/* Left */}
        <div className="hidden md:flex items-center gap-5">

          <a
            href="mailto:admission@ipsuniversity.edu"
            className="flex items-center gap-2 text-[13px] font-medium text-[var(--white)] hover:text-[var(--grass)] transition-all duration-200"
          >
            <Mail size={14} />
            admission@ipsuniversity.edu
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 text-[13px] font-medium text-[var(--white)] hover:text-[var(--grass)] transition-all duration-200"
          >
            <Phone size={14} />
            +91 98765 43210
          </a>
        </div>
        {/* middle */}
        <div className=" ml-10 flex w-145 items-center gap-5 h-20 bg-[var(--grass)] text-[var(--grass)] text-[13px] font-medium px-2 rounded z-10 rounded-full">
          <span className="text-[13px]  font-medium bg-[var(--white)]  z-10">
           
            
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 lg:gap-6 ml-auto">

          {/* <a
            href="#"
            className="text-[12.5px] font-medium text-[var(--white)] hover:text-[var(--grass)] transition-all duration-200"
          >
            Admission Portal
          </a> */}

          <a
            href="#"
            className="hidden sm:block text-[12.5px] font-medium text-[var(--white)] hover:text-[var(--grass)] transition-all duration-200"
          >
            Scholarship Policy
          </a>

          <a
            href="#"
            className="hidden md:block text-[12.5px] font-medium text-[var(--white)] hover:text-[var(--grass)] transition-all duration-200"
          >
            Academic Calendar
          </a>

          <a
            href="#"
            className="hidden md:block text-[12.5px] font-medium text-[var(--white)] hover:text-[var(--grass)] transition-all duration-200"
            
          >
            Login →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;