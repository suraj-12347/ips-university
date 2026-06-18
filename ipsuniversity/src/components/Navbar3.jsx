import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";


import Topbar3 from "./Topbar3";
import Logo from "./Logo";

const Navbar2 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("green");

  useEffect(() => {
    const checkTheme = () => {
      const html = document.documentElement;

      if (html.classList.contains("red")) setTheme("red");
      else if (html.classList.contains("purple")) setTheme("purple");
      else if (html.classList.contains("blue")) setTheme("blue");
      else if (html.classList.contains("dark")) setTheme("dark");
      else setTheme("green");
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
    <nav className="navbar fixed top-0 left-0 w-full z-50 shadow-sm">

      <Topbar3 />

      {/* MAIN */}
      <div className="max-w-[1350px] mx-auto h-[74px] flex items-center justify-between px-4 lg:px-1 lg:pr-6 bg-[var(--white)] mt-5">

        <Logo />

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center flex-1 h-full min-w-0">

          <ul className="flex items-center justify-center ml-20 gap-[1px] h-full flex-1 z-10 mb-10 w-full min-w-0">

            <li>
              <a
                href="#"
                onClick={() => setActive("home")}
                className={`nav-link whitespace-nowrap ${active === "home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>

            <li className="group relative">
              <a
                href="#about"
                onClick={() => setActive("about")}
                className={`nav-link whitespace-nowrap ${active === "about" ? "active" : ""}`}
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
              </div>
            </li>

            <li className="group relative">
              <a
                href="#schools"
                onClick={() => setActive("schools")}
                className={`nav-link whitespace-nowrap ${active === "schools" ? "active" : ""}`}
              >
                Schools
              </a>
            </li>

            <li className="group relative">
              <a
                href="#"
                onClick={() => setActive("programmes")}
                className={`nav-link whitespace-nowrap ${active === "programmes" ? "active" : ""}`}
              >
                Programmes
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActive("admissions")}
                className={`nav-link whitespace-nowrap ${active === "admissions" ? "active" : ""}`}
              >
                Admissions
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={() => setActive("research")}
                className={`nav-link whitespace-nowrap ${active === "research" ? "active" : ""}`}
              >
                Research
              </a>
            </li>

            {/* FIXED */}
            <li>
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
              className="h-[42px] px-5 rounded-2xl text-white text-[13px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.03] mb-3"
              style={{
                background: "linear-gradient(135deg,var(--forest),var(--grass))",
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
          className="lg:hidden text-[var(--forest)] mb-5"
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
          <a className="mobile-link">Student Zone</a>

        </div>
      </div>

    </nav>
  );
};

export default Navbar2;