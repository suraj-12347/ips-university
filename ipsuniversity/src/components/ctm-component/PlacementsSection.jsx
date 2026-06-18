import React from "react";
import { ArrowRightToLine } from "lucide-react";
import tree from "../../images1/pharmaflowertree3.png";

const placements = [
  {
    company: "Nagarro",
    student: "Ayush Raj Sharma",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  },
  {
    company: "TATA Consultancy",
    student: "Jatin Shrivastava",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    company: "SNS",
    student: "Piyush Jain",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
  },
  {
    company: "TCS",
    student: "Rohan Chawan",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400",
  },
  {
    company: "Wipro",
    student: "Sourav Suman",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    company: "Infosys",
    student: "Rahul Verma",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400",
  },
];

const PlacementsSection = () => {
  return (
   <section
  className="relative py-12 md:py-15 overflow-hidden mt-10 md:mt-20"
  style={{
    backgroundImage: `url(${tree})`,
    backgroundSize: "cover",
    
    backgroundRepeat: "no-repeat",
  }}
>

  <div
        className="absolute bottom-0 left-0 w-full h-[80%] z-[2]"
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
  <div className="absolute inset-0  bg-white/20 backdrop-blur-[2px] z-0"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
    
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 text-[var(--forest)]">
      Placements
    </h2>

    <div className="relative">

      {/* Cards */}
      <div
        id="placement-scroll"
        className="flex gap-4 md:gap-6 overflow-x-auto  pb-4 scroll-smooth scrollb py-4"
      >
        {placements.map((item, index) => (
          <div
            key={index}
            className="
              min-w-[240px]
              sm:min-w-[260px]
              md:min-w-[280px]
              bg-white
              p-6
              text-center
              shadow-lg
              rounded-2xl
              flex-shrink-0
              hover:-translate-y-2
              transition-all
              duration-300
              border-t
              border-gray-100
            "
          >
            <img
              src={item.image}
              alt={item.student}
              className="h-24 w-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
            />

            <h3 className="font-bold text-lg md:text-xl text-[var(--forest)]">
              {item.company}
            </h3>

            <p className="mt-3 text-gray-600 text-sm md:text-base">
              {item.student}
            </p>
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
          md:-right-12
          top-1/2
          -translate-y-1/2
          p-2 md:p-3
          hover:scale-110
          transition
          z-10
          bg-white
          rounded-full
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