// Navbar.jsx

import React, { useState,useEffect } from "react";
import "./navbar.css";
import { Menu, X } from "lucide-react";

import logored from "../images1/logored.png";
import logogreen from "../images1/logogreen2.png";
import Topbar2 from "./Topbar2";
import Topbar3 from './Topbar3'

import logopurple from "../images1/logopurple.png";
import logoblue from "../images1/logogreen2.png";
import logodark from "../images1/logored.png";
import orange from "../images1/logoorange.png";
import Logo from "./Logo";

const themeLogos = {
  green: logogreen,
  red: logored,
  purple: logopurple,
  blue: logoblue,
  dark: logodark,
  orange: orange,
};

const Navbar2 = () => {
     const [mobileMenu, setMobileMenu] = useState(false);
      const [active, setActive] = useState("home");
      const [theme, setTheme] = useState("green");
    
      useEffect(() => {
        const checkTheme = () => {
          const html = document.documentElement;
    
          if (html.classList.contains("red")) {
            setTheme("red");
          } 
          else if (html.classList.contains("purple")) {
            setTheme("purple");
          } 
          else if (html.classList.contains("blue")) {
            setTheme("blue");
          } 
          else if (html.classList.contains("dark")) {
            setTheme("dark");
          } 
          else if(html.classList.contains("orange")) {
            setTheme("orange"); 
          }
          else {
            setTheme("green");
          }
        };
    
        checkTheme();
    
        const observer = new MutationObserver(checkTheme);
    
        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["class"],
        });
    
        return () => observer.disconnect();
      }, []);
    
  
  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50">
      <Topbar2 />
      {/* <Topbar3/> */}
      

      {/* MAIN */}
      <div className="max-w-[1350px] mx-auto h-[74px] flex items-center justify-between px-4 lg:px-6 bg-[var(--white)] mt-5">

        {/* LOGO */}
        {/* <a href="#" className="flex items-center shrink-0">
          <img
            src={themeLogos[theme]}
            alt="logo"
            className="md:h-[70px] h-[60px] object-contain mb-5"
          />
        </a> */}
        <Logo/>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center flex-1 h-full">

          <ul className="flex items-center justify-start ml-20 gap-[2px] h-full flex-1 z-10 mb-10">

            {/* HOME */}
            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("home")}
                className={`nav-link ${
                  active === "home" ? "active" : ""
                }`}
              >
                Home
              </a>
            </li>

            {/* ABOUT */}
            <li className="nav-item group relative">
              <a
                href="#"
                onClick={() => setActive("about")}
                className={`nav-link ${
                  active === "about" ? "active" : ""
                }`}
              >
                About Us
              </a>

              <div className="mega-drop z-20">
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
                href="#"
                onClick={() => setActive("schools")}
                className={`nav-link ${
                  active === "schools" ? "active" : ""
                }`}
              >
                Schools
              </a>

              <div className="mega-drop z-20">
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
                className={`nav-link ${
                  active === "programmes" ? "active" : ""
                }`}
              >
                Programmes
              </a>

              <div className="mega-drop z-20">
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
                className={`nav-link ${
                  active === "admissions" ? "active" : ""
                }`}
              >
                Admissions
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("research")}
                className={`nav-link ${
                  active === "research" ? "active" : ""
                }`}
              >
                Research
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("students")}
                className={`nav-link ${
                  active === "students" ? "active" : ""
                }`}
              >
                Student zone
              </a>
            </li>

          </ul>

          {/* CTA */}
          <div className="ml-auto pl-6">
            <a
              href="#"
              className="h-[42px] px-5 rounded-lg text-white text-[13px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.03] mb-3"
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

        {/* MOBILE BTN */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-[var(--forest)]"
        >
          {mobileMenu ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t ${
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
          <a className="mobile-link">Students</a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar2;