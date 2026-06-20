import React, { useEffect, useRef, useState } from "react";
import pharma from '../../images1/flower2.jpeg'
import DotedRing from "../DotedRing";
import suraj from '../../images1/suraj.jpeg'
import neeraj from '../../images1/neeraj.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    id: 1,
    name: "Suraj Kushwah",
    course: "B.Tech Computer Science",
    image:suraj,
    review:
      "The campus environment feels peaceful and growth-oriented. Faculty support and practical exposure genuinely helped me improve my confidence.",
  },
  {
    id: 2,
    name: "Neeraj",
    course: "B-tech",
    image:neeraj,
    review:
      "What I liked most was the balance between academics and extracurricular activities. The university atmosphere feels modern yet calm.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    course: "BCA",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The learning experience here feels practical instead of only theoretical. Mentorship and peer culture helped me grow personally as well.",
  },
  {
    id: 2,
    name: "Neeraj",
    course: "B-tech",
    image:neeraj,
    review:
      "What I liked most was the balance between academics and extracurricular activities. The university atmosphere feels modern yet calm.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    course: "BCA",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The learning experience here feels practical instead of only theoretical. Mentorship and peer culture helped me grow personally as well.",
  },
  {
    id: 2,
    name: "Neeraj",
    course: "B-tech",
    image:neeraj,
    review:
      "What I liked most was the balance between academics and extracurricular activities. The university atmosphere feels modern yet calm.",
  },
  {
    id: 3,
    name: "Rahul Verma",
    course: "BCA",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The learning experience here feels practical instead of only theoretical. Mentorship and peer culture helped me grow personally as well.",
  },
];

const StudentReviews2 = () => {
  const [showCards, setShowCards] = useState(false);
  const sectionRef = useRef(null);
const prevRef = useRef(null);
const nextRef = useRef(null);
const [activeIndex, setActiveIndex] = useState(0);
const swiperRef = useRef(null);

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
      className="w-full  py-5 md:py-6 px-4 md:px-8 overflow-hidden relative mt-10 "
         style={{
              backgroundImage: `url(${pharma})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
    >

       {/* <div className="absolute inset-0 bg-[var(--moss)] -z-1"></div> */}

       <div
        className="absolute -bottom-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
       <div
        className="absolute -top-2 left-0 w-full h-[70%] z-0"
        style={{
          background:
            "linear-gradient(to bottom, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[4px] z-0"></div>

         {/* <div className="absolute -right-20 lg:right-60 -top-80 opacity-40 lg:opacity-100">
          <DotedRing height={600} width={600} />
        </div>
        <div className="absolute -right-20 lg:-left-100 top-50 opacity-40 lg:opacity-100">
          <DotedRing height={600} width={600} />
        </div> */}
         
      {/* heading */}
      <div className="relative z-20 text-center max-w-xl mx-auto">
  <p className="text-[var(--forest)]/80 tracking-[5px] uppercase text-xs md:text-sm font-medium">
    Student Voice
  </p>

  <h2 className="mt-2 md:mt-4 text-xl md:text-4xl font-semibold text-[var(--forest)] leading-snug md:leading-tight">
    Experiences That Define Our Campus
  </h2>
</div>

      {/* cards */}
   <div className="relative z-20 mt-10 max-w-6xl mx-auto">

  <Swiper
    onSwiper={(swiper) => {
      swiperRef.current = swiper;
    }}
    onSlideChange={(swiper) => {
      setActiveIndex(swiper.realIndex);
    }}
    loop={true}
    speed={700}
    spaceBetween={24}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }}
  >
    {reviews.map((item) => (
      <SwiperSlide key={item.id} className="h-auto">

        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            md:p-8
            border
            border-gray-100
            h-[340px]
            flex
            flex-col
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-2
          "
        >
          {/* Profile */}
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="
                w-14
                h-14
                md:w-20
                md:h-20
                rounded-full
                object-cover
              "
            />

            <div>
              <h3 className="font-semibold text-[var(--forest)] text-lg">
                {item.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.course}
              </p>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-5"></div>

          {/* Review */}
          <p
            className="
              text-gray-600
              text-sm
              leading-7
              overflow-hidden
            "
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 5,
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.review}
          </p>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <div className="text-[var(--grass)]">
              ★★★★★
            </div>

            <div
              className="
                w-10
                h-10
                rounded-full
                bg-[var(--forest)]/10
                flex
                items-center
                justify-center
                text-[var(--forest)]
                text-xl
              "
            >
              ”
            </div>
          </div>
        </div>

      </SwiperSlide>
    ))}
  </Swiper>

  {/* Controls */}
  <div className="flex items-center justify-center gap-4 mt-8">

    <button
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
    </button>

    {/* Pagination */}
    <div className="flex items-center gap-2">
      {reviews.map((_, index) => (
        <button
          key={index}
          onClick={() => swiperRef.current?.slideToLoop(index)}
          className={`
            rounded-full
            transition-all
            duration-300
            ${
              activeIndex === index
                ? "w-8 h-2 bg-[var(--forest)]"
                : "w-2 h-2 bg-gray-300"
            }
          `}
        />
      ))}
    </div>

    <button
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
    </button>

  </div>

</div>
      {/* button */}
     {/* button */}
           

    </section>
  );
};

export default StudentReviews2;