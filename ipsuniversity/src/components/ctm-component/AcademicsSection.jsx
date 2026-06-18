import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pharma from "../../images1/flowerrr.jpeg";

const ugCourses = [
  {
    name: "Computer Science Engineering",
    route: "/page5",
  },
  {
    name: "Civil Engineering",
  },
  {
    name: "Electrical Engineering",
  },
  {
    name: "Mechanical Engineering",
  },
  {
    name: "Electronics & Communication Engineering",
  },
];

const pgCourses = [
  {
    name: "Civil Engineering (CTM)",
  },
  {
    name: "Mechanical Engineering (Machine Design)",
  },
  {
    name: "MBA (Dual Specialization)",
  },
];

const phdCourses = [
  {
    name: "Civil Engineering (CTM)",
  },
  {
    name: "Mechanical Engineering (Machine Design)",
  },
  {
    name: "Computer Science Engineering",
  },
  {
    name: "Electrical Engineering",
  },
];

const courseImages = {
  "Computer Science Engineering":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",

  "Civil Engineering":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",

  "Electrical Engineering":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",

  "Mechanical Engineering":
    "https://th.bing.com/th/id/OIP.BzD-LznXh_sybH0EfBzxvgHaEJ?w=324&h=182&c=7&r=0&o=7&pid=1.7&rm=3",

  "Electronics & Communication Engineering":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",

  "MBA (Dual Specialization)":
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",

  "Civil Engineering (CTM)":
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",

  "Mechanical Engineering (Machine Design)":
    "https://th.bing.com/th/id/OIP.BzD-LznXh_sybH0EfBzxvgHaEJ?w=324&h=182&c=7&r=0&o=7&pid=1.7&rm=3",
};

const AcademicsSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ug");

  const courses =
    activeTab === "ug"
      ? ugCourses
      : activeTab === "pg"
      ? pgCourses
      : phdCourses;

  const handleNavigation = (course) => {
    if (course.route) {
      navigate(course.route);
    }
  };

  return (
    <section
      className="relative py-8 md:py-10 overflow-hidden md:h-[105vh] md:mt-10"
      style={{
        backgroundImage: `url(${pharma})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

        <div
        className="absolute bottom-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />

      <div
        className="absolute top-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-5 text-[var(--forest)]">
          Academics
        </h2>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-4 md:mb-5">
          <button
            onClick={() => setActiveTab("ug")}
            className={`px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
              activeTab === "ug"
                ? "bg-[var(--forest)] text-white"
                : "bg-white text-gray-700 shadow"
            }`}
          >
            Undergraduate
          </button>

          <button
            onClick={() => setActiveTab("pg")}
            className={`px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
              activeTab === "pg"
                ? "bg-[var(--forest)] text-white"
                : "bg-white text-gray-700 shadow"
            }`}
          >
            Postgraduate
          </button>

          <button
            onClick={() => setActiveTab("phd")}
            className={`px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer ${
              activeTab === "phd"
                ? "bg-[var(--forest)] text-white"
                : "bg-white text-gray-700 shadow"
            }`}
          >
            Doctoral
          </button>
        </div>

        {/* Courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(course)}
              className="bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <img
                src={courseImages[course.name]}
                alt={course.name}
                className="w-full h-26 md:h-30 object-cover"
              />

              <div className="p-2 md:p-3">
                <h3 className="font-semibold text-[var(--forest)] text-sm md:text-base mb-2 min-h-[35px]">
                  {course.name}
                </h3>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation(course);
                  }}
                  className="text-sm font-medium bg-[var(--forest)] text-white hover:scale-105 transition-transform rounded-2xl px-2 py-1"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;