// Navbar.jsx

import React, { useState } from "react";
import "./navbar.css";

import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

import logo from "../images1/logogreen2.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 ">

      {/* Main Container */}
      <div className="max-w-[1350px] mx-auto h-[74px] flex items-center justify-between px-4 lg:px-6 bg-[var(--white)]">

        {/* Logo */}
        <a href="#" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="IPS University"
            className="md:h-[165px] h-[90px] object-contain mt-4"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 h-full">

          {/* Center Links */}
          <ul className="flex items-center justify-center gap-[2px] h-full flex-1">

            {/* About */}
            <li className="nav-item">
              <a href="#" className="nav-link" >
                About Us
                <ChevronDown size={14} />
              </a>

              <div className="mega-drop">
                <div>
                  <h4 className="mega-title">
                    University
                  </h4>

                  <a href="#">Overview</a>
                  <a href="#">Vision & Mission</a>
                  <a href="#">Why IPS University</a>
                  <a href="#">Message Board</a>
                </div>

                <div>
                  <h4 className="mega-title">
                    Governance
                  </h4>

                  <a href="#">Administration</a>
                  <a href="#">Governing Body</a>
                  <a href="#">Academic Council</a>
                  <a href="#">Board of Management</a>
                </div>

                <div>
                  <h4 className="mega-title">
                    Compliance
                  </h4>

                  <a href="#">NAAC Accreditation</a>
                  <a href="#">Statutory Disclosures</a>
                  <a href="#">NIRF Report</a>
                  <a href="#">Form 5</a>
                </div>
              </div>
            </li>

            {/* Schools */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                Schools
                <ChevronDown size={14} />
              </a>

              <div className="mega-drop">
                <div>
                  <h4 className="mega-title">
                    Technology
                  </h4>

                  <a href="#">
                    Engineering & Technology
                  </a>

                  <a href="#">
                    Computer Applications
                  </a>

                  <a href="#">
                    Applied Sciences
                  </a>
                </div>

                <div>
                  <h4 className="mega-title">
                    Professional
                  </h4>

                  <a href="#">
                    Management & Commerce
                  </a>

                  <a href="#">Pharmacy</a>

                  <a href="#">
                    Legal Studies
                  </a>
                </div>

                <div>
                  <h4 className="mega-title">
                    Education
                  </h4>

                  <a href="#">Education</a>

                  <a href="#">
                    Physical Education
                  </a>

                  <a href="#">Sciences</a>
                </div>
              </div>
            </li>

            {/* Programmes */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                Programmes
                <ChevronDown size={14} />
              </a>

              <div className="mega-drop">
                <div>
                  <h4 className="mega-title">
                    Undergraduate
                  </h4>

                  <a href="#">B.Tech / B.E.</a>
                  <a href="#">BCA</a>
                  <a href="#">BBA</a>
                  <a href="#">B.Com</a>
                </div>

                <div>
                  <h4 className="mega-title">
                    Postgraduate
                  </h4>

                  <a href="#">MBA</a>
                  <a href="#">M.Tech</a>
                  <a href="#">M.Pharm</a>
                  <a href="#">Ph.D.</a>
                </div>
              </div>
            </li>

            {/* Simple Links */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                Admissions
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                Research
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="nav-link">
                Student Zone
              </a>
            </li>
          </ul>

          {/* Right CTA */}
          <div className="ml-auto pl-6">
            <a
              href="#"
              className="h-[42px] px-5 rounded-lg text-white text-[13px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.03]"
              style={{
                background:
                  "linear-gradient(135deg,var(--forest),var(--grass))",

                boxShadow:
                  "0 8px 18px rgba(49,87,44,.18)",
              }}
            >
              Enquiry Now
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() =>
            setMobileMenu(!mobileMenu)
          }
          className="lg:hidden text-[var(--forest)]"
        >
          {mobileMenu ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-[rgba(49,87,44,.08)] ${
          mobileMenu
            ? "max-h-[700px]"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-3">

          <a href="#" className="mobile-link">
            About Us
          </a>

          <a href="#" className="mobile-link">
            Schools
          </a>

          <a href="#" className="mobile-link">
            Programmes
          </a>

          <a href="#" className="mobile-link">
            Admissions
          </a>

          <a href="#" className="mobile-link">
            Research
          </a>

          <a href="#" className="mobile-link">
            Student Zone
          </a>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;