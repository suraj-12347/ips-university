import React from "react";
import { Play, X } from "lucide-react";
import bgImage from '../images1/edubuild2.png';

const About = () => {
  return (
    <section className="relative w-full h-[60vh] ">

      {/* Background */}
      <div
        className="w-full absolute -top-90 z-10  h-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
         
        }}

         
      >
      </div>

      {/* Bottom White Overlay */}
      <div
        className="absolute bottom-0 left-0 w-full h-[52%] z-[1]"
        style={{
          background:
            "linear-gradient(to top, #fff 2.74%, rgba(255,255,255,0) 60.44%)",
        }}
      />

      {/* Left Forest Tint */}
      <div className="absolute left-0 top-0 w-[55%] h-full z-[1]" />

      {/* Content */}
      <div className="relative z-[3] max-w-[1350px] mx-auto h-full px-4 lg:px-6 flex items-end pb-5">
        <div className="max-w-full md:flex hidden gap-2 md:gap-100">
        </div>
      </div>
    </section>
  );
};

export default About;