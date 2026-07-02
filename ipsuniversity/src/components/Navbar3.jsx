import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import edubuild3 from "../images1/navbarimage.png";
import Logo from "./Logo";
import Topbar3 from "./Topbar3";

const schools = [
  {
    title: "School of Engineering & Technology",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    description: "Building future engineers with innovation and technology.",
    programs: [
      {
        title: "Undergraduate",
        courses: [
          "B.Tech Computer Science & Engineering",
          "B.Tech Artificial Intelligence & Data Science",
          "B.Tech Electronics & Communication",
          "B.Tech Mechanical Engineering",
          "B.Tech Civil Engineering",
        ],
      },
      {
        title: "Postgraduate",
        courses: [
          "M.Tech Computer Science",
          "M.Tech Artificial Intelligence",
          "M.Tech Civil Engineering",
        ],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Engineering"],
      },
      {
        title: "Diploma",
        courses: [
          "Diploma in Mechanical Engineering",
          "Diploma in Civil Engineering",
        ],
      },
      {
        title: "Certificate",
        courses: ["Web Development", "Artificial Intelligence"],
      },
    ],
  },

  {
    title: "School of Pharmacy",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
    description: "Advancing healthcare through pharmaceutical education.",
    programs: [
      {
        title: "Undergraduate",
        courses: ["Bachelor of Pharmacy (B.Pharm)"],
      },
      {
        title: "Postgraduate",
        courses: ["Master of Pharmacy (M.Pharm)"],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Pharmacy"],
      },
      {
        title: "Diploma",
        courses: ["Diploma in Pharmacy (D.Pharm)"],
      },
      {
        title: "Certificate",
        courses: ["Clinical Research"],
      },
    ],
  },

  {
    title: "School of Management",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    description: "Preparing future business leaders and entrepreneurs.",
    programs: [
      {
        title: "Undergraduate",
        courses: [
          "Bachelor of Business Administration",
          "Bachelor of Commerce",
        ],
      },
      {
        title: "Postgraduate",
        courses: ["Master of Business Administration"],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Management"],
      },
      {
        title: "Diploma",
        courses: ["Diploma in Business Management"],
      },
      {
        title: "Certificate",
        courses: ["Digital Marketing"],
      },
    ],
  },

  {
    title: "School of Education",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    description: "Developing skilled educators for tomorrow.",
    programs: [
      {
        title: "Undergraduate",
        courses: ["Bachelor of Education (B.Ed.)"],
      },
      {
        title: "Postgraduate",
        courses: ["Master of Education (M.Ed.)"],
      },
      {
        title: "Doctorate",
        courses: ["Ph.D. in Education"],
      },
      {
        title: "Diploma",
        courses: ["Diploma in Education"],
      },
      {
        title: "Certificate",
        courses: ["Teacher Training"],
      },
    ],
  },
];

