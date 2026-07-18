// Topbar.jsx

import React from "react";
import { Phone, Mail, Globe } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="w-full bg-[var(--forest)] text-white h-[40px] hidden lg:flex items-center">
      <div className="max-w-[1500px] mx-auto w-full px-10 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-8 text-[14px]">

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 hover:text-green-200 duration-300"
          >
            <Phone size={15} />
            +91 9876543210
          </a>

          <a
            href="mailto:info@ipsuniversity.edu"
            className="flex items-center gap-2 hover:text-green-200 duration-300"
          >
            <Mail size={15} />
            info@ipsuniversity.edu
          </a>

        </div>

        {/* CENTER */}
        <div className="flex items-center gap-8 text-[14px]">

          <a href="#" className="hover:text-green-200 duration-300">
            Scholarship
          </a>

          <a href="#" className="hover:text-green-200 duration-300">
            Academic Calendar
          </a>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          <button className="flex items-center gap-2 hover:text-green-200 duration-300">
            <Globe size={16} />
            English
          </button>

          <a href="#" className="hover:text-green-200 duration-300">
            Admission Portal
          </a>

          <a href="#" className="hover:text-green-200 duration-300">
            Login
          </a>

          <div className="flex items-center gap-3">

            <a className="hover:text-green-200 duration-300">
              <FaFacebookF />
            </a>

            <a className="hover:text-green-200 duration-300">
              <FaInstagram />
            </a>

            <a className="hover:text-green-200 duration-300">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Topbar;