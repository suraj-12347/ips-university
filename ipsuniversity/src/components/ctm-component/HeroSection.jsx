import React from "react";
import ctmdashboard from "../../images1/ctmlongpng3.png";
import ctmmain from "../../images1/edubuild7.png";


const HeroSection = () => {
  return (
  <section className="relative group h-[55vh] sm:h-[65vh] lg:h-[95vh] overflow-hidden mt-10">

  {/* Background Image */}
  <img
    src={ctmdashboard}
    alt="School of Engineering & Technology"
    className="w-full h-full object-cover object-left md:object-center transition-transform duration-700 lg:group-hover:scale-105"
  />

  {/* Overlay */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-t
      from-[#183A1D]/90
      via-[#183A1D]/55
      to-transparent
      opacity-100
      lg:opacity-0
      lg:group-hover:opacity-100
      transition-all
      duration-500
      flex
      items-end
      z-20
    "
  >
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-8 sm:pb-10 lg:pb-16">

      {/* Tag */}
      <span className="inline-block text-[var(--forest)] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] font-semibold text-[11px] sm:text-xs lg:text-sm mb-3">
        Empowering Future Engineers
      </span>

      {/* Heading */}
      <h1
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15]"
         style={{
      fontFamily:"Fraunces, serif"
    }}>
      
        School of <br />
        Engineering & Technology
      </h1>

      <div className="w-16 sm:w-20 lg:w-24 h-[3px] bg-[#C7D36F] rounded-full my-4 lg:my-6"></div>

      {/* Paragraph */}
     <p
  className="max-w-2xl text-white/90 text-base md:text-lg leading-8 font-normal"
  style={{
    fontFamily: '"Inter", sans-serif',
  }}
>
  Shaping Future Engineers Through Excellence, Innovation,
  Research and Professional Development while preparing
  students for global opportunities.
</p>
      {/* Button */}
      <button
        className="
          mt-6
          lg:mt-8
          px-5
          sm:px-6
          lg:px-8
          py-2.5
          sm:py-3
          rounded-full
          bg-[var(--forest)]
          text-white
          text-sm
          sm:text-base
          font-semibold
          hover:bg-white
          hover:text-[var(--forest)]
          transition-all
          duration-300
        "
      >
        Explore Campus →
      </button>

    </div>
  </div>

</section>
  );
};

export default HeroSection;