const Navbar2 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("schools");
  const [selectedSchool, setSelectedSchool] = useState(schools[0]);

  const [selectedProgram, setSelectedProgram] = useState(
    schools[0].programs[0],
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-[9998]  ">
      <Topbar3 />

      <div className="[100vw]  -mt-20 ">
        <div className="h-[170px] bg-white  shadow-md flex items-center justify-center px-4 w-full gap-1 md:gap-2">
          {/* LOGO */}
          <div className="flex-shrink-0 z-20 mt-20 md:mt-15 lg:mt-20 md:w-1/22 lg:w-1/6 md:hidden lg:block max-w-50">
            <Logo />
          </div>
          <div className="hidden md:block lg:hidden flex-shrink-0 z-20 mt-20 md:mt-15 lg:mt-20 md:w-1/15 absolute -top-2 left-2  justify-start">
            <Logo />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex  justify-center ml-25 lg:ml-0  w-full   ">
            <div
              className="
                relative
                flex
                items-center
                justify-center
                px-8
                h-[160px]
                rounded-full
                overflow-visible
                w-[90%]
                
              "
              style={{
                backgroundImage: `url(${edubuild3})`,
                backgroundSize: "cover",
                backgroundPosition: "right",
              }}
            >
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black/40 rounded-full" /> */}
              <div className="absolute inset-0 bg-black/40 rounded-full backdrop-blur-[1px]"></div>

              <ul className="relative z-10 flex items-center justify-evenly w-full mt-15">
                {/* HOME */}
                <li>
                  <a
                    href="#"
                    onClick={() => setActive("home")}
                    className={`lg:px-4 px-2 py-2 rounded-xl text-sm font-lg transition-all duration-300 ${
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
                    className={`flex items-center  lg:px-4 px-2 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
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
                    <div className="flex flex-col gap-2">
                      <a
                        href="#"
                        className="hover:bg-[var(--forest)] hover:text-white text:[var(--forest)] font-semibold rounded-2xl p-2"
                      >
                        Overview
                      </a>

                      <a
                        href="#"
                        className="hover:bg-[var(--forest)] hover:text-white text:[var(--forest)] font-semibold rounded-2xl p-2"
                      >
                        Vision & Mission
                      </a>

                      <a
                        href="#"
                        className="hover:bg-[var(--forest)] hover:text-white text:[var(--forest)] font-semibold rounded-2xl p-2"
                      >
                        Why IPS University
                      </a>

                      <a
                        href="#"
                        className="hover:bg-[var(--forest)] hover:text-white text:[var(--forest)] rounded-2xl p-2"
                      >
                        Message Board
                      </a>
                    </div>
                  </div>
                </li>

                {/* Schools */}
                {/* =========================
        SCHOOLS MENU
========================= */}

                <li className="relative group">
                  {/* Menu Button */}

                  <a
                    href="#schools"
                    onClick={() => setActive("schools")}
                    className={`flex items-center  lg:px-4 px-2 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active === "schools"
                        ? "bg-white text-[var(--forest)]"
                        : "text-white hover:bg-white/15"
                    }`}
                  >
                    Schools
                    <ChevronDown size={15} className="ml-1" />
                  </a>

                  {/* Mega Menu */}

                  <div
                    className="
      absolute
      top-full
      left-50
      -translate-x-1/2
      mt-5
      w-[1100px]
      max-h-[80vh]
      bg-white
      rounded-[30px]
      shadow-[0_25px_70px_rgba(0,0,0,.15)]
      border
      border-gray-100
      opacity-0
      invisible
      translate-y-4
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      transition-all
      duration-300
      overflow-hidden
      z-50
    "
                  >
                    {/* Main Grid */}

                    <div className="grid grid-cols-[280px_1fr_320px] min-h-[520px]">
                      {/* =========================
        START PART 2
   LEFT COLUMN
========================= */}

                      <div className="border-r border-gray-100 bg-gray-50/70 p-6">
                        <h2 className="text-xl font-bold text-[var(--forest)] mb-6">
                          Schools
                        </h2>

                        <div className="space-y-2">
                          {schools.map((school) => (
                            <button
                              key={school.title}
                              onMouseEnter={() => {
                                setSelectedSchool(school);
                                setSelectedProgram(school.programs[0]);
                              }}
                              className={`
          w-full
          flex
          items-center
          justify-between
          text-left
          rounded-2xl
          px-4
          py-3
          transition-all
          duration-300

          ${
            selectedSchool.title === school.title
              ? "bg-[var(--forest)] text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-green-50 hover:shadow-md"
          }
        `}
                            >
                              <div className="flex flex-col">
                                <span className="font-semibold text-[14px]">
                                  {school.title}
                                </span>

                                <span
                                  className={`text-xs mt-1 ${
                                    selectedSchool.title === school.title
                                      ? "text-white/80"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {school.programs.length} Programs
                                </span>
                              </div>

                              <ChevronRight
                                size={18}
                                className={`transition-all duration-300 ${
                                  selectedSchool.title === school.title
                                    ? "translate-x-1"
                                    : ""
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* =========================
         END PART 2
========================= */}

                      {/* =========================
        START PART 3
        CENTER COLUMN
========================= */}

                      <div className="p-6 flex flex-col">
                        {/* Heading */}

                        <h2 className="text-xl font-bold text-[var(--forest)] mb-6">
                          Programs
                        </h2>

                        {/* Program Tabs */}

                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedSchool.programs.map((program) => (
                            <button
                              key={program.title}
                              onMouseEnter={() => setSelectedProgram(program)}
                              className={`
          px-4
          py-2
          rounded-xl
          text-sm
          font-medium
          transition-all
          duration-300

          ${
            selectedProgram.title === program.title
              ? "bg-[var(--forest)] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-green-50"
          }
        `}
                            >
                              {program.title}
                            </button>
                          ))}
                        </div>

                        {/* Courses */}

                        <div className="flex-1">
                          <h3 className="text-[15px] font-semibold text-gray-800 mb-4">
                            Courses
                          </h3>

                          <div className="grid grid-cols-2 gap-3">
                            {selectedProgram.courses.map((course) => (
                              <a
                                key={course}
                                href="#"
                                className="
            group
            flex
            items-center
            justify-between
            rounded-xl
            border
            border-gray-200
            bg-white
            px-4
            py-3
            text-sm
            text-gray-700
            transition-all
            duration-300
            hover:border-[var(--forest)]
            hover:bg-green-50
          "
                              >
                                <span>{course}</span>

                                <ChevronRight
                                  size={16}
                                  className="
              text-gray-400
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:text-[var(--forest)]
            "
                                />
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* =========================
         END PART 3
========================= */}

                      {/* =========================
        START PART 4
        RIGHT COLUMN
========================= */}

                      <div className="border-l border-gray-100 bg-gray-50/60 p-6 flex flex-col">
                        {/* School Image */}

                        <div className="overflow-hidden rounded-3xl">
                          <img
                            src={selectedSchool.image}
                            alt={selectedSchool.title}
                            className="w-full h-[220px] object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>

                        {/* School Title */}

                        <h2 className="mt-6 text-2xl font-bold text-[var(--forest)] leading-snug">
                          {selectedSchool.title}
                        </h2>

                        {/* Description */}

                        {/* <p className="mt-3 text-sm leading-7 text-gray-600">
    {selectedSchool.description}
  </p>  */}

                        {/* Stats */}

                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div className="rounded-2xl bg-white border border-gray-200 p-4">
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                              Programs
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-[var(--forest)]">
                              {selectedSchool.programs.length}
                            </h3>
                          </div>

                          <div className="rounded-2xl bg-white border border-gray-200 p-4">
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                              Courses
                            </p>

                            <h3 className="mt-2 text-2xl font-bold text-[var(--forest)]">
                              {selectedProgram.courses.length}
                            </h3>
                          </div>
                        </div>

                        {/* Explore Button */}

                        <a
                          href="http://localhost:5173/ipsctm"
                          className="
      mt-auto
      w-full
      rounded-2xl
      bg-[var(--forest)]
      py-3
      text-center
      text-white
      font-semibold
      transition-all
      duration-300
      hover:shadow-xl
      hover:scale-[1.02]
    "
                        >
                          Explore School
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                {/* LINKS */}
                {["Admissions", "Research", "Student Zone"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="
                        lg:px-4 px-2
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

          <a
            href="#"
            className="
                lg:h-[42px]
                h-[35px]
                
                rounded-2xl
                text-white
                lg:text-sm
                text-[10px]
                font-semibold
                md:flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-105
                mt-20  
                w-30 lg:w-40
                bg-[var(--forest)]
                hidden 
                
              "
          >
            Enquiry Now
          </a>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden ml-auto mr-3 text-[var(--forest)] mt-20"
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
            ${mobileMenu ? "max-h-[600px] py-4" : "max-h-0"}
          `}
        >
          <div className="flex flex-col lg:px-4 px-2">
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
                bg-[var(--forest)]
                
                
              "
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
