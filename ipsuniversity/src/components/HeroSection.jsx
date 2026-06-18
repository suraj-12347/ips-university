// HeroSection.jsx

import React from "react";
import { Play, X } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[82vh] overflow-hidden">

      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">

        <iframe
          className="absolute top-1/2 left-1/2 
          w-[177.77vh] min-w-full 
          h-[56.25vw] min-h-full 
          -translate-x-1/2 -translate-y-1/2 
          pointer-events-none"

          src="https://www.youtube.com/embed/l_H_84lP8g8?autoplay=1&mute=1&loop=1&playlist=l_H_84lP8g8&controls=0&showinfo=0&modestbranding=1"

          title="University Background Video"

          allow="autoplay; encrypted-media"

          referrerPolicy="strict-origin-when-cross-origin"

          allowFullScreen
        />
      </div>

      {/* Bottom White Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-[52%] z-[1] "
        style={{
          background:
            "linear-gradient(to top, #fff 20.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />

      {/* Left Forest Tint */}
      <div
        className="absolute left-0 top-0 w-[55%] h-full z-[1]"
        
      />

      {/* Content */}
      <div className="relative z-[3] max-w-[1350px] mx-auto h-full px-4 lg:px-6 flex items-end pb-5 ">

        <div className="max-w-full md:flex hidden  gap-2 md:gap-100">

          {/* Badge */}
          <div className="w-full">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(255,255,255,.14)] bg-[rgba(255,255,255,.08)] backdrop-blur-md mb-8">

            <div className="w-2 h-2 rounded-full bg-[var(--leaf)]" />

            <span className="text-white text-[10px] md:text-[11px] tracking-[1.2px] uppercase font-semibold">
              Recognized University · Est. 2005
            </span>
          </div>

          {/* Heading */}
         <div className="w-full">

  <h1 className="text-[34px] md:text-[54px] leading-[1.04] font-[700] tracking-[-1.5px]">

    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(135deg,var(--grass),var(--moss))",
      }}
    >
      Planting
    </span>

    <span className="text-[var(--forest)]">
      {" "}
      Future,
    </span>

    <br />

    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(135deg,var(--moss),var(--leaf))",
      }}
    >
      Growing Leaders
    </span>

  </h1>

</div>
          </div>

          {/* Description */}
         <div className="w-full">

  <p className="mt-5 text-gray-900 font-[600] text-[10px] md:text-[14px] leading-6 max-w-[620px] drop-shadow-[0_2px_10px_rgba(255,255,255,.35)] text-justify">

    IPS University, Gwalior — 80 Acres
    Sprawling Campus NAAC Accredited
    25+ Years of Excellence in Education,
    Research & Innovation.

  </p>



          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7">

            {/* Primary */}
            <a
              href="#"
              className="h-[48px] px-7 rounded-xl text-white text-[13px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.03]"
              style={{
                background:
                  "linear-gradient(135deg,var(--forest),var(--grass))",

                boxShadow:
                  "0 10px 25px rgba(49,87,44,.22)",
              }}
            >
              Apply for 2025–26 →
            </a>

            {/* Secondary */}
            {/* <a
              href="#"
              className="h-[48px] px-7 rounded-xl border border-[rgba(255,255,255,.18)] bg-[rgba(255,255,255,.08)] backdrop-blur-md text-[var(--white)] text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[rgba(255,255,255,.14)]"
            >
              ▶ Watch Campus Tour
            </a> */}
            <a
              href="#"
              className="h-[48px] px-7 rounded-xl border border-[var(--forest)] bg-[rgba(255,255,255,.5)] backdrop-blur-md text-[var(--forest)] text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[rgba(255,255,255,.14)]"
            >
              <Play size={16} /> Watch Campus Tour
            </a>
          </div></div>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;