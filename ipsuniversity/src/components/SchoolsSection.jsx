import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ctm from "../images1/ctmmain.png";
import bca from "../images1/pharmacy.jpeg";
import mgmt from "../images1/pharmacy.jpeg";
import pharmacy from "../images1/pharmab.jpg";
import education from "../images1/edub.jpg";
import physical from "../images1/pharmacy.jpeg";
import flower from "../images1/flowerrr.jpeg";

import { ChevronLeft, ChevronRight } from "lucide-react";

const schools = [
  {
    image: ctm,
    name: "School of Engineering",
    courses:
      "B.Tech (ME, CE, CS, EE, EC) · M.Tech · Applied Sciences & Humanities ",
    route: "/ipsctm",
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
    image: mgmt,
    name: "School of Management & Commerce",
    courses: "MBA · BBA · B.Com · Tourism & Management",
  },
  {
    image: bca,
    name: "School of Computer Applications",
    courses: "BCA · MCA · AI-ML · Cyber Security · Data Science",
  },
  {
    image: physical,
    name: "School of Physical Education",
    courses: "B.P.Ed · M.P.Ed — Sports Science & Wellness",
  },
];

const SchoolsSection = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState({});

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

  const handleCardClick = (school) => {
    if (school.route) {
      navigate(school.route);
    }
  };

  return (
    <section
      id="schools"
      className="
        relative
        w-full
        py-5
        md:py-12
        overflow-hidden
        mt-20
        
      "
      style={{
        backgroundImage: `url(${flower})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
       <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px]"></div>



      {/* Heading */}
      <div className="relative z-40 w-full px-4  z-20">
        <p className="text-center text-[var(--forest)]/90 font-semibold tracking-[4px] uppercase text-xs">
          Explore
        </p>

        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--forest)] mt-2 leading-tight">
          Our Schools
        </h1>
      </div>

      {/* Description */}
      <div className="relative z-40 max-w-[850px] mx-auto px-4 mb-8">
        <p className="text-center text-gray-700 max-w-2xl mx-auto mt-4 leading-6 text-sm">
          Specialized schools designed to deliver focused,
          industry-aligned education across diverse disciplines.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-[1250px] mx-auto px-2  relative">
        {/* Prev Button */}
        {/* <button
          onClick={prevSlide}
          className="
            absolute
            left-0
            md:-left-2
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
        </button> */}

        {/* Next Button */}
        {/* <button
          onClick={nextSlide}
          className="
            absolute
            right-0
            md:-right-2
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
        </button> */}

        {/* Cards */}


    <div className="max-w-[1250px] mx-0 md:mx-auto px-4  relative z-50 mt-10">
 <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={24}
  speed={700}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="schools-swiper"
>
    {schools.map((school, index) => (
      <SwiperSlide key={index}>
        <div
          onClick={() => handleCardClick(school)}
          className="
            group
            w-full
            max-w-[340px]
            mx-auto
            min-h-[500px]
            rounded-[28px]
            bg-white
            shadow-xl
            cursor-pointer
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-2xl
            flex
            flex-col
           
          "
        >
          {/* Image */}
          <div className="relative p-3 pb-0">
            <div className="overflow-hidden rounded-[22px]">
              <img
                src={school.image}
                alt={school.name}
                className="
                  w-full
                  h-[240px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-4 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-[var(--forest)]">
              {school.name}
            </h3>

            <div className="mt-3">
              {!expandedCards[index] ? (
                <>
                  <p className="text-sm leading-6 text-gray-600">
                    {school.courses.length > 80
                      ? `${school.courses.substring(0, 80)}...`
                      : school.courses}
                  </p>

                  {school.courses.length > 80 && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedCards((prev) => ({
                          ...prev,
                          [index]: true,
                        }));
                      }}
                      className="
                        text-[var(--forest)]
                        text-sm
                        font-semibold
                        mt-1
                        hover:underline
                      "
                    >
                      See More
                    </button>
                  )}
                </>
              ) : (
                <>
                  <p className="text-sm leading-6 text-gray-600">
                    {school.courses}
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedCards((prev) => ({
                        ...prev,
                        [index]: false,
                      }));
                    }}
                    className="
                      text-[var(--forest)]
                      text-sm
                      font-semibold
                      mt-1
                      hover:underline
                    "
                  >
                    See Less
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-[var(--forest)]/10 text-xs text-[var(--forest)]">
                Courses
              </span>

              <span className="px-3 py-1 rounded-full bg-[var(--forest)]/10 text-xs text-[var(--forest)]">
                Faculty
              </span>

              <span className="px-3 py-1 rounded-full bg-[var(--forest)]/10 text-xs text-[var(--forest)]">
                Campus
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(school);
              }}
              className="
                mt-auto
                w-full
                py-3
                rounded-xl
                bg-[var(--forest)]
                text-white
                font-semibold
                transition-all
                duration-300
                hover:opacity-90
              "
            >
              Read More →
            </button>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


       
      </div>
    </section>
  );
};

export default SchoolsSection;