import React from "react";
   import { Link } from "react-router-dom";
   import principal from '../../images1/principaledu.jpg'

const PrincipalDesk = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-5 group">
        <div
  className="relative h-[550px]  bg-cover bg-center"
  style={{
    backgroundImage:
      `url(${principal})`,
  }}
>
  {/* Optional Dark Overlay */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Left White Fade */}
  <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white via-white/70 to-transparent"></div>

  {/* Content Card */}
  <div
    className="
      absolute
      left-10
      top-1/2
       transition-all
      duration-500
      group-hover:top-45
      -translate-y-1/2
      bg-[var(--forest)]
      text-white
      w-full
      lg:w-[52%]
      px-8
      sm:px-10
      lg:px-10
      py-10
      shadow-[0_25px_60px_rgba(0,0,0,0.18)]
      z-20
    "
  >
    <span className="inline-block uppercase tracking-[4px] text-[11px] sm:text-xs text-[var(--leaf)] font-semibold">
      School Of Education
    </span>

    <h2 className="text-2xl lg:text-4xl font-bold mt-4">
      Principal's Desk
    </h2>

    <div className="w-20 h-[3px] bg-[var(--leaf)] mt-2"></div>

    <p className="mt-5 text-white/90 leading-7 text-[15px]">
      Welcome to the School of Education. We are committed to preparing
      future educators through academic excellence, practical learning,
      innovation, and strong ethical values in a supportive environment.
    </p>

    <div className="mt-6">
      <h4 className="text-xl font-semibold">
        Dr. Rajesh Kumar Sharma
      </h4>

      <p className="text-white/70 mt-1">
        Principal, School Of Education
      </p>
    </div>

    <Link
      to="/school-of-education/principal-message"
      className="
        inline-block
        mt-6
        border
        border-white
        px-5
        py-2.5
        transition-all
        duration-300
        hover:bg-white
        hover:text-[var(--forest)]
      "
    >
      Read More
    </Link>
  </div>
</div>
      </div>
    </section>
  );
};

export default PrincipalDesk;