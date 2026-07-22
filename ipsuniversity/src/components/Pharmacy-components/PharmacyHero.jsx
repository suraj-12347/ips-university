import React from "react";
import ctmdashboard from "../../images1/ctmlongpng3.png";
import educationbg from "../../images1/pharma3.png";


const HeroSection = () => {
  return (
  <section className="relative group h-[55vh] sm:h-[65vh] lg:h-[85vh] overflow-hidden mt-10">

  {/* Background Image */}
  <img
    src={educationbg}
    alt="School of Engineering & Technology"
    className="w-full h-full object-cover object-left md:object-center transition-transform duration-700  lg:group-hover:scale-105"
  />

  {/* <div
        className="absolute bottom-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      /> */}

  {/* Overlay */}
  {/* <div
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
      items-start
      pt-23
      z-20
      justify-start
    "
  >
    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-4 pb-8 sm:pb-10 lg:pb-16">

 
  <span className="inline-block text-[var(--forest)] uppercase tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] font-semibold text-[11px] sm:text-xs lg:text-sm mb-3">
   Excellence in Education
  </span>


  <h1
    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15]"
    style={{
      fontFamily: "Fraunces, serif",
    }}
  >
    School of <br />
    Education
  </h1>

  <div className="w-16 sm:w-20 lg:w-24 h-[3px] bg-[#C7D36F] rounded-full my-4 lg:my-6"></div>


  <p
    className="max-w-2xl text-white/90 text-base md:text-lg leading-8 font-normal"
    style={{
      fontFamily: '"Inter", sans-serif',
    }}
  >
    Nurturing compassionate educators through quality teaching,
    practical learning, innovation, and research to shape the
    future of education.
  </p>


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
    Explore School →
  </button>

</div>
  </div> */}

</section>
  );
};

export default HeroSection;
