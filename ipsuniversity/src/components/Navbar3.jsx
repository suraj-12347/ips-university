import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import edubuild3 from "../images1/edubuild3.png";
import Logo from "./Logo";
import Topbar3 from "./Topbar3";

const Navbar2 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("home");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      <Topbar3/>
      <div className="max-w-[1400px] -mt-20 ">
        <div className="h-[170px] bg-white  shadow-md flex items-center px-4">

          {/* LOGO */}
          <div className="flex-shrink-0 z-20 mt-20 md:mt-15 lg:mt-23">
            <Logo />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex  justify-center px-4    ">
            <div
              className="
                relative
                flex
                items-center
                px-8
                h-[160px]
                rounded-full
                overflow-visible
              "
              style={{
                backgroundImage: `url(${edubuild3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 rounded-full" />

              <ul className="relative z-10 flex items-center gap-1 mt-15">

                {/* HOME */}
                <li>
                  <a
                    href="#"
                    onClick={() => setActive("home")}
                    className={`px-4 py-2 rounded-xl text-sm font-lg transition-all duration-300 ${
                      active === "home"
                        ? "bg-white text-[var(--forest)]"
                        : "text-white hover:bg-white/15"
                    }`}
                  >
                    Home
                  </a>
                </li>

                {/* ABOUT */}
                <li className="relative group">
                  <a
                    href="#about"
                    onClick={() => setActive("about")}
                    className={`flex items-center  px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === "about"
                        ? "bg-white text-[var(--forest)]"
                        : "text-white hover:bg-white/15"
                    }`}
                  >
                    About
                    <ChevronDown size={14} />
                  </a>

                  {/* DROPDOWN */}
                  <div
                    className="
                      absolute
                      top-full
                      left-0
                      mt-3
                      w-64
                      bg-white
                      rounded-2xl
                      shadow-xl
                      p-4
                      opacity-0
                      invisible
                      group-hover:opacity-100
                      group-hover:visible
                      transition-all
                      duration-300
                    "
                  >
                    <h4 className="font-bold text-[var(--forest)] mb-3">
                      University
                    </h4>

                    <div className="flex flex-col gap-2">
                      <a
                        href="#"
                        className="hover:text-[var(--forest)]"
                      >
                        Overview
                      </a>

                      <a
                        href="#"
                        className="hover:text-[var(--forest)]"
                      >
                        Vision & Mission
                      </a>

                      <a
                        href="#"
                        className="hover:text-[var(--forest)]"
                      >
                        Why IPS University
                      </a>

                      <a
                        href="#"
                        className="hover:text-[var(--forest)]"
                      >
                        Message Board
                      </a>
                    </div>
                  </div>
                </li>

                {/* LINKS */}
                {[
                 
                  "Programmes",
                  "Admissions",
                  "Research",
                  "Student Zone",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        px-4
                        py-2
                        rounded-xl
                        text-sm
                        font-medium
                        text-white
                        hover:bg-white/15
                        transition-all
                        duration-300
                      "
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ENQUIRY BUTTON */}
          <div className="hidden xl:flex items-center pr-3">
            <a
              href="#"
              className="
                h-[42px]
                px-5
                rounded-2xl
                text-white
                text-sm
                font-semibold
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-105
                mt-23 ml-10
              "
              style={{
                background:
                  "linear-gradient(135deg,var(--forest),var(--grass))",
              }}
            >
              Enquiry Now
            </a>
          </div>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden ml-auto mr-3 text-[var(--forest)] mt-23"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            xl:hidden
            overflow-hidden
            transition-all
            duration-300
            bg-white
            rounded-b-2xl
            shadow-lg
            ${
              mobileMenu
                ? "max-h-[600px] py-4"
                : "max-h-0"
            }
          `}
        >
          <div className="flex flex-col px-5">

            {[
              "Home",
              "About Us",
              "Schools",
              "Programmes",
              "Admissions",
              "Research",
              "Student Zone",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="
                  py-3
                  border-b
                  border-gray-100
                  hover:text-[var(--forest)]
                  transition-all
                "
              >
                {item}
              </a>
            ))}

            <a
              href="#"
              className="
                mt-4
                h-[45px]
                rounded-xl
                text-white
                font-semibold
                flex
                items-center
                justify-center
              "
              style={{
                background:
                  "linear-gradient(135deg,var(--forest),var(--grass))",
              }}
            >
              Enquiry Now
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;