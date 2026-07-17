import React from "react";
import { ArrowRightToLine } from "lucide-react";
import tree from "../../images1/pharmaflowertree3.png";
import suraj from "../../images1/suraj.jpeg";
import neeraj from "../../images1/neeraj.jpeg";
import prasansha from "../../images1/prasansha.jpeg";

const placements = [
  {
    company: "Nagarro",
    student: "Ayush Raj Sharma",
    image:
      suraj,
  },
  {
    company: "TATA Consultancy",
    student: "Jatin Shrivastava",
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
  {
    company: "Infosys",
    student: "Roshni",
    image:
      prasansha,
  },
];

const PlacementsSection = () => {
  return (
   <section
  className="relative py-12 md:py-15 overflow-hidden mt-20 md:mt-20"
  style={{
    backgroundImage: `url(${tree})`,
    backgroundSize: "cover",
    
    backgroundRepeat: "no-repeat",
  }}
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
        min-w-[260px]
        sm:min-w-[280px]
        md:min-w-[300px]
        max-h-[280px]
        bg-white
        rounded-[28px]
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-500
        flex-shrink-0
        border
        border-4 
        border-white
      "
    >
      {/* Top Gradient */}
      <div
        className="
         
          h-20
          bg-[#31572c]
        "
      />

      {/* Student Image */}
      <div className="relative -mt-14 flex justify-center">

        <img
          src={item.image}
          alt={item.student}
          className="
            w-28
            h-28
            rounded-full
            object-cover
            border-[6px]
            border-white
            shadow-lg
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

      </div>

      {/* Content */}
      <div className="px-6 pb-6 pt-2 text-center">

        {/* <span
          className="
            inline-block
            px-4
            py-1.5
            rounded-full
            bg-[#ecf39e]
            text-[#31572c]
            text-xs
            font-semibold
            tracking-wide
          "
        >
          Placement
        </span> */}

        <h3
          className="mt-1 text-xl text-[#31572c]"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          {item.company}
        </h3>

        <p className="mt-1 text-gray-600 leading-7">
          {item.student}
        </p>

        <button
          className="
            mt-2
            inline-flex
            items-center
            gap-2
            text-[#31572c]
            font-semibold
            group/button
          "
        >
          View Profile

          <span
            className="
              w-9
              h-9
              rounded-full
              bg-[#31572c]
              text-white
              flex
              items-center
              justify-center
              transition-all
              duration-300
              group-hover/button:translate-x-1
            "
          >
            →
          </span>
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