import React from "react";
import ctmdashboard from "../../images1/ctmlongpng3.png";
import ctmmain from "../../images1/edubuild7.png";


const HeroSection = () => {
  return (
    <section className="relative h-[60vh] sm:h-[75vh] md:h-[95vh]  mb-80 md:mb-0">

     {/* <div
        className="absolute bottom-0 left-0 w-full h-[70%] z-[2]"
        style={{
          background:
            "linear-gradient(to top, #fff 1.74%, rgba(255,255,255,0) 60.44%)",
        }}
      /> */}

      <img
        src={ctmdashboard}
        alt=""
        className="w-full md:h-full h-[100vh] object-cover md:object-center object-left "
        
      />

      <div className="absolute top-10 md:top-2 lg:top-10 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
         <h1
  className="text-3xl lg:text-5xl font-bold  text-[var(--forest)] mt-25 md:mt-1 ml-10"
  style={{
    fontFamily: '"Noto Serif", serif',
    fontOpticalSizing: "auto",
    fontWeight: 500,
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }}
>
  School of 
</h1>
 <h1
  className="text-5xl lg:text-7xl font-bold mb-6 text-[var(--forest)]"
  style={{
    fontFamily: '"Noto Serif", serif',
    fontOpticalSizing: "auto",
    fontWeight: 700,
    fontStyle: "normal",
    fontVariationSettings: '"wdth" 100',
  }}
>
  Engineering
</h1>

          {/* <p className="max-w-2xl text-lg md:text-xl text-gray-700">
            Shaping Future Engineers Through Excellence, Innovation
            and Professional Development.
          </p>

          <button className="mt-8 px-8 py-3 bg-white text-[var(--forest)] font-semibold">
            Explore Campus
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
