import React from "react";
import { Play } from "lucide-react";

const Herosec = () => {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative w-full min-h-[82vh] overflow-hidden">
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
          src="https://www.youtube.com/embed/l_H_84lP8g8?autoplay=1&mute=1&loop=1&playlist=l_H_84lP8g8&controls=0&rel=0&modestbranding=1"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>

      {/* Bottom White Gradient */}
      <div
        className="absolute bottom-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />

      {/* Explore Button */}
      <button
        onClick={handleScroll}
        className="
          absolute
          bottom-10
          md:bottom-8
          left-1/2
          -translate-x-1/2
          z-[9999]
          flex
          flex-col
          items-center
          gap-2
          cursor-pointer
          group
        "
        type="button"
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
          "
        >
          <span className="text-[20px] animate-bounce text-[var(--forest)]">
            ↓
          </span>
        </div>

        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[3px]
            text-[var(--forest)]
            transition-all
            duration-500
            group-hover:tracking-[5px]
          "
        >
          Explore
        </span>
      </button>

      {/* Right Bottom Buttons */}
      <div className="relative z-[5] flex flex-col justify-end items-end w-full h-[82vh] px-4 md:px-8 pb-8">
        <div className="hidden md:flex items-center gap-4">
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