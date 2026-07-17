import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pharma from "../../images1/flowerrr.jpeg";
import { ArrowUpRight } from "lucide-react";

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
  if (course.route) {
    navigate(course.route);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
  return (
   <section
  className="relative py-8 md:py-10 md:min-h-screen md:mt-10"
  // style={{
  //   backgroundImage: `url(${pharma})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // }}
>
        <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px] h-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
       <div className="text-center mb-10">

  <p
    className="
      uppercase
      tracking-[2px]
      text-[14px]
      font-semibold
      text-[var(--grass)]
      mb-3
    "
    style={{
      fontFamily:"Outfit, sans-serif"
    }}
  >
    Learning & Excellence
  </p>


  <h2
    className="
      text-4xl
      md:text-6xl
      text-[var(--forest)]
      relative
      inline-block
    "
    style={{
      fontFamily:"Fraunces, serif"
    }}
  >
    Academics


    <span
      className="
        absolute
        left-1/2
        -bottom-3
        -translate-x-1/2
        w-24
        h-[3px]
        bg-[var(--grass)]
        rounded-full
      "
    />

  </h2>



  <p
    className="
      max-w-3xl
      mx-auto
      mt-8
      text-gray-700
      leading-8
      text-base
      md:text-md
    "
    style={{
      fontFamily:"Outfit, sans-serif"
    }}
  >
    Explore our comprehensive academic programs designed to provide
    quality education, practical knowledge, and industry-oriented skills
    that prepare students for future challenges and professional success.
  </p>


</div>

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

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {courses.map((course, index) => (
    <div
      key={index}
      onClick={() => handleNavigation(course)}
      className="group cursor-pointer"
    >
      {/* White Frame */}
      <div
        className="
          bg-white
          rounded-[28px]
          p-1
          shadow-md
          hover:shadow-2xl
          transition-all
          duration-500
          hover:-translate-y-2
        "
      >
        {/* Image */}
        <div
          className="relative rounded-[22px] overflow-hidden"
          style={{
            boxShadow: "inset 0 0 0 3px rgba(49,87,44,0.22)",
          }}
        >
          <img
            src={
              courseImages[course.name] ||
              "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
            }
            alt={course.name}
            className="
              w-full
              h-[320px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-transparent
            "
          />

          {/* Bottom Green Accent */}
          <div
  className="
    absolute
    inset-0
    bg-gradient-to-t
    from-[var(--forest)]/85
    via-[#578B07]/25
    to-transparent
  "
/>

          {/* Content */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-6
            "
          >
            <h3
              className="
                text-white
                text-2xl
                leading-8
              "
              style={{
                fontFamily: "Fraunces, serif",
              }}
            >
              {course.name}
            </h3>

            <div className="flex items-center justify-between mt-5">

              <span className="text-white/80 text-sm tracking-wide">
                Explore Program
              </span>

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/20
                  backdrop-blur-md
                  border
                  border-white/30
                  flex
                  items-center
                  justify-center
                  text-white
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              >
                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
};

export default AcademicsSection;