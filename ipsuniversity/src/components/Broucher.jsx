import React from "react";
import {
  CheckCircle,
  ArrowRight,
} from "lucide-react";

// Remove these imports

// import IMG1 from "../assets/images/brochure1.jpg";
// import IMG2 from "../assets/images/brochure2.jpg";
// import IMG3 from "../assets/images/brochure3.jpg";

const IMG1 =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80";

const IMG2 =
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=700&q=80";

const IMG3 =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80";
const BrochureSection = () => {
  return (
    <section className="relative py-28 overflow-hidden  mt-20 bg-[#f8fbf6]">

      {/* Decorative Circle */}
      <div className="absolute -left-44 top-28 w-[520px] h-[520px] rounded-full border border-[#578B07]/30"></div>
      <div className="absolute -left-52 top-20 w-[640px] h-[640px] rounded-full border border-red-400/20"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* ================= LEFT IMAGES ================= */}

       

<div className="flex justify-center z-40">
  <div className="grid grid-cols-[150px_300px] md:grid-cols-[220px_380px] gap-1 md:gap-5 items-start">

    {/* Left Side */}
    <div className="flex flex-col gap-2 md:gap-5 pt-5">

      <div className="h-[150px] md:h-[250px]  rounded-xl overflow-hidden shadow-xl md:w-full">
        <img
          src={IMG1}
          alt=""
          className="w-full h-full object-cover   transition-transform
    duration-500
    hover:scale-105"
        />
      </div>

      <div className="md:h-[180px] h-30 ml-12 rounded-xl overflow-hidden shadow-xl   ">
        <img
          src={IMG2}
          alt=""
          className="w-full  h-full object-cover   transition-transform
    duration-500
    hover:scale-105"
        />
      </div>

    </div>

    {/* Right Large Image */}
    <div className="relative">

      <div className="md:h-[560px] h-[400px] rounded-xl overflow-hidden shadow-2xl w-[70%] md:w-full">
        <img
          src={IMG3}
          alt=""
          className="w-full h-full object-cover
            transition-transform
    duration-500
    hover:scale-105"
        />
      </div>

      {/* Decorative Circle */}
      <div className="absolute -top-4 right-2 w-14 h-14 rounded-full border-[4px] border-[#578B07] border-r-transparent border-b-transparent rotate-45 -z-1"></div>

    </div>

  </div>
</div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>

            <span className="text-[#578B07] font-semibold uppercase tracking-[3px]">
              Download Brochure
            </span>

            <h2 className="mt-4 text-4xl lg:text-6xl font-bold text-[var(--forest)] leading-tight">
              Ready To Plant
              <br />
              your
              <span className="text-[#578B07]"> Future !!</span>
            </h2>

            <p className="mt-6 text-gray-600 text-md leading-8 max-w-xl">
               Transform your future with world-class education, industry-focused learning, and endless opportunities at IPS University, Gwalior.
         
            </p>

            <div className="mt-6 space-y-3">

              {[
                "Detailed Academic Programs",
                "Modern Campus Facilities",
                "Admission Process & Eligibility",
                "Placement & Career Opportunities",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-[#578B07]/10 flex items-center justify-center">
                    <CheckCircle
                      size={20}
                      className="text-[#578B07]"
                    />
                  </div>

                  <span className="text-lg text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button
              className="
              mt-8
              inline-flex
              items-center
              gap-3
              bg-[#31572c]
              hover:bg-[#578B07]
              transition
              duration-300
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
            "
            >
              Download Brochure
              <ArrowRight size={20} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default BrochureSection;