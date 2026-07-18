import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ctm from "../images1/ctmmain2.png";
import bca from "../images1/pharmacy.jpeg";
import mgmt from "../images1/pharmacy.jpeg";
import pharmacy from "../images1/pharma2.png";
import education from "../images1/edubuild8.png";
import physical from "../images1/pharmacy.jpeg";
import flower from "../images1/flowerrr.jpeg";

import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Cpu,
  GraduationCap,
  Building2,
  BookOpen,
  BriefcaseBusiness,
  MonitorSmartphone,
  Dumbbell,
} from "lucide-react";

const schools = [
  {
    image: ctm,
    name: "School of Engineering & Technology",
    quote:
      "Empowering future engineers through innovation, technology, and hands-on learning.",
    icon: Cpu,
    route: "/ipsctm",
  },
  {
    image: education,
    name: "School of Education",
    quote:
      "Inspiring educators to shape minds, build character, and transform the future.",
    icon: GraduationCap,
    route: "/education",
  },
  {
    image: pharmacy,
    name: "School of Pharmacy",
    quote:
      "Advancing healthcare through pharmaceutical excellence, research, and patient care.",
    icon: BookOpen,
  },
  {
    image: mgmt,
    name: "School of Management & Commerce",
    quote:
      "Developing visionary leaders for business, entrepreneurship, and global success.",
    icon: BriefcaseBusiness,
  },
  {
    image: bca,
    name: "School of Computer Applications",
    quote:
      "Creating tomorrow's innovators through coding, AI, and digital transformation.",
    icon: MonitorSmartphone,
  },
  {
    image: physical,
    name: "School of Physical Education",
    quote:
      "Building champions with discipline, fitness, leadership, and sportsmanship.",
    icon: Dumbbell,
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
      
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    }
  };

  return (
    <section
      id="academics"
      className="
        relative
        w-full
        py-5
        md:py-12
        overflow-hidden
        z-10
        bg-transparent
        
        
      "
      // style={{
      //   backgroundImage: `url(${flower})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Overlay */}
       {/* <div
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
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[4px]"></div> */}



      {/* Heading */}
      <div className="relative z-40 w-full px-4  z-20">
        <p className="text-center text-[var(--forest)]/90 font-semibold tracking-[4px] uppercase text-md">
          Explore
        </p>

        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold text-[var(--forest)] mt-2 leading-tight">
          Our Schools
        </h1>
      </div>

      {/* Description */}
      <div className="relative z-40 max-w-[850px] mx-auto px-4 mb-8">
        <p className="text-center text-gray-700 max-w-2xl mx-auto mt-4 leading-6 text-md">
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


  <div className="relative z-20 mt-10 max-w-[1450px] mx-auto ">

  <Swiper
    modules={[Pagination]}
    loop={true}
    speed={700}
    spaceBetween={24}
    slidesPerView={1}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
    }}
    className="schools-swiper"
  >
    {schools.map((school, index) => (
      <SwiperSlide key={index} className="py-4">
        <div
          onClick={() => handleCardClick(school)}
          className="
            group
            relative
            w-full
            max-w-[330px]
            mx-auto
            h-[350px]
            rounded-[30px]
            overflow-hidden
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-500
            cursor-pointer
            border-[5px]
            border-white
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
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[var(--forest)]
             
              to-transparent
            "
          />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

            <h3
              className="text-2xl mb-3"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              {school.name}
            </h3>

            {/* <p className="text-sm text-white/90 leading-6 line-clamp-3 mb-5">
              {school.quote}
            </p> */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(school);
              }}
              className="flex items-center gap-3 font-semibold"
            >
              <span>Explore School</span>

              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                →
              </div>
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