import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Menu, X } from "lucide-react";

import Topbar2 from "./Topbar2";
import Topbar3 from "./Topbar3";
import Logo from "./Logo";

const Navbar4 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-[999]">

      <Topbar2 />
      {/* <Topbar3 /> */}

      {/* MAIN */}
      <div className="max-w-[1350px] mx-auto h-[74px] flex items-center justify-between px-4 lg:px-2 lg:pr-6 bg-[var(--white)] mt-5">

        {/* LOGO */}
        <Logo />

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center flex-1 h-full w-full min-w-0">

          <ul className="flex items-center justify-center ml-20 gap-[2px] h-full flex-1 z-10 mb-10 w-full min-w-0">

            {/* HOME */}
            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("home")}
                className={`nav-link ${active === "home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>

            {/* ABOUT */}
            <li className="nav-item group relative">
              <a
                href="#about"
                onClick={() => setActive("about")}
                className={`nav-link ${active === "about" ? "active" : ""}`}
              >
                About Us
              </a>

              <div className="mega-drop z-[1000]">
                <div>
                  <h4 className="mega-title">University</h4>
                  <a href="#">Overview</a>
                  <a href="#">Vision & Mission</a>
                  <a href="#">Why IPS University</a>
                  <a href="#">Message Board</a>
                </div>

                <div>
                  <h4 className="mega-title">Governance</h4>
                  <a href="#">Administration</a>
                  <a href="#">Governing Body</a>
                  <a href="#">Academic Council</a>
                  <a href="#">Board of Management</a>
                </div>

                <div>
                  <h4 className="mega-title">Compliance</h4>
                  <a href="#">NAAC Accreditation</a>
                  <a href="#">NIRF Report</a>
                  <a href="#">Statutory Disclosures</a>
                  <a href="#">Form 5</a>
                </div>
              </div>
            </li>

            {/* SCHOOLS */}
            <li className="nav-item group relative">
              <a
                href="#schools"
                onClick={() => setActive("schools")}
                className={`nav-link ${active === "schools" ? "active" : ""}`}
              >
                Schools
              </a>

              <div className="mega-drop z-[1000]">
                <div>
                  <h4 className="mega-title">Technology</h4>
                  <a href="#">Engineering & Technology</a>
                  <a href="#">Computer Applications</a>
                  <a href="#">Applied Sciences</a>
                </div>

                <div>
                  <h4 className="mega-title">Professional</h4>
                  <a href="#">Management & Commerce</a>
                  <a href="#">Pharmacy</a>
                  <a href="#">Legal Studies</a>
                </div>

                <div>
                  <h4 className="mega-title">Education</h4>
                  <a href="#">Education</a>
                  <a href="#">Physical Education</a>
                  <a href="#">Sciences</a>
                </div>
              </div>
            </li>

            {/* PROGRAMMES */}
            <li className="nav-item group relative">
              <a
                href="#"
                onClick={() => setActive("programmes")}
                className={`nav-link ${active === "programmes" ? "active" : ""}`}
              >
                Programmes
              </a>

              <div className="mega-drop z-[1000]">
                <div>
                  <h4 className="mega-title">Undergraduate</h4>
                  <a href="#">B.Tech / B.E.</a>
                  <a href="#">BCA</a>
                  <a href="#">BBA</a>
                  <a href="#">B.Com</a>
                </div>

                <div>
                  <h4 className="mega-title">Postgraduate</h4>
                  <a href="#">MBA</a>
                  <a href="#">M.Tech</a>
                  <a href="#">M.Pharm</a>
                  <a href="#">Ph.D.</a>
                </div>
              </div>
            </li>

            {/* SIMPLE LINKS */}
            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("admissions")}
                className={`nav-link ${active === "admissions" ? "active" : ""}`}
              >
                Admissions
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("research")}
                className={`nav-link ${active === "research" ? "active" : ""}`}
              >
                Research
              </a>
            </li>

            {/* FIXED STUDENT ZONE */}
            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("students")}
                className={`nav-link whitespace-nowrap ${active === "students" ? "active" : ""}`}
              >
                Student Zone
              </a>
            </li>

          </ul>

          {/* CTA */}
          <div className="ml-auto pl-6">
            <a
              href="#"
              className="h-[42px] px-5 rounded-2xl text-white text-[13px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.03]"
              style={{
                background:
                  "linear-gradient(135deg,var(--forest),var(--grass))",
                boxShadow: "0 8px 18px rgba(49,87,44,.18)",
              }}
            >
              Enquiry Now
            </a>
          </div>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-[var(--forest)]"
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white shadow-md ${
          mobileMenu ? "max-h-[700px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 py-3">

          <a className="mobile-link">Home</a>
          <a className="mobile-link">About Us</a>
          <a className="mobile-link">Schools</a>
          <a className="mobile-link">Programmes</a>
          <a className="mobile-link">Admissions</a>
          <a className="mobile-link">Research</a>
          <a className="mobile-link">Student Zone</a>

        </div>
      </div>

    </nav>
  );
};

export default Navbar4;