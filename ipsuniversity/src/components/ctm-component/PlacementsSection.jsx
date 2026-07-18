import React from "react";
import { ArrowRightToLine } from "lucide-react";
import tree from "../../images1/pharmaflowertree3.png";
import suraj from "../../images1/suraj.jpeg";
import neeraj from "../../images1/neerajwhite.png";
import prasansha from "../../images1/prasansha2.png";
import indiangirl from "../../images1/indiangirl.png";

const placements = [
  {
    company: "Nagarro",
    student: "Ayush Raj ",
    image:
      suraj,
  },
  {
    company: "Infosys",
    student: "Roshni",
    image:
      indiangirl,
  },
  {
    company: "TATA Consultancy",
    student: "Jatin ",
    image:
      neeraj,
  },
  {
    company: "SNS",
    student: "Prasansha",
    image:
      prasansha,
  },
  {
    company: "TCS",
    student: "Rohan Chawan",
    image:
      suraj,
  },
  {
    company: "Wipro",
    student: "Sourav Suman",
    image:
      neeraj,
  },
  
];

const PlacementsSection = () => {
  return (
   <section
  className="relative py-12 md:py-15 overflow-hidden mt-20 md:mt-20"
  // style={{
  //   backgroundImage: `url(${tree})`,
  //   backgroundSize: "cover",
    
  //   backgroundRepeat: "no-repeat",
  // }}
>

  <div
        className="absolute -bottom-1 left-0 w-full h-[80%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 1%, rgba(255,255,255,0) 60.44%)",
        }}
      />

      {/* <div
        className="absolute top-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to bottom, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      /> */}
  {/* White Overlay */}
  <div className="absolute inset-0  bg-white/40 backdrop-blur-[2px] z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
    
   <div className="text-center mb-10 md:mb-16">

  <p
    className="
      uppercase
      tracking-[4px]
      text-sm
      font-semibold
      text-[var(--grass)]
      mb-3
    "
    style={{
      fontFamily:"Outfit, sans-serif"
    }}
  >
    Career & Opportunities
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
    Placements

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
      text-gray-600
      leading-8
      text-base
      md:text-lg
    "
    style={{
      fontFamily:"Outfit, sans-serif"
    }}
  >
    Empowering students with industry-ready skills, professional growth
    opportunities and successful career pathways through strong
    industry connections and placement support.
  </p>

</div>

    <div className="relative">

      {/* Cards */}
      <div
  id="placement-scroll"
  className="
    flex
    gap-6
    overflow-x-auto
    pb-6
    scroll-smooth
    scrollb
    py-4
  "
>
  {placements.map((item, index) => (
    <div
  key={index}
  className="
    group
    relative
    w-full
    max-w-[285px]
    h-[390px]
    rounded-[28px]
    overflow-hidden
    cursor-pointer
    shadow-lg
    hover:shadow-2xl
    hover:-translate-y-2
    transition-all
    duration-500
    mx-auto
    flex-shrink-0
  "
>
  {/* Image */}
  <img
    src={item.image}
    alt={item.student}
    className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-110
    "
  />

  {/* Optional Dark Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-t
      from-black/30
      to-transparent
    "
  />

  {/* Floating Card */}
  <div
    className="
      absolute
      left-4
      right-4
      bottom-4
      bg-white
      rounded-2xl
      px-5
      py-4
      shadow-xl
      flex
      items-center
      justify-between
      transition-all
      duration-500
      group-hover:bottom-6
    "
  >
    <div className="pr-3">
      <h3
        className="text-[22px] leading-tight text-[var(--forest)]"
        style={{ fontFamily: "Fraunces, serif" }}
      >
        {item.student}
      </h3>

      <p className="text-sm text-gray-500 mt-1">
        {item.company}
      </p>
    </div>

    {/* Arrow Button */}
    <button
      className="
        w-11
        h-11
        rounded-full
        border
        border-gray-300
        flex
        items-center
        justify-center
        transition-all
        duration-300
        text-[var(--forest)]
        group-hover:bg-[var(--forest)]
        group-hover:text-white
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 17L17 7M17 7H8M17 7V16"
        />
      </svg>
    </button>
  </div>
</div>
  ))}
</div>

      {/* Right Arrow */}
      <button
        onClick={() => {
          document
            .getElementById("placement-scroll")
            ?.scrollBy({
              left: 350,
              behavior: "smooth",
            });
        }}
        className="
          absolute
          right-2
          md:-right-6
          top-1/2
          -translate-y-1/2
          p-2 md:p-3
          hover:scale-110
          transition
          z-10
          bg-white
          rounded-full
          shadow-lg
        "
      >
        <ArrowRightToLine
          size={24}
          className="text-[var(--forest)]"
        />
      </button>

    </div>

  </div>
</section>
  );
};

export default PlacementsSection;