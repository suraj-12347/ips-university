// SchoolsSection2.jsx

import React, { useState } from "react";

import ctm from "../images1/ctmb.jpg";
import bca from "../images1/pharmacy.jpeg";
import mgmt from "../images1/pharmacy.jpeg";
import pharmacy from "../images1/pharmab.jpg";
import education from "../images1/edub.jpg";
import physical from "../images1/pharmacy.jpeg";

import DotetRing2 from "./DotedRing2";

import { ChevronLeft, ChevronRight } from "lucide-react";

const schools = [
  {
    image: ctm,
    name: "School of Engineering & Technology",
    courses:
      "B.Tech (ME, CE, CS, EE, EC) · M.Tech · Applied Sciences & Humanities",
  },
   {
    image: education,
    name: "School of Education",
    courses: "B.Ed · M.Ed — Teacher Education",
  },
 
  
  {
    image: pharmacy,
    name: "School of Pharmacy",
    courses: "D.Pharm · B.Pharm · M.Pharm",
  },
 
  {
    image: physical,
    name: "School of Physical Education",
    courses:
      "B.P.Ed · M.P.Ed — Sports Science & Wellness",
  },
   {
    image: bca,
    name: "School of Computer Applications",
    courses:
      "BCA · MCA · AI-ML · Cyber Security · Data Science",
  },
  {
    image: mgmt,
    name: "School of Management & Commerce",
    courses:
      "MBA · BBA · B.Com · Tourism & Management",
  },
];

const SchoolsSection2 = () => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = schools.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex + 3 < schools.length) {
      setStartIndex(startIndex + 3);
    }
  };

  const prevSlide = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <section id="schools" className="relative w-full bg-[#f8f8f8] py-10 overflow-hidden mt-10">

      {/* Ring */}
      <div className="absolute -left-20 lg:left-80 -top-80 opacity-50">
        <DotetRing2
          height={700}
          width={700}
          color="var(--grass)"
        />
      </div>

      {/* Heading */}
      <div className="relative z-40 w-full px-4">

        <p className="text-center text-[var(--grass)] font-semibold tracking-[4px] uppercase text-xs">
          Academic
        </p>

        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--grass)] mt-2 leading-tight">
          Our Schools
        </h1>

      </div>

      {/* Description */}
      <div className="relative z-20 max-w-[850px] mx-auto px-4 mb-7">

        <p className="text-center text-gray-800 max-w-2xl mx-auto mt-3 leading-6 text-md">
          Specialized schools designed to deliver focused,
          industry-aligned education across diverse disciplines.
        </p>

      </div>

      {/* Slider */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 relative">

        {/* Prev */}
        <button
          onClick={prevSlide}
          className="
            absolute
            left-0
            md:left-2
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            rounded-full
            bg-white
            shadow-md
            flex
            items-center
            justify-center
            hover:scale-105
            transition
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="
            absolute
            right-0
            md:right-2
            top-1/2
            -translate-y-1/2
            z-20
            w-10
            h-10
            rounded-full
            bg-white
            shadow-md
            flex
            items-center
            justify-center
            hover:scale-105
            transition
          "
        >
          <ChevronRight size={18} />
        </button>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            place-items-center
          "
        >

          {visibleCards.map((school, index) => (
            <div
              key={index}
              className="
                group
                relative
                w-full
                max-w-[340px]
                h-[240px]
                sm:h-[260px]
                md:h-[280px]
                rounded-2xl
                overflow-hidden
                shadow-lg
                cursor-pointer
              "
            >

              {/* Image */}
              <img
                src={school.image}
                alt={school.name}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition-all duration-500"></div>

              {/* Bottom Title */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  p-5
                  transition-all
                  duration-500
                  group-hover:-translate-y-12
                "
              >
                <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">
                  {school.name}
                </h3>
              </div>

              {/* Hover Content */}
              <div
                className="
                  absolute
                  top-0
                  right-[-100%]
                  group-hover:right-0
                  w-full
                  h-full
                  bg-white/10
                  backdrop-blur-xl
                  border-l
                  border-white/20
                  p-5
                  transition-all
                  duration-700
                  flex
                  flex-col
                  justify-end
                "
              >

                <h3 className="text-white text-lg sm:text-xl font-bold mb-3">
                  {school.name}
                </h3>

                <p className="text-white/85 leading-6 text-xs sm:text-sm">
                  {school.courses}
                </p>

                <button
                  className="
                    mt-4
                    w-fit
                    px-4
                    py-2.5
                    rounded-xl
                    text-white
                    text-sm
                    font-semibold
                    bg-[var(--forest)]
                    hover:scale-105
                    transition-all
                    duration-300
                  "
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

export default SchoolsSection2;