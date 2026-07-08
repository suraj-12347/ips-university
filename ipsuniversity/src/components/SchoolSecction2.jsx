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
        mt-20
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
  modules={[ Pagination]}
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
   {schools.map((school, index) => {
  const Icon = school.icon;

  return (
    <SwiperSlide key={index}>
      <div
        onClick={() => handleCardClick(school)}
        className="
          group
          relative
          w-full
          max-w-[340px]
          h-[440px]
          mx-auto
          bg-white
          rounded-[28px]
          shadow-md
          hover:shadow-xl
     
      
          hover:-translate-y-2
          transition-all
          duration-500
          overflow-hidden
          cursor-pointer
          flex
          flex-col
        "
      >
        {/* Image */}
        <div className="relative p-4 pb-0">
          <div className="overflow-hidden rounded-[22px]">
            <img
              src={school.image}
              alt={school.name}
              className="
                w-full
                h-[190px]
                object-cover
                rounded-[22px]
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>

          {/* Floating Icon */}
          <div
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-[-28px]
              w-14
              h-14
              rounded-full
              bg-[var(--forest)]
              border-4
              border-white
              flex
              items-center
              justify-center
              shadow-lg
            "
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-5 pt-6 text-center">
          {/* Heading */}
          <h3
            className="
              text-[18px]
              font-bold
              leading-snug
              text-[var(--forest)]
              min-h-[40px]
              flex
              items-center
              justify-center
            "
          >
            {school.name}
          </h3>

          {/* Divider */}
          <div className="w-15 h-[2px] bg-[#D9B86A] mx-auto  rounded-full mt-1"></div>

          {/* Quote */}
          <p
            className="
              
              text-[14px]
              text-gray-600
              leading-5
              min-h-[50px]
              line-clamp-3
            "
          >
            {school.quote}
          </p>

          {/* Pills */}
          <div className="flex gap-2 mb-2 w-full">
  <div className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-full bg-[#F5F6F7] min-w-0">
    <BookOpen size={16} className="text-[var(--forest)] flex-shrink-0" />
    <span className="text-[13px] font-medium truncate">
      Courses
    </span>
  </div>

  <div className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-full bg-[#F5F6F7] min-w-0">
    <GraduationCap size={16} className="text-[var(--forest)] flex-shrink-0" />
    <span className="text-[13px] font-medium truncate">
      Faculty
    </span>
  </div>

  <div className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-full bg-[#F5F6F7] min-w-0">
    <Building2 size={16} className="text-[var(--forest)] flex-shrink-0" />
    <span className="text-[13px] font-medium truncate">
      Campus
    </span>
  </div>
</div>
          {/* Button */}
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
              text-[16px]
              transition-all
              duration-300
              hover:bg-[#1e4f2d]
              hover:shadow-lg
              mb-2
            "
          >
            Explore More →
          </button>
        </div>
      </div>
    </SwiperSlide>
  );
})}
  </Swiper>
</div>


       
      </div>
    </section>
  );
};

export default SchoolsSection;