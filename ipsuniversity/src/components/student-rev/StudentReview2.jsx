import React, { useEffect, useRef, useState } from "react";
import pharma from '../../images1/pharmaflowertree.png'
import DotedRing from "../DotedRing";
import suraj from '../../images1/suraj.jpeg'
import neeraj from '../../images1/neerajwhite.png'
import indiangirl from '../../images1/indiangirl.png'
import prasansha from '../../images1/prasansha2.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination, Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Suraj Kushwah",
    course: "B.Tech Computer Science",
    image: suraj,
    review:
      "A peaceful campus with supportive faculty that helped me build confidence",
  }, {
    id: 4,
    name: "Prasansha",
    course: "BCA",
    image: prasansha,
    review:
      "Practical learning and excellent mentorship made my journey truly rewarding.",
  },

 
 
  {
    id: 3,
    name: "Neeraj",
    course: "B.Tech",
    image: neeraj,
    review:
      "Experienced quality education with a friendly and motivating campus culture.",
  },

  
  {
    id: 2,
    name: "Payal Kushwah",
    course: "B.Tech",
    image: indiangirl,
    review:
      "Great balance between academics and extracurricular activities in a modern environment.",
  },
  {
    id: 6,
    name: "Neeraj",
    course: "B.Tech",
    image: neeraj,
    review:
      "The university offers a positive atmosphere with excellent learning opportunities.",
  },
  {
    id: 8,
    name: "Rahul Verma",
    course: "BCA",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "A wonderful learning experience with helpful faculty and practical exposure.",
  },
];
const StudentReviews2 = () => {
  const [showCards, setShowCards] = useState(false);
  const sectionRef = useRef(null);
const prevRef = useRef(null);
const nextRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
const swiperRef = useRef(null);
const [expandedReview, setExpandedReview] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowCards(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full   md:py-30 px-4 lg:px-10 overflow-hidden relative mt-10 "
        //  style={{
        //       backgroundImage: `url(${pharma})`,
        //       backgroundSize: "contain",
        //       backgroundPosition: "left",
        //       backgroundRepeat: "no-repeat",
        //     }}
    >

       {/* <div className="absolute inset-0 bg-[var(--moss)] -z-1"></div> */}

       {/* <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      /> */}
       {/* <div
        className="absolute -top-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      /> */}
      {/* <div className="absolute inset-0 bg-white/40 backdrop-blur-[3px] z-0"></div> */}

         {/* <div className="absolute -right-20 lg:right-60 -top-80 opacity-40 lg:opacity-100">
          <DotedRing height={600} width={600} />
        </div>
        <div className="absolute -right-20 lg:-left-100 top-50 opacity-40 lg:opacity-100">
          <DotedRing height={600} width={600} />
        </div> */}
         
      {/* heading */}
      <div className="relative z-20 text-center max-w-xl mx-auto">
  <p className="text-[var(--forest)]/80 tracking-[5px] uppercase text-xs md:text-sm font-medium">
     Student Testimonials
  </p>

  <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-extrabold text-[var(--forest)] mt-2 leading-tight">
     Inspiring Minds and Enriching Life
  </h1>
</div>

      {/* cards */}
   <div className="relative z-20 mt-10 max-w-[1400px] mx-auto">

 <Swiper
   onSwiper={(swiper) => {
    swiperRef.current = swiper;
  }}
  onSlideChange={(swiper) => {
    setActiveIndex(swiper.realIndex);
  }}

  loop={true}
  speed={700}
  spaceBetween={22}
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

  
>   {reviews.map((item) => (
      <SwiperSlide key={item.id} className="py-5   px-2">
  <div
    className="
      bg-white
      rounded-xl
      shadow-md
      hover:shadow-xl
      hover:translate-y-[-5px]
      
      duration-300
      transition
      duration-300
     
      h-[430px]
      flex
      flex-col
      overflow-hidden
      max-w-[270px]
      group
      ml-12
      lg:ml-0
      
    "
  >
    {/* Image */}
    <div className="w-[270px] min-h-[320px] rounded-xl overflow-hidden border-[6px] border-white object-cover group overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition-transform
                duration-700
                group-hover:scale-105"
      />
    </div>

    {/* Review */}
    <div className="flex-1 flex flex-col justify-between  ">
     <div>
      
 <p className="text-gray-800 text-[13px] leading-5 px-3 ">
  {expandedReview === item.id
    ? item.review
    : item.review.length > 60
      ? item.review.slice(0, 60) + ".."
      : item.review} {item.review.length >60 && (
    <button
      onClick={() =>
        setExpandedReview(
          expandedReview === item.id ? null : item.id
        )
      }
      className="text-[var(--forest)] text-xs font-medium mt-1"
    >
      {expandedReview === item.id ? "See less" : "See more"}
    </button>
  )}
</p>

 
</div>

      <div className="">
        {/* <h3 className="font-semibold text-lg text-[var(--forest)]">
          {item.name}
        </h3>

        <p className="text-gray-400 text-sm">
          {item.course}
        </p> */}

        <div className="flex justify-end  mt-3">
          <span
            className="
              bg-[var(--forest)]
              text-md
              font-serif
              text-white
              rounded-tl-lg px-2 py-1
            "
          >
           <p> {item.signature || item.name}</p>
          

          </span>
          
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
    ))}
  </Swiper>

  {/* Controls */}
  <div className="flex items-center justify-center gap-4 mt-8">

    {/* <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="
        w-11
        h-11
        rounded-full
        bg-[var(--forest)]
        text-white
        flex
        items-center
        justify-center
        hover:scale-105
        transition-all
      "
    >
      ←
    </button> */}

    {/* Pagination */}
    <div className="flex justify-center items-center gap-2 mt-6">
  {reviews.map((_, index) => (
    <button
      key={index}
      onClick={() => swiperRef.current?.slideToLoop(index)}
      className={`transition-all duration-300 rounded-full ${
        activeIndex === index
          ? "w-8 h-2 bg-[var(--forest)]"
          : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
      }`}
    />
  ))}
</div>

    {/* <button
      onClick={() => swiperRef.current?.slideNext()}
      className="
        w-11
        h-11
        rounded-full
        bg-[var(--forest)]
        text-white
        flex
        items-center
        justify-center
        hover:scale-105
        transition-all
      "
    >
      →
    </button> */}

  </div>

</div>
      {/* button */}
     {/* button */}
           

    </section>
  );
};

export default StudentReviews2;