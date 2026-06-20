// HeroSection.jsx

import React from "react";
import { Play } from "lucide-react";

const Herosec = () => {
  return (
    <section className="relative w-full min-h-[82vh] overflow-hidden mt-30 md:mt-20 lg:mt-30">
      
      {/* Background Video */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          className="
            absolute
            top-1/2
            left-1/2
            w-[177.77vh]
            h-[56.25vw]
            min-w-full
            min-h-full
            -translate-x-1/2
            -translate-y-1/2
            pointer-events-none
          "
          src="https://www.youtube.com/embed/l_H_84lP8g8?autoplay=1&mute=1&loop=1&playlist=l_H_84lP8g8&controls=0&showinfo=0&rel=0&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Dark Overlay */}
      

      {/* Bottom White Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />

      {/* Explore Button */}
      <div
  className="
    absolute
    md:bottom-8
    bottom-20
    left-1/2
    -translate-x-1/2
    z-[999]
    cursor-pointer
  "
>
        <a
          href="#about"
          className="
            group
            flex
            flex-col
            items-center
            gap-2
            text-white
            tracking-[3px]
            uppercase
            text-[11px]
            font-semibold
           
          "
        >
          <div
            className="
              w-[65px]
              h-[65px]
              rounded-full
              border
              border-[var(--forest)]
              bg-white/10
              backdrop-blur-md
              flex
              items-center
              justify-center
              transition-all
              duration-500
              group-hover:scale-110
              group-hover:bg-white/20
              shadow-xl
              -mt-40 lg:mt-0
            "
          >
            <span className="text-[20px] animate-bounce text-[var(--forest)]">
              ↓
            </span>
          </div>

          <span className="group-hover:tracking-[5px] transition-all duration-500 text-[var(--forest)]">
            Explore
          </span>
        </a>
      </div>

      {/* Right Bottom Buttons */}
      <div className="relative z-[5] flex flex-col justify-end items-end w-full h-[82vh] px-4 md:px-8 pb-8">
        <div className="hidden md:flex items-center gap-4">
          
          {/* Apply Button */}
          <a
            href="#"
            className="h-[48px] px-6 rounded-xl text-white text-[12px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.03] shadow-lg"
            style={{
              background:
                "linear-gradient(135deg,var(--forest),var(--grass))",
            }}
          >
            Apply for 2025–26 →
          </a>

          {/* Campus Tour */}
          <a
            href="#"
            className="h-[48px] px-7 rounded-xl border border-[var(--forest)] bg-white/50 backdrop-blur-md text-[var(--forest)] text-[13px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/70"
          >
            <Play size={16} />
            Campus Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Herosec;