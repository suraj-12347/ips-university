import React, { useState, useEffect } from "react";
import "../navbar.css";
import { Menu, X } from "lucide-react";

import logored from "../../images1/logored.png";
import logogreen from "../../images1/logogreen2.png";
import logopurple from "../../images1/logopurple.png";
import logoblue from "../../images1/logogreen2.png";
import logodark from "../../images1/logored.png";
import orange from "../../images1/logoorange.png";

import Topbar3 from "./AnimatedTop";
import Logo from "../Logo";

const Navbar2 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("green");
  const [showTopbar, setShowTopbar] = useState(false);

  const themeLogos = {
    green: logogreen,
    red: logored,
    purple: logopurple,
    blue: logoblue,
    dark: logodark,
    orange: orange,
  };

  useEffect(() => {
    setShowTopbar(true);
  }, []);

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
    <nav className="navbar fixed top-0 left-0 w-full z-50">

      {/* TOPBAR WITH ANIMATION WRAPPER */}
      <div className={showTopbar ? "topbar-animate" : "opacity-0"}>
        <Topbar3 />
      </div>

      {/* MAIN NAV */}
      <div className="max-w-[1350px] mx-auto h-[74px] flex items-center justify-between px-4 lg:px-1 lg:pr-6 bg-[var(--white)] mt-5">

        {/* LOGO */}
        <Logo />

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center flex-1 h-full">

          <ul className="flex items-center justify-center ml-20 gap-[2px] h-full flex-1 z-10 mb-10">

            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("home")}
                className={`nav-link ${active === "home" ? "active" : ""}`}
              >
                Home
              </a>
            </li>

            <li className="nav-item group relative">
              <a
                href="#"
                onClick={() => setActive("about")}
                className={`nav-link ${active === "about" ? "active" : ""}`}
              >
                About Us
              </a>
            </li>

            <li className="nav-item group relative">
              <a
                href="#"
                onClick={() => setActive("schools")}
                className={`nav-link ${active === "schools" ? "active" : ""}`}
              >
                Schools
              </a>
            </li>

            <li className="nav-item group relative">
              <a
                href="#"
                onClick={() => setActive("programmes")}
                className={`nav-link ${active === "programmes" ? "active" : ""}`}
              >
                Programmes
              </a>
            </li>

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

            <li className="nav-item">
              <a
                href="#"
                onClick={() => setActive("students")}
                className={`nav-link ${active === "students" ? "active" : ""}`}
              >
                Students
              </a>
            </li>

          </ul>

          {/* CTA */}
          <div className="ml-auto pl-6">
            <a
              href="#"
              className="h-[42px] px-5 rounded-lg text-white text-[13px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.03] mb-5"
              style={{
                background:
                  "linear-gradient(135deg,var(--forest),var(--grass))",
              }}
            >
              Enquiry Now
            </a>
          </div>
        </div>

        {/* MOBILE */}
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