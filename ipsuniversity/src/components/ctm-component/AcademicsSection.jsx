import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pharma from "../../images1/flowerrr.jpeg";

const ugCourses = [
  { name: "Computer Science Engineering", route: "/page5" },
  { name: "Civil Engineering" },
  { name: "Electrical Engineering" },
  { name: "Mechanical Engineering" },
  { name: "Electronics & Communication Engineering" },
];

const pgCourses = [
  { name: "Civil Engineering (CTM)" },
  { name: "Mechanical Engineering (Machine Design)" },
  { name: "MBA (Dual Specialization)" },
];

const phdCourses = [
  { name: "Civil Engineering (CTM)" },
  { name: "Mechanical Engineering (Machine Design)" },
  { name: "Computer Science Engineering" },
  { name: "Electrical Engineering" },
];

const diplomaCourses = [
  { name: "Diploma in Civil Engineering" },
  { name: "Diploma in Mechanical Engineering" },
  { name: "Diploma in Electrical Engineering" },
  { name: "Diploma in Computer Science Engineering" },
];

const certificateCourses = [
  { name: "Certificate in AutoCAD" },
  { name: "Certificate in Programming & Web Development" },
  { name: "Certificate in Industrial Safety" },
  { name: "Certificate in Data Analytics" },
];

const courseImages = {
  "Computer Science Engineering": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  "Civil Engineering": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  "Electrical Engineering": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  "Mechanical Engineering": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",
  "Electronics & Communication Engineering": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "MBA (Dual Specialization)": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  "Civil Engineering (CTM)": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  "Mechanical Engineering (Machine Design)": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",
  "Diploma in Civil Engineering": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  "Diploma in Mechanical Engineering": "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=800&q=80",
  "Diploma in Electrical Engineering": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  "Diploma in Computer Science Engineering": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  "Certificate in AutoCAD": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  "Certificate in Programming & Web Development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "Certificate in Industrial Safety": "https://images.unsplash.com/photo-1581092918484-8313d7e48074?auto=format&fit=crop&w=800&q=80",
  "Certificate in Data Analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
};

const AcademicsSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ug");

  const courses =
    activeTab === "ug" ? ugCourses :
    activeTab === "pg" ? pgCourses :
    activeTab === "phd" ? phdCourses :
    activeTab === "diploma" ? diplomaCourses :
    certificateCourses;

  const handleNavigation = (course) => {
    if (course.route) navigate(course.route);
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
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute top-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-[var(--forest)]">
          Academics
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {[
            { key: "ug", label: "Undergraduate" },
            { key: "pg", label: "Postgraduate" },
            { key: "phd", label: "Doctoral" },
            { key: "diploma", label: "Diploma" },
            { key: "certificate", label: "Certificate" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                activeTab === tab.key
                  ? "bg-[var(--forest)] text-white"
                  : "bg-white text-gray-700 shadow"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(course)}
              className="bg-white overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <img
                src={courseImages[course.name] || "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"}
                alt={course.name}
                className="w-full h-25 object-cover"
              />

              <div className="p-3">
                <h3 className="font-semibold text-[var(--forest)] text-sm md:text-base mb-3 min-h-[48px]">
                  {course.name}
                </h3>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation(course);
                  }}
                  className="text-sm font-medium bg-[var(--forest)] text-white rounded-2xl px-3 py-1"
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